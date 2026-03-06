import Image from "next/image";
import camerafixa from "@/assets/cameras/camerafixa.png";
import camera360 from "@/assets/cameras/camera360.png";
import icon1080 from "@/assets/cameras/1080p.png";
import iconAngulo from "@/assets/cameras/angulo.png";
import iconChamadas from "@/assets/cameras/chamadas.png";
import iconDeteccao from "@/assets/cameras/deteccao.png";
import iconVisao from "@/assets/cameras/visaonoturna.png";
import iconDeteccaoHumana from "@/assets/cameras/deteccaohumana.png";
import iconPanoramica from "@/assets/cameras/panoramica.png";

const CAMERAS = [
  {
    key: "fixa",
    description: (
      <>
        <span className="font-bold">
          Imagem em alta definicao e recursos inteligentes
        </span>{" "}
        para voce ver, ouvir e falar em tempo real. Compacta, leve e facil de
        mover sempre que precisar.
      </>
    ),
    image: camerafixa,
    features: [
      { icon: icon1080, title: "Resolucao 1080p" },
      { icon: iconAngulo, title: "Lentes grande-angulares de 108 deg" },
      { icon: iconDeteccao, title: "Deteccao de movimento" },
      { icon: iconChamadas, title: "Chamada bidirecional" },
      { icon: iconVisao, title: "Visao Noturna infravermelho de ate 10 metros" },
    ],
  },
  {
    key: "360",
    description: (
      <>
        Esse e o modelo <span className="font-bold">360 graus</span>, voce tem{" "}
        <span className="font-bold">
          visao panoramica e rastreamento inteligente
        </span>{" "}
        que segue movimentos e sons por todo o ambiente.
      </>
    ),
    image: camera360,
    features: [
      { icon: icon1080, title: "Resolucao 1080p" },
      { icon: iconPanoramica, title: "Rotacao 55 deg vertical" },
      { icon: iconDeteccaoHumana, title: "Deteccao inteligente de forma humana" },
      { icon: iconChamadas, title: "Chamada bidirecional" },
      { icon: iconVisao, title: "Visao Noturna infravermelho de ate 10 metros" },
    ],
  },
];

function FeatureItem({ icon, title }) {
  return (
    <div className="flex flex-col items-center text-center gap-y-2">
      <Image src={icon} alt={title} />
      <div className="text-primary">
        <p className={`font-semibold max-w-36 md:max-w-50 text-[10px] md:text-base`}>{title}</p>
      </div>
    </div>
  );
}

export default function CamerasModels() {
  return (
    <section className="w-full">
      <div className="container md:py-16">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-primary md:text-[45px]">
            Sua casa sempre{" "}
            <span className="relative ml-3">
              <span className="absolute -left-2 -top-2 h-5 w-5 md:border-l-6 border-l-3 border-t-3 md:border-t-6 border-lightgreen" />
              <span className="absolute -bottom-2 -right-4 h-5 w-5 md:border-b-6 border-b-3 border-r-3 md:border-r-6 border-lightgreen" />
              automonitorada
            </span>
          </h2>
        </div>

        <div className="hidden md:block">
          {CAMERAS.map((camera) => {
            return (
              <div key={camera.key} className="flex items-center gap-10 py-16">
                <div className="w-1/2">
                  <Image
                    src={camera.image}
                    alt="Camera"
                    className="max-w-24 md:max-w-[355px]"
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-xs text-primary md:text-2xl">
                    {camera.description}
                  </p>
                  <div className="flex gap-12 py-12 items-center justify-center flex-wrap">
                    {camera.features.map((feature) => (
                      <FeatureItem
                        key={`${camera.key}-${feature.title}`}
                        icon={feature.icon}
                        title={feature.title}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
          <div className="md:hidden">
              {CAMERAS.map((camera) => {
                  return (
                      <div key={camera.key} className="flex flex-col items-center gap-10 py-8">
                          <div className="w-full flex justify-between items-center">
                              <div className="w-1/2">
                                  <Image
                                      src={camera.image}
                                      alt="Camera"
                                      className="max-w-36 md:max-w-[355px]"
                                  />
                              </div>
                              <div className="w-1/2">
                                  <p className="text-xs text-primary md:text-2xl">
                                      {camera.description}
                                  </p>
                              </div>
                          </div>
                          <div className="w-full">
                              <div className="flex gap-12 py-12 items-center justify-center flex-wrap">
                                  {camera.features.map((feature) => (
                                      <FeatureItem
                                          key={`${camera.key}-${feature.title}`}
                                          icon={feature.icon}
                                          title={feature.title}
                                      />
                                  ))}
                              </div>
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>
    </section>
  );
}
