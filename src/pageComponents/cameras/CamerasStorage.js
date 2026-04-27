export default function CamerasStorage() {
  return (
    <section className="w-full bg-light">
      <div className="container py-12 md:py-20 md:h-[500px]">
        <div className="mx-auto flex flex-col md:flex-row max-w-[1120px] gap-12 items-start">
          <div className="text-center md:text-start flex flex-col md:gap-y-16 justify-between">
            <h3 className="text-base font-semibold leading-[1.08] text-primary md:max-w-[520px] md:text-[31px]">
              <span className="relative inline-block px-5 py-1 md:px-6">
                <span className="absolute -left-1 -top-1 h-4 w-4 border-l-4 border-t-4 border-lightgreen md:-left-2 md:-top-2 md:h-6 md:w-6" />
                <span className="absolute -bottom-1 -right-1 h-4 w-4 border-b-4 border-r-4 border-lightgreen md:-bottom-2 md:-right-2 md:h-6 md:w-6" />
                Amplie seu armazenamento
                <br />
                para 30 dias
              </span>
            </h3>

            <p className="mx-auto mt-8 max-w-[600px] text-xs leading-relaxed text-primary md:mx-0 md:text-2xl md:leading-[1.55]">
              A gravacao em nuvem guarda seus dados com mais seguranca, sem
              ocupar espaco no seu dispositivo ou depender de um local fisico.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-primary mx-auto md:items-start">
            <div className="flex items-center gap-5 md:gap-7">
              <div className="">
                <p className="text-xl leading-none md:text-[2rem]">de</p>
                <p className="mt-1 text-4xl font-semibold leading-none md:text-66xlxl">
                  7&nbsp;dias
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-lightgreen md:h-12 md:w-12">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 text-lightgreen md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </div>

              <div className="">
                <p className="text-xl leading-none md:text-[2rem]">para</p>
                <p className="mt-1 text-4xl font-semibold leading-none md:text-6xl">
                  30&nbsp;dias
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-end justify-center md:mt-10">
              <div className="mb-2 mr-3 flex flex-col leading-none">
                <span className="text-2xl md:text-[2.25rem]">por</span>
                <span className="mt-1 text-[2.2rem] md:text-[3.05rem]">R$</span>
              </div>

              <span className="text-[6.4rem] font-medium leading-[0.82] md:text-[10rem]">
                20
              </span>

              <div className="mb-2 ml-2 flex flex-col leading-none">
                <span className="text-[2.4rem] md:text-[3.6rem]">,90</span>
                <span className="mt-1 text-[1.7rem] md:text-[3rem]">/mes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
