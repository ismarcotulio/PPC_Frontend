import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const ActividadCrearEventoConL: NextPage = () => {
  return (
    <div className="w-full relative bg-color-palette-neutral-00 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[63px] leading-[normal] tracking-[normal]">
      <main className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full">
        <section className="self-stretch bg-color-palette-neutral-00 flex flex-col items-start justify-start text-left text-lg text-color-palette-neutral-90 font-regular-body">
          <header className="self-stretch h-11 flex flex-col items-start justify-start text-center text-mini text-black font-regular-body">
            <div className="self-stretch h-11 relative hidden">
              <div className="absolute w-full top-[0px] right-[0%] left-[0%] bg-color-palette-neutral-00 h-full hidden" />
              <div className="absolute top-[calc(50%_-_8px)] left-[21px] tracking-[-0.3px] font-semibold inline-block w-[54px]">
                9:41
              </div>
              <div className="absolute top-[calc(50%_-_4.7px)] right-[14.4px] w-[24.3px] h-[11.3px]">
                <div className="absolute top-[calc(50%_-_5.65px)] right-[2.3px] rounded-[2.67px] border-black border-[1px] border-solid box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal" />
                <img
                  className="absolute top-[calc(50%_-_1.95px)] right-[0px] w-[1.3px] h-1 mix-blend-normal"
                  alt=""
                  src="/cap.svg"
                />
                <div className="absolute top-[calc(50%_-_3.65px)] right-[4.3px] rounded-[1.33px] bg-black w-[18px] h-[7.3px]" />
              </div>
              <img
                className="relative w-[15.3px] h-[11px]"
                alt=""
                src="/wifi.svg"
              />
              <img
                className="relative w-[17px] h-[10.7px]"
                alt=""
                src="/cellular-connection.svg"
              />
            </div>
          </header>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-3 pb-1">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-2">
              <div className="flex-1 flex flex-row items-center justify-center gap-3 min-w-[161px]">
                <div className="rounded-xl flex flex-row items-center justify-center p-3">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/wrapper.svg"
                    />
                  </div>
                </div>
                <div className="h-12 flex-1 overflow-hidden flex flex-col items-start justify-center py-2.5 px-5 box-border opacity-[0]">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                    <a className="[text-decoration:none] self-stretch w-[77px] relative leading-[28px] font-semibold text-[inherit] inline-block">
                      Page title
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-xl hidden flex-row items-center justify-center p-3">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/wrapper-1.svg"
                    />
                  </div>
                </div>
                <div className="rounded-xl flex flex-row items-center justify-center p-3">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/wrapper-2.svg"
                    />
                  </div>
                </div>
                <div className="rounded-xl flex flex-row items-center justify-center p-3">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/wrapper-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-6 pb-[42px] box-border max-w-full text-left text-sm text-color-palette-neutral-50 font-regular-body">
          <div className="flex-1 flex flex-col items-start justify-start gap-[45px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-[9px]">
                <div className="h-[245px] flex-1 relative">
                  <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start pt-1 px-1 pb-[19px] box-border h-full">
                    <div className="flex-1 flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-3">
                        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl border-black border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start">
                          <div className="h-40 flex-1 relative opacity-[0.48]">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [filter:blur(4px)] bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                              <div className="flex-1 flex flex-row items-start justify-start">
                                <div className="h-40 flex-1 relative">
                                  <img
                                    className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12.5px)] w-6 h-6 overflow-hidden"
                                    alt=""
                                    src="/iconimagedefault.svg"
                                  />
                                  <img
                                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                    alt=""
                                    src="/placeholder@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="absolute h-full w-full top-[100%] right-[-100%] bottom-[-100%] left-[100%] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.5),_rgba(255,_255,_255,_0))] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                            <div className="absolute bottom-[8px] left-[8px] w-10 h-10 hidden flex-row items-start justify-start">
                              <img
                                className="h-10 w-10 relative hidden"
                                alt=""
                                src="/wrapper.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[50px] flex flex-col items-start justify-start">
                          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-0.5">
                            <div className="self-stretch flex flex-row items-start justify-start">
                              <div className="flex-1 relative tracking-[0.04em] leading-[24px]">
                                Selecciona una imagen
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-1 text-color-palette-neutral-60">
                              <div className="self-stretch w-40 hidden flex-row items-start justify-start">
                                <div className="self-stretch flex-1 relative tracking-[0.04em] leading-[24px]">
                                  Televicentro
                                </div>
                              </div>
                              <div className="h-[26px] hidden flex-row items-start justify-start py-0 pl-0 pr-0.5 box-border text-base text-color-palette-accent-red-100">
                                <div className="self-stretch relative tracking-[0.02em] leading-[26px] font-semibold whitespace-nowrap">
                                  $000
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[60px] left-[134px] rounded-xl bg-color-palette-neutral-00 flex flex-row items-start justify-start p-3 z-[1]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/wrapper-4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[46px] font-regular-body text-base text-color-palette-neutral-50"
                placeholder="Titulo"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": { height: "46px" },
                  "& .MuiInputBase-input": { color: "#868687" },
                }}
              />
            </div>
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-[46px] font-regular-body text-base text-color-palette-neutral-50"
              placeholder="Descripcion"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "46px" },
                "& .MuiInputBase-input": { color: "#868687" },
              }}
            />
          </div>
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full text-left text-base text-color-palette-neutral-90 font-regular-body">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border min-h-[295px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-lg">
              <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-[53px] box-border gap-1 max-w-full">
                <div className="w-[72px] flex flex-col items-start justify-start p-2 box-border">
                  <img
                    className="self-stretch h-2 relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/swipe-hint.svg"
                  />
                </div>
                <div className="self-stretch rounded-t-13xl rounded-b-none bg-color-palette-neutral-00 flex flex-col items-center justify-start pt-0 px-0 pb-4 box-border max-w-full">
                  <div className="self-stretch hidden flex-col items-center justify-start py-0 px-6">
                    <div className="self-stretch flex flex-col items-end justify-start py-4 px-0 gap-2.5">
                      <div className="flex flex-row items-start justify-start gap-1">
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-palette-neutral-100" />
                        </div>
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-palette-neutral-20" />
                        </div>
                      </div>
                      <div className="self-stretch h-7 relative leading-[28px] inline-block">
                        Drawer Title
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-4 px-0 box-border gap-3 max-w-full text-left text-base text-color-palette-neutral-50">
                    <div className="self-stretch flex flex-col items-start justify-center py-0 px-6 box-border max-w-full">
                      <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                        <div className="flex-1 relative tracking-[0.02em] leading-[26px] font-semibold inline-block max-w-full">
                          Configuraciones
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start gap-2 text-color-palette-neutral-90">
                      <div className="self-stretch h-[52px] flex flex-col items-start justify-center py-3 px-6 box-border">
                        <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                          <div className="self-stretch hidden flex-row flex-wrap items-center justify-center gap-4">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px] inline-block min-w-[184px]">
                              Privado
                            </div>
                            <div className="rounded-xl flex flex-row items-center justify-center p-0.5">
                              <div className="flex flex-row items-start justify-start p-0.5">
                                <div className="h-5 w-5 relative">
                                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl border-color-palette-neutral-80 border-[2px] border-solid box-border" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-0 flex flex-col items-start justify-start py-0 px-6 box-border">
                        <div className="self-stretch h-0 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                          <div className="self-stretch h-px relative border-color-palette-neutral-10 border-t-[1px] border-solid box-border" />
                        </div>
                      </div>
                      <div className="self-stretch h-[52px] flex flex-col items-start justify-center py-3 px-6 box-border">
                        <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                          <div className="self-stretch hidden flex-row flex-wrap items-center justify-center gap-4">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px] inline-block min-w-[184px]">
                              Limite de participantes
                            </div>
                            <div className="rounded-xl flex flex-row items-center justify-center p-0.5">
                              <div className="flex flex-row items-start justify-start p-0.5">
                                <div className="h-5 w-5 relative">
                                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl border-color-palette-neutral-80 border-[2px] border-solid box-border" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-0 flex flex-col items-start justify-start py-0 px-6 box-border">
                        <div className="self-stretch h-0 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                          <div className="self-stretch h-px relative border-color-palette-neutral-10 border-t-[1px] border-solid box-border" />
                        </div>
                      </div>
                      <div className="self-stretch hidden flex-col items-start justify-center py-3 px-6">
                        <div className="self-stretch flex flex-col items-center justify-center">
                          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-4">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px] inline-block min-w-[184px]">
                              Item
                            </div>
                            <div className="rounded-xl flex flex-row items-center justify-center p-0.5">
                              <div className="flex flex-row items-start justify-start p-0.5">
                                <div className="h-5 w-5 relative">
                                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl border-color-palette-neutral-80 border-[2px] border-solid box-border" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[225px] box-border relative max-w-full mt-[-213px]">
              <div className="flex-1 flex flex-col items-start justify-start py-1 px-2 box-border max-w-full z-[1]">
                <div className="self-stretch rounded-xl flex flex-col items-center justify-center py-[11px] px-4 box-border max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2 max-w-full">
                    <div className="flex-1 relative tracking-[0.02em] leading-[26px] inline-block max-w-full">
                      Privado
                    </div>
                    <div className="hidden flex-row items-start justify-start p-0.5">
                      <div className="h-5 w-5 relative rounded-3xs border-color-palette-neutral-50 border-[2px] border-solid box-border" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-8 w-12 !m-[0] absolute top-[calc(50%_-_128.5px)] right-[8px] flex flex-row items-start justify-start p-0.5 box-border z-[2]">
                <div className="h-7 w-11 !m-[0] absolute top-[calc(50%_-_14px)] left-[calc(50%_-_22px)] flex flex-row items-start justify-start">
                  <div className="h-6 w-full absolute !m-[0] top-[calc(50%_-_12px)] right-[0px] left-[0px] rounded-81xl bg-color-palette-neutral-50" />
                  <div className="h-full w-7 absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-color-palette-neutral-00 border-color-palette-neutral-50 border-[0px] border-solid box-border z-[1]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[225px] pl-px pr-0 box-border max-w-full mt-[-213px]">
              <div className="h-14 flex-1 relative max-w-full">
                <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start py-1 px-2 box-border max-w-full h-full z-[1]">
                  <div className="self-stretch rounded-xl flex flex-col items-center justify-center py-[11px] px-4 box-border max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center gap-2 max-w-full">
                      <div className="flex-1 relative tracking-[0.02em] leading-[26px] inline-block max-w-full">
                        Limite de participantes
                      </div>
                      <div className="hidden flex-row items-start justify-start p-0.5">
                        <div className="h-5 w-5 relative rounded-3xs border-color-palette-neutral-50 border-[2px] border-solid box-border" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-full h-full max-w-full">
                  <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start py-1 px-2 box-border max-w-full h-full z-[2]">
                    <div className="self-stretch rounded-xl flex flex-col items-center justify-center py-[11px] px-4 box-border max-w-full">
                      <div className="self-stretch flex flex-row items-center justify-center gap-2 max-w-full">
                        <div className="flex-1 relative tracking-[0.02em] leading-[26px] inline-block max-w-full">
                          Limite de participantes
                        </div>
                        <div className="hidden flex-row items-start justify-start p-0.5">
                          <div className="h-5 w-5 relative rounded-3xs border-color-palette-neutral-50 border-[2px] border-solid box-border" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start max-w-full h-full">
                    <div className="flex-1 flex flex-col items-start justify-start py-1 px-2 box-border max-w-full z-[3]">
                      <div className="self-stretch rounded-xl flex flex-col items-center justify-center py-[11px] px-4 box-border max-w-full">
                        <div className="self-stretch flex flex-row items-center justify-center gap-2 max-w-full">
                          <div className="flex-1 relative tracking-[0.02em] leading-[26px] inline-block max-w-full">
                            Limite de participantes
                          </div>
                          <div className="hidden flex-row items-start justify-start p-0.5">
                            <div className="h-5 w-5 relative rounded-3xs border-color-palette-neutral-50 border-[2px] border-solid box-border" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-8 w-12 !m-[0] absolute top-[calc(50%_-_16px)] right-[9px] flex flex-row items-start justify-start p-0.5 box-border z-[4]">
                      <div className="h-7 w-11 !m-[0] absolute top-[calc(50%_-_14px)] left-[calc(50%_-_22px)] flex flex-row items-start justify-start">
                        <div className="h-6 w-full absolute !m-[0] top-[calc(50%_-_12px)] right-[0px] left-[0px] rounded-81xl bg-color-palette-primary-100" />
                        <div className="h-full w-7 absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-[50%] bg-color-palette-neutral-00 border-color-palette-primary-100 border-[0px] border-solid box-border z-[1]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full mt-[-213px]">
              <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start py-1 px-2 box-border max-w-full z-[1]">
                  <div className="self-stretch rounded-xl flex flex-col items-center justify-center py-[11px] px-4 box-border max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center gap-2 max-w-full">
                      <div className="flex-1 relative tracking-[0.02em] leading-[26px] inline-block max-w-full">
                        Solicitud
                      </div>
                      <div className="hidden flex-row items-start justify-start p-0.5">
                        <div className="h-5 w-5 relative rounded-3xs border-color-palette-neutral-50 border-[2px] border-solid box-border" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-8 w-12 !m-[0] absolute top-[calc(50%_-_16px)] right-[9px] flex flex-row items-start justify-start p-0.5 box-border z-[2]">
                  <div className="h-7 w-11 !m-[0] absolute top-[calc(50%_-_14px)] left-[calc(50%_-_22px)] flex flex-row items-start justify-start">
                    <div className="h-6 w-full absolute !m-[0] top-[calc(50%_-_12px)] right-[0px] left-[0px] rounded-81xl bg-color-palette-neutral-50" />
                    <div className="h-full w-7 absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-color-palette-neutral-00 border-color-palette-neutral-50 border-[0px] border-solid box-border z-[1]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[21px] pr-[27px] box-border max-w-full text-color-palette-neutral-50">
            <div className="h-[46px] flex-1 overflow-hidden flex flex-col items-start justify-start py-3 px-0 box-border gap-3 max-w-full">
              <div className="relative leading-[22px] inline-block min-w-[45px]">
                Limite
              </div>
              <div className="self-stretch h-px relative border-color-palette-neutral-20 border-t-[1px] border-solid box-border shrink-0" />
            </div>
          </div>
        </section>
      </main>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
        <div className="flex-1 bg-color-palette-neutral-00 flex flex-row items-start justify-start pt-1 px-0 pb-[38px] box-border gap-1 max-w-full">
          <footer className="flex-1 overflow-x-auto flex flex-row items-start justify-start py-0 pl-0 pr-px box-border max-w-full text-center text-xs text-color-palette-neutral-50 font-regular-body">
            <div className="rounded-xl flex flex-row items-center justify-center pt-1.5 px-[46px] pb-1">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[33px] flex flex-row items-start justify-start py-0 px-1 box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/wrapper-5.svg"
                  />
                </div>
                <div className="relative tracking-[0.06em] leading-[22px] inline-block min-w-[33px]">
                  Inicio
                </div>
              </div>
            </div>
            <div className="rounded-xl flex flex-row items-center justify-center pt-1.5 px-[34px] pb-1 text-color-palette-primary-180">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-start justify-start py-0 px-4">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/wrapper-6.svg"
                  />
                </div>
                <div className="relative tracking-[0.06em] leading-[22px] inline-block min-w-[57px]">
                  Descubrir
                </div>
              </div>
            </div>
            <div className="rounded-xl flex flex-row items-center justify-center pt-1.5 px-[47px] pb-1">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[31px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/wrapper-7.svg"
                  />
                </div>
                <div className="relative tracking-[0.06em] leading-[22px] inline-block min-w-[31px]">
                  Perfil
                </div>
              </div>
            </div>
          </footer>
          <div className="h-[34px] w-[375px] relative hidden max-w-full">
            <div className="absolute bottom-[8px] left-[calc(50%_-_66.5px)] rounded-81xl bg-black w-[134px] h-[5px] hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActividadCrearEventoConL;