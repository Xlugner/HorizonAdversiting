import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import './Portfolio.css';
import 'remixicon/fonts/remixicon.css';
import DesingImgOne from './../../images/Portfolio/Creative FOOD Poster Design in photoshop _ Photoshop Tutorial.jpg'
import DesingImgTwo from './../../images/Portfolio/SmartStyle en la revista VOGUE.jpg'
import DesingImgThree from './../../images/Portfolio/Exodus_ Leaving America.jpg'

// Interfaces de datos mejoradas
interface Feature {
  title: string;
  description: string;
}

interface PortfolioProject {
  id: number;
  title: string;
  // Cambiamos el nombre a 'mediaUrl' para que acepte tanto imágenes como videos
  mediaUrl: string;
}

interface PortfolioCategory {
  id: string;
  mainTitle: string;
  subTitle: string;
  description: string;
  features: Feature[];
  projects: PortfolioProject[];
  layoutStyle: 'default' | 'logos' | 'reels';
}

// Datos del portafolio, estructurados según el nuevo diseño
const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'web',
    mainTitle: 'Portafolio Web',
    subTitle: 'Proyectos Web Interactivos',
    description: 'Explora nuestros proyectos web completos. Cada sitio fue desarrollado con enfoque en experiencia de usuario, rendimiento y diseño adaptable.',
    features: [
      { title: 'Versión Escritorio', description: 'Optimizado para pantallas grandes' },
      { title: 'Interactivo', description: 'Navega el sitio libremente' }
    ],
    projects: [
      { id: 1, title: 'Sitio Corporativo FinTech', mediaUrl: '/portfolio/web-fintech.jpg' },
      { id: 2, title: 'E-commerce de Moda', mediaUrl: '/portfolio/web-ecomerce.jpg' },
      { id: 3, title: 'Landing Page para App', mediaUrl: '/portfolio/web-landing.jpg' },
    ],
    layoutStyle: 'default',
  },
  {
    id: 'logos',
    mainTitle: 'Identidad de marca',
    subTitle: 'Logotipos que cuentan historias',
    description: 'Creamos identidades visuales únicas que capturan la esencia de tu marca. Desde enfoques minimalistas hasta diseños ilustrativos, cada logotipo es una pieza estratégica de comunicación.',
    features: [
      { title: 'Diseños originales', description: 'y memorables' },
      { title: 'Proceso colaborativo', description: 'con el cliente' },
      { title: 'Versiones para todos', description: 'los medios' },
    ],
    projects: [
      { id: 4, title: 'Logo "Quantum"', mediaUrl: '/portfolio/logo-quantum.png' },
      { id: 5, title: 'Logo "EcoSustain"', mediaUrl: '/portfolio/logo-ecosustain.png' },
      { id: 6, title: 'Logo "Gourmet"', mediaUrl: '/portfolio/logo-gourmet.png' },
    ],
    layoutStyle: 'logos',
  },
  {
    id: 'designs',
    mainTitle: 'Marketing visual',
    subTitle: 'Diseños Publicitarios',
    description: 'Transformamos tus mensajes en piezas visuales irresistibles. Carteles, banners y material promocional diseñado no solo para verse bien, sino para cumplir objetivos específicos de marketing.',
    features: [
      { title: 'Alto impacto', description: 'Diseños para captar atención' },
      { title: 'Formatos variados', description: 'Verticales, horizontales y cuadrados' }
    ],
    projects: [
        { id: 7, title: 'Banner para Taqueria', mediaUrl: DesingImgOne },
        { id: 8, title: 'Banner para Joyas', mediaUrl: DesingImgTwo },
        { id: 8, title: 'Banner para Work', mediaUrl: DesingImgThree },
    ],
    layoutStyle: 'default',
  },
  {
    id: 'reels',
    mainTitle: 'Contenido dinámico',
    subTitle: 'Reels Impactantes',
    description: 'Videos cortos diseñados para un engagement masivo en redes sociales. Optimizados para la viralidad.',
    features: [],
    projects: [
      // AHORA PUEDES USAR RUTAS A TUS VIDEOS .MP4
      { id: 9, title: 'Reel Promocional', mediaUrl: '/portfolio/reel-promo.mp4' },
      { id: 10, title: 'Reel para Instagram', mediaUrl: '/portfolio/reel-ig-1.mp4' },
      { id: 11, title: 'Reel de Producto', mediaUrl: '/portfolio/reel-product.mp4' },
      { id: 12, title: 'Reel de Evento', mediaUrl: '/portfolio/reel-event.mp4' },
      { id: 13, title: 'Reel Testimonial', mediaUrl: '/portfolio/reel-testimonial.mp4' },
    ],
    layoutStyle: 'reels',
  },
];


// --- Subcomponente para cada sección de categoría ---
const CategorySection = ({ category }: { category: PortfolioCategory }) => {
  const [activeProject, setActiveProject] = useState(category.projects[0]);

  const thumbnailSliderSettings = {
    slidesToShow: Math.min(category.projects.length, 5),
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    responsive: [
        { breakpoint: 768, settings: { slidesToShow: Math.min(category.projects.length, 4) } },
        { breakpoint: 480, settings: { slidesToShow: Math.min(category.projects.length, 3) } }
    ]
  };
  
  // Renderizado especial para la sección de Reels
  if (category.layoutStyle === 'reels') {
    return (
      <motion.div 
        className="portfolio-category-section reels-layout"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-column">
          <h4 className="category-main-title">{category.mainTitle}</h4>
          <h3 className="category-subtitle">{category.subTitle}</h3>
          <p className="category-description">{category.description}</p>
        </div>
        <div className="reels-visual-grid">
          {category.projects.slice(0, 5).map(project => (
            <div key={project.id} className="reel-card">
              {/* --- CAMBIO CLAVE: Usamos la etiqueta <video> --- */}
              <video
                src={project.mediaUrl}
                autoPlay
                loop
                muted
                playsInline // Importante para iOS
                aria-label={project.title}
              />
            </div>
          ))}
        </div>
      </motion.div>
    )
  }

  // Renderizado para layouts 'default' y 'logos'
  return (
    <motion.div
      className={`portfolio-category-section ${category.layoutStyle}-layout default-layout`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-column">
        <h4 className="category-main-title">{category.mainTitle}</h4>
        <h3 className="category-subtitle">{category.subTitle}</h3>
        <p className="category-description">{category.description}</p>
        <div className="features-grid">
          {category.features.map(feature => (
            <div key={feature.title} className="feature-box">
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="visual-column">
        {/* Visual Principal */}
        <AnimatePresence mode="wait">
          <motion.div
              key={activeProject.id}
              initial={{ opacity: 0.5, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.5, y: -10 }}
              transition={{ duration: 0.3 }}
          >
              {category.layoutStyle === 'default' && (
                  <div className="browser-mockup">
                      <div className="browser-header"><span></span></div>
                      <div className="browser-content">
                          <img src={activeProject.mediaUrl} alt={activeProject.title} />
                      </div>
                  </div>
              )}
              {category.layoutStyle === 'logos' && (
                  <div className="logo-visual-main">
                      <img src={activeProject.mediaUrl} alt={activeProject.title} />
                  </div>
              )}
          </motion.div>
        </AnimatePresence>
        
        {/* Carrusel de Miniaturas */}
        <div className="thumbnail-carousel">
            <Slider {...thumbnailSliderSettings}>
                {category.projects.map(project => (
                    <div key={project.id} onClick={() => setActiveProject(project)}>
                        <div className={`thumbnail-item ${activeProject.id === project.id ? 'active' : ''}`}>
                            <img src={project.mediaUrl} alt={project.title} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
      </div>
    </motion.div>
  );
};

// --- Componente Principal del Portafolio ---
export const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portafolio">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">Nuestro Portafolio</h2>
          <p className="subtitle">Descubre cómo transformamos ideas en experiencias visuales impactantes.</p>
        </div>
        
        <div className="portfolio-content-area">
          {portfolioCategories.map(category => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};