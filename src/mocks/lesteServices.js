import services from "@/mocks/lesteServices.json";
import lesteUp from "@/assets/cardlesteup.png";
import lesteMovel from "@/assets/bannermovel.webp";
import lesteCameras from "@/assets/cameras/bannercameras.webp";

const SERVICE_IMAGES = {
  lesteUp,
  lesteMovel,
  lesteCameras,
};

export const LESTE_SERVICES = services.map((service) => ({
  ...service,
  image: SERVICE_IMAGES[service.imageKey] || lesteUp,
}));

export function getLesteServices() {
  return LESTE_SERVICES;
}
