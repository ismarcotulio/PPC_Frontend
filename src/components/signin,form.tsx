'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

import { LoginUser } from '../services/users';
import ErrorListNotification from './ErrorListNotification';

export default function SignInForm() {
  const router = useRouter();
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ warningMessage, setWarningMessage ] = useState([] as string[]);

  useEffect(() => {
    localStorage.removeItem('token');
}, []);


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

      LoginUser({
          email: email,
          password: password
      }).then( (response) => {
          if (response.error) {
              setWarningMessage([response.error]);
          } else {
              localStorage.setItem('token', response.idToken);
              router.push('/');
          }
      }).catch( (error) => {
          setWarningMessage(['Network response was not ok','User or password incorrect']);
      })
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-start gap-0.5 text-lg text-color-palette-primary-160">
        <div className="relative leading-[150%] font-semibold">
          Iniciar sesion
        </div>
        { showFirstDiv && (
        <div className="relative text-sm leading-[150%] text-black mb-4">
          Ingresa tu correo para iniciar sesion en la aplicacion
        </div>
        )}
        { showSecondDiv && (
        <div className="relative text-sm leading-[150%] text-black mb-4">
          Ingresa tu contraseña para iniciar sesion en la aplicacion
        </div>
        )}
        { warningMessage.length > 0 && <ErrorListNotification errors={warningMessage} /> }
      </div>
      { showFirstDiv && (
      <div className="w-[327px] flex flex-col items-start justify-start gap-4 text-left">
        
        <input 
            id="email" 
            value={email} 
            onChange={ (e) => setEmail( e.target.value ) }  
            name="email"  
            autoComplete="email"
            className="self-stretch rounded-lg bg-color-palette-neutral-00 border-gainsboro-200 border-[1px] border-solid box-border h-10 flex flex-row items-center justify-start py-2 px-4 transition-all duration-500 ease-in-out transform translate-x-0"
            type="email"
            placeholder="email@domain.com"
          />
        
        <button 
          type='button'
          className="self-stretch rounded-lg bg-color-palette-primary-190 active:bg-color-palette-primary-180 h-10 flex flex-row items-center justify-center py-0 px-4 box-border text-color-palette-neutral-00 transition duration-150 ease-in-out"
          onClick={() => {
            setWarningMessage([]);
            const warnings = [];
            if (email.length === 0) {
              warnings.push('Email es requerido');
            }  

            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                warnings.push('Formato de correo invalido');
            }
            if (warnings.length > 0) {
              setWarningMessage(warnings);
              
            }else{
              setShowFirstDiv(false)
              setShowSecondDiv(true) 
              setWarningMessage([]);
            }
          }}
        >
          Iniciar sesion con correo
        </button>
      </div>
      )}
      { showSecondDiv && (
      <div className="w-[327px] flex flex-col items-start justify-start gap-4 text-left">
        
        <input 
            className="self-stretch rounded-lg bg-color-palette-neutral-00 border-gainsboro-200 border-[1px] border-solid box-border h-10 flex flex-row items-center justify-start py-2 px-4 transition-all duration-500 ease-in-out transform translate-x-0"
            type="password"
            placeholder="Contraseña" 
            id="password" 
            value={password} 
            onChange={ (e) => setPassword( e.target.value ) } 
            name="password" 
            autoComplete="current-password"
          />

        <div className="flex justify-between w-full">
        <button 
            className="flex-grow self-stretch rounded-lg bg-color-palette-primary-190 active:bg-color-palette-primary-180 h-10 flex flex-row items-center justify-center py-0 px-4 box-border text-color-palette-neutral-00 transition duration-150 ease-in-out"
            onClick={() => {
              setWarningMessage([]);
              setShowFirstDiv(true)
              setShowSecondDiv(false) 
            }}
          >
            Volver
          </button>
          <button 
            className="flex-grow self-stretch rounded-lg bg-color-palette-primary-190 active:bg-color-palette-primary-180 h-10 flex flex-row items-center justify-center py-0 px-4 box-border text-color-palette-neutral-00 transition duration-150 ease-in-out"
            onClick={(e) => {
              setWarningMessage([]);
              const warnings = [];
              if (password.length === 0) {
                warnings.push('La contraseña es requerida');
              }
  
              if (password.length < 6) {
                warnings.push('La contraseña debe tener al menos 6 caracteres');
              }
      
              if (!/[A-Z]/.test(password)) {
                  warnings.push('La contraseña debe contener al menos una letra mayúscula');
              }
          
              if (!/[\W_]/.test(password)) {
                  warnings.push('La contraseña debe contener al menos un caracter especial');
              }
          
              if (/(012|123|234|345|456|567|678|789|890)/.test(password)) {
                  warnings.push('La contraseña no puede contener secuencias de números');
              }
              if (warnings.length > 0) {
                setWarningMessage(warnings);
                
              }else{
                handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
                setWarningMessage([]);
              }
            }}
          >
            Entrar
          </button>
          
        </div>
      </div>
      )}
    </div>
  );
}