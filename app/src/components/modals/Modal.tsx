import React, { useState, useRef, useEffect } from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  openFullscreen?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  onClose,
  openFullscreen,
}) => {
  const [pos, setPos] = useState<{ x: number; y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<{
    mouseX: number;
    mouseY: number;
    modalX: number;
    modalY: number;
  } | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  // Fullscreen state
  const [fullscreen, setFullscreen] = useState(openFullscreen ?? false);

  const onMouseDown = (e: React.MouseEvent) => {
    if (fullscreen) return; // no drag if fullscreen

    e.preventDefault();
    dragStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      modalX: pos.x,
      modalY: pos.y,
    };
    setDragging(true);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging || !dragStart.current) return;

    const dx = e.clientX - dragStart.current.mouseX;
    const dy = e.clientY - dragStart.current.mouseY;

    let newX = dragStart.current.modalX + dx;
    let newY = dragStart.current.modalY + dy;

    if (modalRef.current) {
      const modalRect = modalRef.current.getBoundingClientRect();
      const minX = modalRect.width / 2;
      const minY = modalRect.height / 2;
      const maxX = window.innerWidth - modalRect.width / 2;
      const maxY = window.innerHeight - modalRect.height / 2;

      newX = Math.min(Math.max(newX, minX), maxX);
      newY = Math.min(Math.max(newY, minY), maxY);
    }

    setPos({ x: newX, y: newY });
  };

  const onMouseUp = () => {
    setDragging(false);
    dragStart.current = null;
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging]);

  // Toggle fullscreen on button click
  const toggleFullscreen = () => {
    setFullscreen((f) => !f);
  };

  // Styles for modal positioning and sizing
  const modalStyle = fullscreen
    ? {
        top: "50%",
        left: "50%",
        width: "90vw",
        height: "90vh",
        maxWidth: "none",
        maxHeight: "none",
        transform: "translate(-50%, -50%)",
        cursor: "default",
      }
    : {
        top: pos.y,
        left: pos.x,
        width: "600px", // <- fixed width
        height: "400px", // <- optional: fixed height
        maxWidth: "90vw",
        maxHeight: "80vh",
        transform: "translate(-50%, -50%)",
        cursor: dragging ? "grabbing" : "default",
      };

  return (
    <>
      <div
        ref={modalRef}
        className="fixed overflow-auto bg-midnight border-2 border-lavender/60 shadow-lg shadow-lavender/20 rounded-md z-50 select-none flex flex-col"
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex justify-between items-center mb-4 bg-lavender rounded-sm px-3 py-2 cursor-grab select-none"
          onMouseDown={onMouseDown}
        >
          <h2 className="text-gray-200 font-mono text-lg">{title}</h2>

          <div className="flex space-x-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              className="text-gray-400 hover:text-gray-200 focus:outline-none"
              aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
              title={fullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {fullscreen ? (
                  <path d="M9 14H5v5h5v-4a1 1 0 011-1zM15 10h4V5h-5v4a1 1 0 001 1z" />
                ) : (
                  <>
                    <path d="M4 4h6M4 4v6M20 20h-6M20 20v-6" />
                    <path d="M20 4v4M20 4h-4M4 20v-4M4 20h4" />
                  </>
                )}
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="text-gray-400 hover:text-gray-200 focus:outline-none"
              aria-label="Close modal"
              title="Close"
            >
              X
            </button>
          </div>
        </div>

        <div className="text-gray-300 font-mono text-sm flex-grow overflow-auto p-3 modal-scrollbar">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
