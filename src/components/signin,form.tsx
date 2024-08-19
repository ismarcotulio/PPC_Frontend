"use client";
import React, { useState } from 'react';

export default function SignInForm() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center justify-start gap-0.5 text-lg text-color-palette-primary-160">
        <div className="relative leading-[150%] font-semibold">
          Iniciar sesion
        </div>
        { !showSecondDiv && (
        <div className="relative text-sm leading-[150%] text-black mb-4">
          Ingresa tu correo para iniciar sesion en la aplicacion
        </div>
        )}
        { showSecondDiv && (
        <div className="relative text-sm leading-[150%] text-black mb-4">
          Ingresa tu contraseña para iniciar sesion en la aplicacion
        </div>
        )}
      </div>
      { !showSecondDiv && (
      <div className="w-[327px] flex flex-col items-start justify-start gap-4 text-left">
        
          <input 
            className="self-stretch rounded-lg bg-color-palette-neutral-00 border-gainsboro-200 border-[1px] border-solid box-border h-10 flex flex-row items-center justify-start py-2 px-4 transition-all duration-500 ease-in-out transform translate-x-0"
            type="email"
            placeholder="email@domain.com"
          />
        
        <button 
          className="self-stretch rounded-lg bg-color-palette-primary-190 active:bg-color-palette-primary-180 h-10 flex flex-row items-center justify-center py-0 px-4 box-border text-color-palette-neutral-00 transition duration-150 ease-in-out"
          onClick={() => setShowSecondDiv(!showSecondDiv)}
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
          />
        
        
          
        
        
        <div className="flex justify-between w-full">
        <button 
            className="flex-grow self-stretch rounded-lg bg-color-palette-primary-190 active:bg-color-palette-primary-180 h-10 flex flex-row items-center justify-center py-0 px-4 box-border text-color-palette-neutral-00 transition duration-150 ease-in-out"
            onClick={() => setShowSecondDiv(!showSecondDiv)}
          >
            Volver
          </button>
          <button 
            className="flex-grow self-stretch rounded-lg bg-color-palette-primary-190 active:bg-color-palette-primary-180 h-10 flex flex-row items-center justify-center py-0 px-4 box-border text-color-palette-neutral-00 transition duration-150 ease-in-out"
            //onClick={() => setShowSecondDiv(showSecondDiv)}
          >
            Entrar
          </button>
          
        </div>
      </div>
      )}
    </div>
  );
}