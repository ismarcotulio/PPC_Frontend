export default function SignIn() {
  return (
    <div className="w-full relative bg-color-palette-neutral-00 h-[799px] overflow-hidden text-center text-sm text-gray font-inter">
      <div className="absolute top-[calc(50%_-_134.5px)] left-[calc(50%_-_186.5px)] flex flex-col items-center justify-start py-0 px-6 gap-6">
        <div className="flex flex-col items-center justify-start gap-0.5 text-lg text-color-palette-primary-160">
          <div className="relative leading-[150%] font-semibold">
            Crear una cuenta
          </div>
          <div className="relative text-sm leading-[150%] text-black">
            Ingresa tu correo para registrarte en la aplicacion
          </div>
        </div>
        <div className="w-[327px] flex flex-col items-start justify-start gap-4 text-left">
          <div className="self-stretch rounded-lg bg-color-palette-neutral-00 border-gainsboro-200 border-[1px] border-solid box-border h-10 flex flex-row items-center justify-start py-2 px-4">
            <div className="flex-1 relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
              email@domain.com
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-color-palette-primary-190 h-10 flex flex-row items-center justify-center py-0 px-4 box-border text-color-palette-neutral-00">
            <div className="relative leading-[140%] font-medium">
              Registrarme con correo
            </div>
          </div>
        </div>
        <div className="w-[327px] flex flex-row items-center justify-center gap-2">
          <div className="flex-1 relative bg-gainsboro-100 h-px" />
          <div className="relative leading-[140%]">o continuar con</div>
          <div className="flex-1 relative bg-gainsboro-100 h-px" />
        </div>
        <div className="w-[327px] relative rounded-lg bg-whitesmoke h-10 text-left text-black">
          <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_37.5px)] flex flex-row items-center justify-start gap-2">
            <img
              className="w-5 relative h-5 overflow-hidden shrink-0"
              alt=""
              src="/google.svg"
            />
            <div className="relative leading-[140%] font-medium">Google</div>
          </div>
        </div>
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
