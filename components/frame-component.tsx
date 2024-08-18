import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-6 text-center text-lg text-color-palette-primary-160 font-inter ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="relative leading-[150%] font-semibold">
            Crear una cuenta
          </div>
        </div>
        <div className="relative text-sm leading-[150%] text-black">
          Ingresa tu correo para registrarte en la aplicacion
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-10 font-inter text-sm text-gray"
          placeholder="email@domain.com"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#e0e0e0" },
            "& .MuiInputBase-root": {
              height: "40px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#828282" },
          }}
        />
        <Button
          className="self-stretch h-10"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#132e18",
            borderRadius: "8px",
            "&:hover": { background: "#132e18" },
            height: 40,
          }}
        >
          Registrarme con correo
        </Button>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[7.5px] text-sm text-gray">
        <div className="flex-1 flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border min-w-[68px]">
          <div className="self-stretch h-px relative bg-gainsboro" />
        </div>
        <div className="relative leading-[140%] inline-block min-w-[104px]">
          o continuar con
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border min-w-[68px]">
          <div className="self-stretch h-px relative bg-gainsboro" />
        </div>
      </div>
      <Button
        className="self-stretch h-10"
        startIcon={<img width="20px" height="20px" src="/google.svg" />}
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#000",
          fontSize: "14",
          background: "#eee",
          borderRadius: "8px",
          "&:hover": { background: "#eee" },
          height: 40,
        }}
      >
        Google
      </Button>
    </section>
  );
};

export default FrameComponent;
