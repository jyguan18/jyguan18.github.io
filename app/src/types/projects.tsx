import type { Project } from "../pages/ProjectsPage";

export const projects: Project[] = [
  {
    id: 1,
    name: "Hotpot VR",
    video: "/videos/hotpot.mp4",
    description:
      "A cozy VR cooking game with boiling water physics and buoyancy.",
    tools: ["Unity", "XR Toolkit", "Shader Graph"],
    github: "https://github.com/yourname/hotpot-vr",
    demo: "https://youtu.be/example1",
  },
  {
    id: 2,
    name: "Water Shader",
    video: "/videos/water_shader.mp4",
    description:
      "Real-time GLSL shader simulating water ripples and reflection.",
    tools: ["GLSL", "OpenGL"],
    github: "https://github.com/yourname/water-shader",
    demo: "https://youtu.be/example2",
  },
  {
    id: 3,
    name: "AR Puppets",
    video: "/videos/ar_puppets.mp4",
    description: "Marker-based AR experience with interactive puppets.",
    tools: ["Unity", "AR Foundation", "C#"],
    github: "https://github.com/yourname/ar-puppets",
    demo: "https://youtu.be/example3",
  },
];
