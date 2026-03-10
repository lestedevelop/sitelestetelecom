import CamerasHero from "@/pageComponents/cameras/CamerasHero";
import CamerasModels from "@/pageComponents/cameras/CamerasModels";
import CamerasResources from "@/pageComponents/cameras/CamerasResources";
import CamerasPlans from "@/pageComponents/cameras/CamerasPlans";
import CamerasStorage from "@/pageComponents/cameras/CamerasStorage";
import CamerasFaq from "@/pageComponents/cameras/CamerasFaq";

export default function CamerasPage() {
  return (
    <div className="min-h-full ">
      <CamerasHero />
      <CamerasModels />
      <CamerasResources />
      <CamerasPlans />
      <CamerasStorage />
      <CamerasFaq />
    </div>
  );
}
