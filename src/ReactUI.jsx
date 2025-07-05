import CameraController from "./reactComponents/CameraController";
import SocialModal from "./reactComponents/SocialModal";
import EmailModal from "./reactComponents/EmailModal";
import ProjectModal from "./reactComponents/ProjectModal";

export default function ReactUI() {
  return (
    <>
      <p className="controls-message">Click to Move</p>
      <CameraController />
      <SocialModal />
      <EmailModal />
      <ProjectModal />
    </>
  );
}