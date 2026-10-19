

import ChatAi from "../assets/img-projects/ChatAI.png";
import CRM from "../assets/img-projects/CRM.jpg"
import COL from "../assets/img-projects/COL.png"
import FYLO from "../assets/img-projects/FY1.png"
import GCM from "../assets/img-projects/GCM.png"
import DASH from '../assets/img-projects/DASH.png'
import INV from '../assets/img-projects/INV.png'
import GCB from '../assets/img-projects/LBGC.png'
import API from '../assets/img-projects/APS.png'

export const proyectos = [
  {
    titulo: "CRM Clinca",
    descripcion:
      "CRM desarrollada en un lapso de 3 meses sobre Laravel 12, sustituyendo al anterior CRM del cliente hecho en PHP puro, se utilizaron tecnologias como, DataDatbles, BunnyCDN, Imagick, etc. ",
    imagen: CRM.src,
    tecnologias: ["Laravel", "Tailwind", "JavaScript", "SQL"],
    demo: "https://vintage-tone-front-vue.vercel.app",
    codigo: "https://github.com/AntonioOrtega32/CRM-Clinica.git",
    categoria: "fullstack",
  },
  {
    titulo: "Landing Clinica",
    descripcion:
      "Landing realizada con Tailwind y JS, parte del CRM de la clinica",
    imagen: COL.src,
    tecnologias: ["Laravel", "Tailwind", "JavaScript", "CSS"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    codigo: "https://github.com/AntonioOrtega32/CRM-Clinica.git",
    categoria: "fullstack",
  },
  {
    titulo: "FrontEnd Fylo",
    descripcion:
      "Landing realizada como practica, enfocadad a una aplicacion de almacenamiento en la nube para empresas.",
    imagen: FYLO.src,
    tecnologias: ["React", "Tailwind", "TypeScript"],
    demo: "https://productivity-app-tau-virid.vercel.app",
    codigo: "https://github.com/Lautaro-R-collins/productivity-App.git",
    categoria: "fullstack",
  },
  {
    titulo: "Landing Inversoft",
    descripcion:
      "Landing realizada para proyecto universitario en el año 2024",
    imagen: INV.src,
    tecnologias: ["Bootstrap", "HTML", "CSS", "PHP"],
    demo: "https://multi-model-ai-chat-platform.vercel.app",
    codigo:
      "https://github.com/Lautaro-R-collins/Multi-Model-AI-Chat-Platform.git",
    categoria: "fullstack",
  },
  {
    titulo: "CRM Adminstrativo GCM",
    descripcion:
      "CRM Administrativo para la empresa German Control Motion",
    imagen: GCM.src,
    tecnologias: ["PHP", "AJAX", "Laravel", "JavaScript"],
    demo: "https://multi-model-ai-chat-platform.vercel.app",
    codigo:
      "https://github.com/Lautaro-R-collins/Multi-Model-AI-Chat-Platform.git",
    categoria: "fullstack",
  },
  {
    titulo: "Api Basica",
    descripcion:
      "API Basica hecha en PHP",
    imagen: API.src,
    tecnologias: ["PHP"],
    demo: "https://automotores-frontend.vercel.app",
    codigo: "https://github.com/AntonioOrtega32/API-Basica.git",
    categoria: "frontend",
  },
  {
     titulo: "Landing Basica GCM",
    descripcion:
      "Pagina demo realizada para German Control Motion, para la expo Encuentro Insdustrial Queretaro 2024",
    imagen: GCB.src,
    tecnologias: ["HTML", "CSS"],
    demo: "https://automotores-frontend.vercel.app",
    codigo: "https://github.com/AntonioOrtega32/LandingBasica.git",
    categoria: "frontend",
  },
  {
     titulo: "Dashboard Basico",
    descripcion:
      "Dashboar basico hecho en Laravel 9",
    imagen: DASH.src,
    tecnologias: ["Laravel", "Bootstrap", "JavaScript"],
    demo: "https://automotores-frontend.vercel.app",
    codigo: "https://github.com/AntonioOrtega32/DSM-41_AWOS_SalazarOrtega_CesarAntonio_Practicas_Proyecto.git",
    categoria: "frontend",
  }
];
