import canalTvGlobo from "@/assets/lesteplay/canal-tvglobo.webp";
import canalBand from "@/assets/lesteplay/canal-band.webp";
import canalRecord from "@/assets/lesteplay/canal-record.webp";
import canalSportv from "@/assets/lesteplay/canal-sportv.webp";
import canalEspn from "@/assets/lesteplay/canal-espn.svg";
import canalGeTv from "@/assets/lesteplay/canal-getv.webp";
import canalHboMax from "@/assets/lesteplay/canal-hbomax.webp";
import canalTelecine from "@/assets/lesteplay/canal-telecine.svg";
import canalUniversal from "@/assets/lesteplay/canal-universal.svg";
import canalPremiere from "@/assets/lesteplay/canal-premiere.webp";
import canalGloob from "@/assets/lesteplay/canal-gloob.webp";

export const LESTE_PLAY_SALES_URL = "https://bit.ly/48btqna";

const CHANNELS = {
  tvGlobo: {src: canalTvGlobo, alt: "TV Globo", tile: "bg-[#0c28af]", logo: "h-[3.519em] w-[4.956em]"},
  band: {src: canalBand, alt: "Band", tile: "bg-[#1c3251]", logo: "h-[2.826em] w-[3.368em]"},
  record: {src: canalRecord, alt: "Record TV", tile: "bg-white", logo: "h-[3.916em] w-[4.081em]"},
  sportv: {src: canalSportv, alt: "SporTV", tile: "bg-white", logo: "h-[1.388em] w-[4.974em]", crop: "left-[-11.22%] top-[-91.15%] h-[278.76%] w-[138.24%]"},
  espn: {src: canalEspn, alt: "ESPN", tile: "bg-[#fb1313]", logo: "h-[1.305em] w-[4.939em]"},
  geTv: {src: canalGeTv, alt: "ge tv", tile: "bg-white", logo: "h-[8.856em] w-[15.744em]"},
  hboMax: {src: canalHboMax, alt: "HBO Max", tile: "bg-black", logo: "h-[3.274em] w-[4.537em]"},
  telecine: {src: canalTelecine, alt: "Telecine", tile: "bg-white", logo: "h-[2.584em] w-[3.754em]"},
  universal: {src: canalUniversal, alt: "Universal+", tile: "bg-[#f7c533]", logo: "h-[2.772em] w-[4.913em]"},
  premiere: {src: canalPremiere, alt: "Premiere", tile: "bg-[#2e903c]", logo: "h-[0.81em] w-[5.105em]"},
  gloob: {src: canalGloob, alt: "Gloob", tile: "bg-white", logo: "h-[5.704em] w-[10.11em]"},
};

export const LESTE_PLAY_PLANS = [
  {
    id: "start",
    name: "START",
    description: [{text: "TV ao vivo", bold: true}, {text: " para acompanhar o seu dia."}],
    descriptionWidth: "w-[10.673em]",
    channels: [CHANNELS.tvGlobo, CHANNELS.band, CHANNELS.record],
    channelCount: "+ de 20",
    price: {integer: "24", cents: ",90"},
  },
  {
    id: "sports",
    name: "SPORTS",
    description: [{text: "Esporte ao vivo", bold: true}, {text: " para você vibrar."}],
    descriptionWidth: "w-[10.673em]",
    channels: [CHANNELS.sportv, CHANNELS.espn, CHANNELS.geTv],
    channelCount: "+ de 60",
    price: {integer: "32", cents: ",90"},
  },
  {
    id: "cine-hbo",
    name: "CINE + HBO",
    description: [{text: "Filmes, séries e HBO Max.", bold: true}],
    descriptionWidth: "w-[8.311em]",
    channels: [CHANNELS.hboMax, CHANNELS.telecine, CHANNELS.universal],
    channelCount: "+ de 30",
    price: {integer: "39", cents: ",90"},
  },
  {
    id: "family",
    name: "FAMILY",
    description: [{text: "Diversão", bold: true}, {text: " para todas as idades."}],
    descriptionWidth: "w-[8.98em]",
    channels: [CHANNELS.premiere, CHANNELS.telecine, CHANNELS.gloob],
    channelCount: "+ de 70",
    price: {integer: "74", cents: ",90"},
  },
];
