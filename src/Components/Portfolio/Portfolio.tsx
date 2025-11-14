import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "./Portfolio.css";
import "remixicon/fonts/remixicon.css";
import DesingImgOne from "./../../images/Portfolio/DesingImgOne.jpeg";
import DesingImgTwo from "./../../images/Portfolio/DesingImgTwo.jpeg";
import DesingImgThree from "./../../images/Portfolio/DesingImgThree.jpeg";
import LogoImgOne from "./../../images/Portfolio/LogoImgOne.jpeg";
import LogoImgTwo from "./../../images/Portfolio/LogoImgTwo.jpeg";
import LogoImgThree from "./../../images/Portfolio/LogoImgThree.jpeg";
//Web
import WebImgOne from "./../../images/Portfolio/Web/webFranky.png";
import WebImgTwo from "./../../images/Portfolio/Web/WebFullCar.png";
//Reels
import ReelOne from "./../../images/Portfolio/reel1.mp4";
import ReelTwo from "./../../images/Portfolio/reel2.mp4";
import ReelThree from "./../../images/Portfolio/reel3.mp4";
import ReelFour from "./../../images/Portfolio/reel4.mp4";
import ReelFive from "./../../images/Portfolio/reel5.mp4";

interface Feature {
    title: string;
    description: string;
}

interface PortfolioProject {
    id: number;
    title: string;
    mediaUrl: string;
    siteUrl?: string;
}

interface PortfolioCategory {
    id: string;
    mainTitle: string;
    subTitle: string;
    description: string;
    features: Feature[];
    projects: PortfolioProject[];
    layoutStyle: "default" | "logos" | "reels";
}

const portfolioCategories: PortfolioCategory[] = [
    {
        id: "web",
        mainTitle: "Portafolio Web",
        subTitle: "Proyectos Web Interactivos",
        description:
            "Explora nuestros proyectos web completos. Cada sitio fue desarrollado con enfoque en experiencia de usuario, rendimiento y diseño adaptable.",
        features: [
            { title: "Versión Móvil", description: "Optimizado para móviles" },
            { title: "Interactivo", description: "Navega el sitio libremente" }
        ],
        projects: [
            {
                id: 1,
        title: "Franky S.U.R.L",
        mediaUrl: WebImgOne,
        siteUrl: "https://franky-s-u-r-l.vercel.app/"
            },
             {
                id: 2,
        title: "Full Car",
        mediaUrl: WebImgTwo,
        siteUrl: "https://shop-car-sandy.vercel.app/"
            }
        ],
        layoutStyle: "default"
    },
    {
        id: "logos",
        mainTitle: "Identidad de marca",
        subTitle: "Logotipos que cuentan historias",
        description:
            "Creamos identidades visuales únicas que capturan la esencia de tu marca. Desde enfoques minimalistas hasta diseños ilustrativos, cada logotipo es una pieza estratégica de comunicación.",
        features: [
            { title: "Diseños originales", description: "y memorables" },
            { title: "Proceso colaborativo", description: "con el cliente" },
            { title: "Versiones para todos", description: "los medios" }
        ],
        projects: [
            { id: 4, title: 'Logo "Quantum"', mediaUrl: LogoImgOne },
            { id: 5, title: 'Logo "EcoSustain"', mediaUrl: LogoImgTwo },
            { id: 6, title: 'Logo "Gourmet"', mediaUrl: LogoImgThree }
        ],
        layoutStyle: "logos"
    },
    {
        id: "designs",
        mainTitle: "Marketing visual",
        subTitle: "Diseños Publicitarios",
        description:
            "Transformamos tus mensajes en piezas visuales irresistibles. Carteles, banners y material promocional diseñado no solo para verse bien, sino para cumplir objetivos específicos de marketing.",
        features: [
            { title: "Alto impacto", description: "Diseños para captar atención" },
            { title: "Formatos variados", description: "Verticales, horizontales y cuadrados" }
        ],
        projects: [
            { id: 7, title: "Banner para Taqueria", mediaUrl: DesingImgOne },
            { id: 8, title: "Banner para Joyas", mediaUrl: DesingImgTwo },
            { id: 9, title: "Banner para Work", mediaUrl: DesingImgThree }
        ],
        layoutStyle: "default"
    },
    {
        id: "reels",
        mainTitle: "Contenido dinámico",
        subTitle: "Reels Impactantes",
        description:
            "Videos cortos diseñados para un engagement masivo en redes sociales. Optimizados para la viralidad.",
        features: [],
        projects: [
            { id: 10, title: "Reel Promocional", mediaUrl: ReelOne },
            { id: 11, title: "Reel para Instagram", mediaUrl: ReelTwo },
            { id: 12, title: "Reel de Producto", mediaUrl: ReelThree },
            { id: 13, title: "Reel de Evento", mediaUrl: ReelFour },
            { id: 14, title: "Reel Testimonial", mediaUrl: ReelFive }
        ],
        layoutStyle: "reels"
    }
];

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

    if (category.layoutStyle === "reels") {
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
                            <video
                                src={project.mediaUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                aria-label={project.title}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        );
    }

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
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0.5, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0.5, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {category.id === "web" ? (
                            <div className="browser-mockup">
                                <div className="browser-header"><span></span></div>
                                <div className="browser-content">
                                    <img
                                        src={activeProject.mediaUrl}
                                        title={activeProject.title}
                                    />
                                    <div style={{ marginTop: 16 }}>
                                        <a
                                            href={activeProject.siteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                        >
                                            Visitar sitio web
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) : category.layoutStyle === "default" ? (
                            <div className="browser-mockup">
                                <div className="browser-header"><span></span></div>
                                <div className="browser-content">
                                    <img src={activeProject.mediaUrl} alt={activeProject.title} />
                                </div>
                            </div>
                        ) : category.layoutStyle === "logos" ? (
                            <div className="logo-visual-main">
                                <img src={activeProject.mediaUrl} alt={activeProject.title} />
                            </div>
                        ) : null}
                    </motion.div>
                </AnimatePresence>
                <div className="thumbnail-carousel">
                    <Slider {...thumbnailSliderSettings}>
                        {category.projects.map(project => (
                            <div key={project.id} onClick={() => setActiveProject(project)}>
                                <div className={`thumbnail-item ${activeProject.id === project.id ? "active" : ""}`}>
                                    {category.id === "web" ? (
                                        <div style={{
                                            width: "100%",
                                            height: 80,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: "#f5f5f5",
                                            borderRadius: 6
                                        }}>
                                            <i className="ri-global-line" style={{ fontSize: 32, color: "#222" }} />
                                        </div>
                                    ) : (
                                        <img src={project.mediaUrl} alt={project.title} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </motion.div>
    );
};

export const Portfolio = () => (
    <section className="portfolio-section" id="portafolio">
        <div className="container">
            <div className="portfolio-header">
                <h2 className="section-title">Nuestro Portafolio</h2>
                <p className="subtitle">
                    Descubre cómo transformamos ideas en experiencias visuales impactantes.
                </p>
            </div>
            <div className="portfolio-content-area">
                {portfolioCategories.map(category => (
                    <CategorySection key={category.id} category={category} />
                ))}
            </div>
        </div>
    </section>
);