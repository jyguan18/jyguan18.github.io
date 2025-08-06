import React, { useState } from "react";
import TopToolbar from "./components/TopToolbar";
import ProjectsPage from "./pages/ProjectsPage";
import Modal from "./components/modals/Modal"; // Import your Modal component
import { projects } from "./types/projects";
import HomePage from "./pages/HomePage";
import { Mail, Linkedin, Github, Phone, Twitter } from "lucide-react";
import AboutContent from "./components/modals/AboutContent";
import ContactContent from "./components/modals/ContactContent";

export interface Project {
  id: number;
  name: string;
  description: string;
  video: string;
  tools: string[];
  github: string;
  demo: string;
}

type Page = "Home" | "Projects";

export default function App() {
  const [page, setPage] = useState<Page>("Home");

  // Modal state for About and Contact
  const [modalContent, setModalContent] = useState<"About" | "Contact" | null>(
    null
  );

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
            setModalContent(menu);
          } else {
            setPage(menu as Page);
            setModalContent(null);
          }
        }}
      />

      <div className="flex flex-grow overflow-auto p-4 gap-4 text-gray-200 modal-scrollbar">
        {page === "Projects" ? (
          <ProjectsPage />
        ) : (
          <HomePage setPage={setPage} />
        )}
      </div>

      {modalContent === "About" && (
        <Modal title="About Me" onClose={() => setModalContent(null)}>
          <AboutContent />
        </Modal>
      )}

      {modalContent === "Contact" && (
        <Modal title="Contact" onClose={() => setModalContent(null)}>
          <ContactContent />
        </Modal>
      )}
    </div>
  );
}
