"use client";
import React from 'react';
import SignUpForm from '../../components/signup.form';

export default function SignUp() {
  return (
    <div className="w-full relative bg-color-palette-neutral-00 h-[799px] overflow-hidden text-center text-sm text-gray font-inter">
      <div className="absolute top-[calc(50%_-_134.5px)] left-[calc(50%_-_186.5px)] flex flex-col items-center justify-start py-0 px-6 gap-6">
        <SignUpForm />
          
        <div className="w-[327px] flex flex-row items-center justify-center gap-2">
          <div className="flex-1 relative bg-gainsboro-100 h-px" />
          <div className="relative leading-[140%]">o continuar con</div>
          <div className="flex-1 relative bg-gainsboro-100 h-px" />
        </div>
        <button 
            className="w-[327px] relative rounded-lg bg-whitesmoke active:bg-color-palette-neutral-20 h-10 text-left text-black transition duration-150 ease-in-out"
            onClick={async () => {
              try {
                const response = await fetch('http://localhost:8000/login/google', {
                  method: 'GET', // or 'POST'
                  headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer YOUR_TOKEN' // if needed
                  },
                  // body: JSON.stringify(data), // if needed
                });
                const data = await response.json();
                console.log(data);
              } catch (error) {
                console.error('Error:', error);
              }
            }}
          >
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_37.5px)] flex flex-row items-center justify-start gap-2">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/google.svg"
              />
              <div className="relative leading-[140%] font-medium">Google</div>
            </div>
          </button>
        <div className="self-stretch relative text-[12px] leading-[150%]">
          <span>{`Al dar clic en continuar, estas de acuerdo con nuestros `}</span>
          <span className="text-darkolivegreen">Terminos de servicio</span>
          <span>{` y `}</span>
          <span className="text-darkolivegreen">Politicas de privacidad</span>
        </div>
      </div>
      <div className="absolute top-[150px] left-[137px] flex flex-row items-start justify-start">
        <img
          className="w-[103px] relative h-[103px]"
          alt=""
          src="/wrapper.svg"
        />
      </div>
      <i className="absolute top-[156px] left-[145px] text-[32px] leading-[44px] flex font-judson text-color-palette-primary-190 items-center justify-center w-[87px] h-[89px]">
        PPC
      </i>
    </div>
  );
};
