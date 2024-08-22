'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

export default function SuccessDialog({ open, title, message, buttonText, buttonAction }: { open: boolean, title: string, message: string, buttonText: string, buttonAction: string }) {

    

    return (
        <div>
            {
                open && <div className="mt-5 sm:mt-6">
                    <div className="relative leading-[150%] font-semibold">
          Cuenta creada exitosamente!
        </div>
                <Link href={buttonAction}>
                <button 
            className="w-[327px] relative rounded-lg bg-whitesmoke active:bg-color-palette-neutral-20 h-10 text-left text-black transition duration-150 ease-in-out"
          >
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_37.5px)] flex flex-row items-center justify-start gap-2">
              
              <div className="relative leading-[140%] font-medium">Iniciar sesion</div>
            </div>
          </button>
                </Link>
                
                </div>
            }
            
        </div>
        
        
    )
}