import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";

const SignIn: NextPage = () => {
  return (
    <div className="w-full relative bg-color-palette-neutral-00 overflow-hidden flex flex-col items-start justify-start pt-[150px] pb-[196px] pl-[25px] pr-[23px] box-border gap-3 leading-[normal] tracking-[normal] text-center text-[32px] text-darkslategray font-judson">
      <div className="self-stretch flex flex-row items-start justify-center">
        <div className="h-[103px] w-[103px] relative">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start w-full h-full">
            <img
              className="h-[103px] w-[103px] relative"
              loading="lazy"
              alt=""
              src="/wrapper.svg"
            />
          </div>
          <h1 className="m-0 absolute top-[6px] left-[8px] text-inherit leading-[44px] flex italic font-normal font-[inherit] items-center justify-center w-[87px] h-11 z-[1]">
            PPC
          </h1>
        </div>
      </div>
      <FrameComponent />
      <div className="self-stretch relative text-[12px] leading-[150%] font-inter text-gray">
        <span>{`Al dar clic en continuar, estas de acuerdo con nuestros `}</span>
        <span className="text-darkolivegreen">Terminos de servicio</span>
        <span>{` y `}</span>
        <span className="text-darkolivegreen">Politicas de privacidad</span>
      </div>
    </div>
  );
};

export default SignIn;
