import CameraController from "./reactComponents/CameraController";

export default function ReactUI() {
    return(
        <>
            <p className="controls-message">Click To Move</p>
            <CameraController />
        </>
    );
}