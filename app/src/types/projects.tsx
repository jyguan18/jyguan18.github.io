import type { Project } from "../pages/ProjectsPage";

export const projects: Project[] = [
  {
    id: 1,
    name: "Hotpot VR",
    video: "https://youtu.be/bA2FPyFT_18",
    description:
      "An immersive VR cooking simulator featuring realistic boiling water and dynamic ingredient interactions.",
    contributions: [
      "Implemented boiling water physics using fluid simulation",
      "Designed interactive ingredient behavior with buoyancy",
      "Created custom shaders with Shader Graph",
    ],
    tools: ["Unity", "XR Toolkit", "Shader Graph"],
    github: "https://github.com/",
    demo: "https://youtu.be/bA2FPyFT_18",
    category: "Games",
  },
  {
    id: 2,
    name: "Mini-Minecraft",
    video: "https://vimeo.com/1052431663?share=copy",
    description:
      "A real-time shader demo showcasing water ripple effects with accurate reflection and refraction.",
    tools: ["GLSL", "OpenGL", "C++"],
    github: "https://github.com/",
    demo: "https://vimeo.com/1052431663?share=copy",
    category: "Computer Graphics",
  },
  {
    id: 3,
    name: "Physically-Based Shaders",
    video: "/videos/sdfs.mp4",
    description:
      "An augmented reality experience using marker detection to animate interactive 3D puppets.",
    tools: ["OpenGL", "C++", "GLSL"],
    github: "",
    demo: "",
    category: "Rendering",
  },
  {
    id: 4,
    name: "Mini-Maya",
    video: "/videos/mini-maya.mp4",
    description:
      "A lightweight AR app combining marker tracking with 3D model manipulation.",
    tools: ["OpenGL", "C#"],
    github: "",
    demo: "/videos/mini-maya.mp4",
    category: "Computer Graphics",
  },
  {
    id: 5,
    name: "Extreme Extermination",
    video: "https://youtu.be/fYP_kxwYy1U",
    description:
      "Fast-paced VR shooter built in Unreal Engine with responsive controls and engaging gameplay.",
    tools: ["Unreal", "Blueprints"],
    github: "https://github.com/",
    demo: "https://youtu.be/fYP_kxwYy1U",
    category: "Games",
  },
  {
    id: 6,
    name: "Pouring Vessel",
    video: "/videos/vase.mp4",
    description:
      "A detailed 3D model of a pouring vessel crafted with precision using Maya.",
    tools: ["Maya"],
    github: "https://github.com/",
    demo: "/videos/ExtremeExtermination.mp4",
    category: "Models",
  },
  {
    id: 7,
    name: "Attic Nook",
    photos: [
      "/images/projects/env1.png",
      "/images/projects/env2.png",
      "/images/projects/env3.png",
      "/images/projects/env4.png",
      "/images/projects/env5.png",
    ],
    description:
      "A cozy 3D modeled attic environment textured with Substance Painter for immersive detail.",
    tools: ["Maya", "Substance Painter"],
    github: "https://github.com/",
    demo: "/videos/ExtremeExtermination.mp4",
    category: "Models",
  },
  {
    id: 8,
    name: "Physics Invaders",
    video: "https://vimeo.com/1061091021",
    description:
      "A cozy 3D modeled attic environment textured with Substance Painter for immersive detail.",
    tools: ["Unity", "C#"],
    github: "https://github.com/",
    demo: "https://vimeo.com/1061091021",
    category: "Games",
  },
];
