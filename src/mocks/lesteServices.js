import services from "@/mocks/lesteServices.json";
import lesteUp from "@/assets/cardlesteup.png";
import blogUp from "@/assets/blog/blog-lesteup.png";
import lesteMovel from "@/assets/blog/blog-movel.png";
import lesteCameras from "@/assets/blog/blog-cameras.png";

const SERVICE_IMAGES = {
  lesteUp,
  lesteMovel,
  lesteCameras,
  blogUp
};

export const LESTE_SERVICES = services.map((service) => ({
  ...service,
  image: SERVICE_IMAGES[service.imageKey] || lesteUp,
}));

export function getLesteServices() {
  return LESTE_SERVICES;
}
