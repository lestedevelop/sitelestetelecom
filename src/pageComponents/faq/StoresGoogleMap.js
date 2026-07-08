import { MapPin } from "lucide-react";

const STORES_MAP_SRC =
  "https://www.google.com/maps/d/u/0/embed?mid=1cp6z52nFdosT4Q8YhsOOV4feHmdHZHc&ehbc=2E312F";

export default function StoresGoogleMap() {
  return (
    <section className="mt-10 overflow-hidden rounded-xl border border-graylighter bg-white shadow-sm">
      <div className="px-5 py-5 md:px-7">
        <h2 className="text-2xl font-bold text-dark md:text-3xl">
          Nossas lojas
        </h2>
        <p className="mt-2 flex items-start gap-2 break-words text-sm text-graylight md:text-base">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          Lojas, quiosques e escritórios
        </p>
      </div>

      <div className="px-5 pb-5 md:px-7">
        <div className="overflow-hidden rounded-lg border border-graylighter bg-light">
          <div className="relative aspect-[4/3] w-full md:aspect-[16/7]">
            <iframe
              title="Mapa das lojas da Leste"
              src={STORES_MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
