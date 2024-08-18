import type { NextPage } from "next";

const Organizaciones: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start gap-4 leading-[normal] tracking-[normal] text-left text-base text-color-palette-neutral-50 font-semibold-body-button">
      <div className="self-stretch bg-color-palette-neutral-00 flex flex-col items-start justify-start max-w-full">
        <header className="self-stretch h-11 flex flex-col items-start justify-start text-center text-mini text-black font-semibold-body-button">
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
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-3 pb-1 box-border max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start py-[3px] px-0 box-border max-w-full">
            <div className="flex-1 overflow-x-auto flex flex-col items-center justify-center pt-2 px-[60px] pb-0.5 box-border max-w-full">
              <div className="flex flex-row items-start justify-start gap-4">
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <div className="rounded flex flex-row items-center justify-center">
                    <a className="[text-decoration:none] relative tracking-[0.02em] leading-[26px] font-semibold text-[inherit] inline-block min-w-[83px]">
                      Novedades
                    </a>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-1 w-1 relative rounded-[50%] bg-color-palette-primary-100" />
                  </div>
                </div>
                <div className="h-[26px] w-[27px] rounded hidden flex-row items-center justify-center">
                  <div className="self-stretch w-[76px] relative tracking-[0.02em] leading-[26px] font-semibold hidden">
                    Collection
                  </div>
                </div>
                <div className="rounded flex flex-row items-center justify-center text-color-palette-neutral-90">
                  <a className="[text-decoration:none] relative tracking-[0.02em] leading-[26px] font-semibold text-[inherit] inline-block min-w-[116px]">
                    Organizaciones
                  </a>
                </div>
                <div className="h-[26px] w-0 rounded flex flex-row items-center justify-center">
                  <div className="self-stretch w-0 relative tracking-[0.02em] leading-[26px] font-semibold inline-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="self-stretch bg-color-palette-neutral-00 flex flex-col items-start justify-start gap-6 max-w-full">
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border relative max-w-full">
              <select className="w-[263px] h-36 !m-[0] absolute bottom-[0px] left-[calc(50%_-_131.5px)] rounded-2xl bg-color-palette-primary-20 [border:none] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                <option value="option_1">Option 1</option>
              </select>
              <div className="w-[295px] !m-[0] absolute bottom-[8px] left-[calc(50%_-_147.5px)] shadow-[0px_10px_20px_rgba(14,_14,_16,_0.08)] rounded-2xl bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start z-[1]">
                <div className="flex-1 flex flex-row items-start justify-start">
                  <div className="h-[162px] flex-1 relative">
                    <img
                      className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_11.5px)] w-6 h-6 overflow-hidden"
                      alt=""
                      src="/iconimagedefault-1.svg"
                    />
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                      alt=""
                      src="/placeholder-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_10px_20px_rgba(14,_14,_16,_0.08)] rounded-2xl bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start max-w-full z-[2]">
                <div className="flex-1 flex flex-row items-start justify-start max-w-full">
                  <div className="h-[180px] flex-1 relative max-w-full">
                    <img
                      className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_11.5px)] w-6 h-6 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/iconimagedefault-2.svg"
                    />
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                      alt=""
                      src="/placeholder-2@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full text-left text-lg text-color-palette-neutral-90 font-semibold-body-button">
          <div className="self-stretch flex flex-col items-start justify-center py-2.5 px-6">
            <div className="self-stretch flex flex-col items-center justify-center">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-4">
                <div className="flex-1 relative leading-[28px] font-semibold inline-block min-w-[99px]">
                  {" "}
                  Organizaciones
                </div>
                <div className="rounded-xl flex flex-row items-center justify-center p-0.5">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/iconarrowrightdefault.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border max-w-full text-base">
            <div className="w-[1139px] shrink-0 flex flex-row items-start justify-start max-w-[321%]">
              <div className="w-[375px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border max-w-full">
                <div className="w-[223px] shrink-0 flex flex-row items-start justify-start p-1 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-col items-start justify-start relative">
                            <div className="self-stretch bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                              <div className="flex-1 flex flex-row items-start justify-start">
                                <div className="h-32 flex-1 relative">
                                  <img
                                    className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12.5px)] w-6 h-6 overflow-hidden"
                                    loading="lazy"
                                    alt=""
                                    src="/iconimagedefault-3.svg"
                                  />
                                  <img
                                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                    alt=""
                                    src="/placeholder-3@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start h-full">
                              <img
                                className="h-32 flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
                                alt=""
                                src="/scrim@2x.png"
                              />
                              <div className="!m-[0] absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start z-[2]">
                                <img
                                  className="h-10 w-10 relative"
                                  loading="lazy"
                                  alt=""
                                  src="/wrapper.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px]">
                              Rotarac Sur
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-color-palette-neutral-60">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="flex-1 relative tracking-[0.04em] leading-[24px]">
                                Organizacion internacional
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
                <div className="w-[223px] shrink-0 flex flex-row items-start justify-start p-1 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-row items-start justify-start relative">
                            <div className="flex-1 bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                              <div className="flex-1 flex flex-row items-start justify-start">
                                <div className="h-32 flex-1 relative">
                                  <img
                                    className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12.5px)] w-6 h-6 overflow-hidden"
                                    loading="lazy"
                                    alt=""
                                    src="/iconimagedefault-4.svg"
                                  />
                                  <img
                                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                    alt=""
                                    src="/placeholder-4@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-full w-full absolute !m-[0] top-[128px] right-[-215px] bottom-[-128px] left-[215px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.15),_rgba(255,_255,_255,_0))] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                            <div className="!m-[0] absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start z-[2]">
                              <img
                                className="h-10 w-10 relative"
                                loading="lazy"
                                alt=""
                                src="/wrapper-1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px]">
                              USAID
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-color-palette-neutral-60">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="flex-1 relative tracking-[0.04em] leading-[24px]">
                                Agencia de desarrollo
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
                <div className="w-[223px] shrink-0 flex flex-row items-start justify-start p-1 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-row items-start justify-start relative">
                            <div className="flex-1 bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                              <div className="flex-1 flex flex-row items-start justify-start">
                                <div className="h-32 flex-1 relative">
                                  <img
                                    className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12.5px)] w-6 h-6 overflow-hidden"
                                    loading="lazy"
                                    alt=""
                                    src="/iconimagedefault-5.svg"
                                  />
                                  <img
                                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                    alt=""
                                    src="/placeholder-5@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-full w-full absolute !m-[0] top-[128px] right-[-215px] bottom-[-128px] left-[215px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.15),_rgba(255,_255,_255,_0))] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                            <div className="!m-[0] absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start z-[2]">
                              <img
                                className="h-10 w-10 relative"
                                loading="lazy"
                                alt=""
                                src="/wrapper-2.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px]">
                              Bershka
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-color-palette-neutral-60">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="flex-1 relative tracking-[0.04em] leading-[24px]">
                                Juvenile, Affordable
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
                <div className="w-[223px] shrink-0 flex flex-row items-start justify-start p-1 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-row items-start justify-start relative">
                            <div className="flex-1 bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                              <div className="flex-1 flex flex-row items-start justify-start">
                                <div className="h-32 flex-1 relative">
                                  <img
                                    className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12.5px)] w-6 h-6 overflow-hidden"
                                    loading="lazy"
                                    alt=""
                                    src="/iconimagedefault-6.svg"
                                  />
                                  <img
                                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                    alt=""
                                    src="/placeholder-6@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-full w-full absolute !m-[0] top-[128px] right-[-215px] bottom-[-128px] left-[215px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.15),_rgba(255,_255,_255,_0))] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                            <div className="!m-[0] absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start z-[2]">
                              <img
                                className="h-10 w-10 relative"
                                loading="lazy"
                                alt=""
                                src="/wrapper-3.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px]">
                              Adidas
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-color-palette-neutral-60">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="flex-1 relative tracking-[0.04em] leading-[24px]">
                                Sport, Casual
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
                <div className="w-[223px] shrink-0 flex flex-row items-start justify-start p-1 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-row items-start justify-start relative">
                            <div className="flex-1 !m-[0] absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                              <div className="flex-1 flex flex-row items-start justify-start">
                                <div className="h-32 flex-1 relative">
                                  <img
                                    className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12.5px)] w-6 h-6 overflow-hidden"
                                    alt=""
                                    src="/iconimagedefault.svg"
                                  />
                                  <img
                                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                    alt=""
                                    src="/placeholder-7@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-32 w-[215px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.15),_rgba(255,_255,_255,_0))] [transform:_rotate(180deg)] z-[1]" />
                            <div className="!m-[0] absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start z-[2]">
                              <img
                                className="h-10 w-10 relative"
                                loading="lazy"
                                alt=""
                                src="/wrapper-4.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px]">
                              Zara
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-color-palette-neutral-60">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="flex-1 relative tracking-[0.04em] leading-[24px]">
                                Formal, Affordable
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
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full text-left text-lg text-color-palette-neutral-90 font-semibold-body-button">
          <div className="self-stretch flex flex-col items-start justify-center py-2.5 px-6">
            <div className="self-stretch flex flex-col items-center justify-center">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-4">
                <div className="flex-1 relative leading-[28px] font-semibold inline-block min-w-[75px]">
                  Actividades
                </div>
                <div className="rounded-xl flex flex-row items-center justify-center p-0.5">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/iconarrowrightdefault-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[232px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border max-w-full text-base">
            <div className="self-stretch w-[528px] shrink-0 flex flex-row items-start justify-start max-w-[149%]">
              <div className="self-stretch w-[375px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border max-w-full">
                <div className="w-[168px] shrink-0 flex flex-row items-start justify-start p-1 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3">
                      <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start">
                        <div className="flex-1 flex flex-col items-start justify-start relative">
                          <div className="self-stretch bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="h-40 flex-1 relative">
                                <img
                                  className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 overflow-hidden"
                                  loading="lazy"
                                  alt=""
                                  src="/iconimagedefault-8.svg"
                                />
                                <img
                                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                  alt=""
                                  src="/placeholder-8@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-full absolute !m-[0] top-[160px] right-[-160px] bottom-[-160px] left-[160px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.15),_rgba(255,_255,_255,_0))] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                          <div className="!m-[0] absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start z-[2]">
                            <img
                              className="h-10 w-10 relative"
                              loading="lazy"
                              alt=""
                              src="/wrapper-5.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px]">
                              PlantatonHN 2024
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-color-palette-neutral-60">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="flex-1 relative tracking-[0.04em] leading-[24px]">
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
                <div className="w-[168px] shrink-0 flex flex-row items-start justify-start p-1 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3">
                      <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start">
                        <div className="flex-1 flex flex-col items-start justify-start relative">
                          <div className="self-stretch bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="h-40 flex-1 relative">
                                <img
                                  className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 overflow-hidden"
                                  loading="lazy"
                                  alt=""
                                  src="/iconimagedefault-9.svg"
                                />
                                <img
                                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                  alt=""
                                  src="/placeholder-9@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-full absolute !m-[0] top-[160px] right-[-160px] bottom-[-160px] left-[160px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.15),_rgba(255,_255,_255,_0))] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                          <div className="!m-[0] absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start z-[2]">
                            <img
                              className="h-10 w-10 relative"
                              loading="lazy"
                              alt=""
                              src="/wrapper-6.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px]">
                              JUDUCA 2025
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-color-palette-neutral-60">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="flex-1 relative tracking-[0.04em] leading-[24px]">
                                UNAH
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
                <div className="self-stretch w-[168px] shrink-0 flex flex-row items-start justify-start p-1 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-3">
                      <div className="self-stretch flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start">
                        <div className="self-stretch flex-1 relative">
                          <div className="w-full absolute h-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="h-40 flex-1 relative">
                                <img
                                  className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 overflow-hidden"
                                  loading="lazy"
                                  alt=""
                                  src="/iconimagedefault-10.svg"
                                />
                                <img
                                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                  alt=""
                                  src="/placeholder-10@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-full w-full top-[100%] right-[-100%] bottom-[-100%] left-[100%] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.15),_rgba(255,_255,_255,_0))] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                          <div className="absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start z-[2]">
                            <img
                              className="h-10 w-10 relative"
                              loading="lazy"
                              alt=""
                              src="/wrapper-7.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px]">
                              Stan Smith, Forever
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-color-palette-neutral-60">
                            <div className="flex-1 flex flex-row items-start justify-start">
                              <div className="flex-1 relative tracking-[0.04em] leading-[24px]">
                                Adidas
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
                <div className="h-[274px] w-[168px] shrink-0 hidden flex-row items-start justify-start p-1 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3">
                      <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start">
                        <div className="h-40 flex-1 relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                            <div className="h-40 flex-1 relative">
                              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                                <img
                                  className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 overflow-hidden"
                                  alt=""
                                  src="/iconimagedefault-11.svg"
                                />
                                <img
                                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                                  alt=""
                                  src="/placeholder-11@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-full w-full top-[100%] right-[-100%] bottom-[-100%] left-[100%] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.15),_rgba(255,_255,_255,_0))] [transform:_rotate(180deg)] [transform-origin:0_0]" />
                          <div className="absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start">
                            <img
                              className="h-10 w-10 relative"
                              alt=""
                              src="/wrapper-8.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px]">
                              Collection
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-color-palette-neutral-50">
                            <div className="h-6 flex-1 flex flex-row items-start justify-start">
                              <div className="self-stretch flex-1 relative tracking-[0.04em] leading-[24px]">
                                Label
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
                <div className="h-[274px] w-[168px] shrink-0 hidden flex-row items-start justify-start p-1 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-3">
                      <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start">
                        <div className="h-40 flex-1 relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-color-palette-primary-20 overflow-hidden flex flex-row items-start justify-start">
                            <div className="h-40 flex-1 relative">
                              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                                <img
                                  className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 overflow-hidden"
                                  alt=""
                                  src="/iconimagedefault-12.svg"
                                />
                                <img
                                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                                  alt=""
                                  src="/placeholder-12@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-full w-full top-[100%] right-[-100%] bottom-[-100%] left-[100%] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.15),_rgba(255,_255,_255,_0))] [transform:_rotate(180deg)] [transform-origin:0_0]" />
                          <div className="absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start">
                            <img
                              className="h-10 w-10 relative"
                              alt=""
                              src="/wrapper-9.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex-1 relative tracking-[0.02em] leading-[26px]">
                              Collection
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-sm text-color-palette-neutral-50">
                            <div className="h-6 flex-1 flex flex-row items-start justify-start">
                              <div className="self-stretch flex-1 relative tracking-[0.04em] leading-[24px]">
                                Label
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
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start pt-[33px] px-0 pb-[13px] box-border max-w-full text-center text-xs text-color-palette-neutral-50 font-semibold-body-button">
          <div className="flex-1 bg-color-palette-neutral-00 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border gap-1 max-w-full z-[1]">
            <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px]">
              <div className="rounded-xl flex flex-row items-center justify-center pt-1.5 px-[46px] pb-1">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[33px] flex flex-row items-start justify-start py-0 px-1 box-border">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/wrapper-10.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.06em] leading-[22px] inline-block min-w-[33px]">
                    Inicio
                  </div>
                </div>
              </div>
              <div className="rounded-xl flex flex-row items-center justify-center pt-1.5 px-[34px] pb-1 text-color-palette-primary-190">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-start justify-start py-0 px-4">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/wrapper-11.svg"
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
                      src="/wrapper-12.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.06em] leading-[22px] inline-block min-w-[31px]">
                    Perfil
                  </div>
                </div>
              </div>
            </div>
            <footer className="self-stretch flex flex-row items-start justify-center pt-[21px] pb-2 pl-[21px] pr-5">
              <div className="h-[5px] w-[134px] relative rounded-[100px] bg-black" />
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Organizaciones;