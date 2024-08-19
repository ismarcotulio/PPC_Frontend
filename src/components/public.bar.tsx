import Link from 'next/link';

export default function PublicBar() {
    return (
        <section className="fixed bottom-0 self-stretch h-[98px] flex flex-col items-end justify-start pt-0 px-0 pb-0 box-border gap-[104px] max-w-full text-left text-sm text-color-palette-neutral-90 font-semibold-footnote">
          <div className="self-stretch bg-color-palette-neutral-00 flex flex-row items-start justify-start pt-1 px-0 pb-[38px] box-border gap-1 shrink-0 max-w-full z-[1]">
            <footer className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] text-center text-xs text-color-palette-neutral-50 font-semibold-footnote">
            <button 
                className="rounded-xl flex flex-row items-center justify-center pt-1.5 px-[46px] pb-1 text-color-palette-primary-160 active:bg-color-palette-primary-160"
            >
                <Link href="/">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[33px] flex flex-row items-start justify-start py-0 px-1 box-border">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt="Home"
                            src="/home-icon.svg" // replace with your home icon path
                        />
                        </div>
                        <div className="relative tracking-[0.06em] leading-[22px] inline-block min-w-[33px]">
                        Inicio
                        </div>
                    </div>
                </Link>
                
                </button>
                <button className="rounded-xl flex flex-row items-center justify-center pt-1.5 px-[46px] pb-1 text-color-palette-primary-160 active:bg-color-palette-primary-180">
                    <Link href="/signup">
                        
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-[33px] flex flex-row items-start justify-start py-0 px-1 box-border">
                            <img
                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt="Home"
                                src="/perfil-icon.svg" // replace with your home icon path
                            />
                            </div>
                            <div className="relative tracking-[0.06em] leading-[22px] inline-block min-w-[33px]">
                            Registro
                            </div>
                        </div>
                        
                    </Link>
                </button>
                <button className="rounded-xl flex flex-row items-center justify-center pt-1.5 px-[46px] pb-1 text-color-palette-primary-160">
                    <Link href="/signin">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[33px] flex flex-row items-start justify-start py-0 px-1 box-border">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt="Home"
                            src="/account_circle.svg" // replace with your home icon path
                        />
                        </div>
                        <div className="relative tracking-[0.06em] leading-[22px] inline-block min-w-[33px]">
                        Entrar
                        </div>
                    </div>
                    </Link>
                </button>
            </footer>
            
          </div>
        </section>
    );
}