import { useAtomValue, useAtom } from "jotai";
import { isProjectModalVisibleAtom, chosenProjectDataAtom } from "../store";

export default function ProjectModal() {
  const projectData = useAtomValue(chosenProjectDataAtom);
  const [isVisible, setIsVisible] = useAtom(isProjectModalVisibleAtom);

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
          <h1>{projectData.title}</h1>
          <div className="modal-btn-container">
            {projectData.links.map((linkData) => (
              <button
                key={linkData.id}
                className={"modal-btn"}
                onClick={() => {
                  window.open(linkData.link, "_blank");
                }}
              >
                {linkData.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
