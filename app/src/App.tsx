import { useState, useEffect } from "react";
import TopToolbar from "./components/TopToolbar";
import ProjectsPage from "./pages/ProjectsPage";
import Modal from "./components/modals/Modal"; // Import your Modal component
import HomePage from "./pages/HomePage";
import AboutContent from "./components/modals/AboutContent";
import ContactContent from "./components/modals/ContactContent";
import ResumePage from "./pages/ResumePage";

export interface Project {
  id: number;
  name: string;
  description: string;
  video: string;
  tools: string[];
  github: string;
  demo: string;
}

type Page = "Home" | "Projects" | "About" | "Resume";

export default function App() {
  const [page, setPage] = useState<Page>("Home");
  const [openModals, setOpenModals] = useState<string[]>([]);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (type: string) => {
    setOpenModals((prev) => {
      const filtered = prev.filter((t) => t !== type);
      return [...filtered, type];
    });
  };

  const bringToFront = (type: string) => {
    setOpenModals((prev) => {
      const without = prev.filter((m) => m !== type);
      return [...without, type];
    });
  };

  return (
    <div className="flex flex-col h-screen bg-midnight">
      <TopToolbar
        currentPage={page}
        onPageChange={(
          menu:
            | string
            | ((
                prevState: "About" | "Contact" | null
              ) => "About" | "Contact" | null)
            | null
        ) => {
          if (menu === "About" || menu === "Contact") {
            openModal(menu);
          } else {
            setPage(menu as Page);
          }
        }}
      />

      <div className="flex flex-grow overflow-auto gap-4 text-gray-200 modal-scrollbar">
        {page === "Projects" ? (
          <ProjectsPage />
        ) : page === "Resume" ? (
          <ResumePage />
        ) : (
          <HomePage setPage={setPage} openModal={openModal} />
        )}
      </div>

      {openModals.map((modalType, index) => {
        const zIndex = 1000 + index;
        const modalSize = isSmallScreen
          ? "fullscreen"
          : modalType === "About"
          ? "medium"
          : "small";
        return (
          <div
            key={modalType}
            style={{ position: "fixed", zIndex }}
            onMouseDown={() => bringToFront(modalType)}
          >
            <Modal
              title={modalType === "About" ? "About" : "Contact"}
              onClose={() =>
                setOpenModals((prev) => prev.filter((m) => m !== modalType))
              }
              size={modalSize}
            >
              {modalType === "About" ? <AboutContent /> : <ContactContent />}
            </Modal>
          </div>
        );
      })}
    </div>
  );
}
