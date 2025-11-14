import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./PricingPackages.css";
import "remixicon/fonts/remixicon.css";

interface Package {
    name: string;
    price: string;
    description: string;
    features: string[];
    isFeatured?: boolean;
}

const pricingData: Package[] = [
    {
        name: "Paquete Básico",
        price: "$250",
        description: "Ideal para emprendedores o pequeños negocios que buscan presencia diaria, promoción constante y resultados visibles.",
        features: [
            "Gestión profesional de redes sociales (Facebook e Instagram).",
            "Publicaciones diarias en Grupos de Facebook (200 publicaciones mensuales).",
            "Publicaciones diarias Canales de Telegram (20 publicaciones mensuales).",
            "10 grupos de WhatsApp, con publicaciones 3 veces al día programadas y 2 veces al día manuales por nuestro equipo.",
            "App Revolico: hasta 10 publicaciones diarias.",
            "Creación de identidad de marca (colores, tipografía, estilo visual).",
            "10 flyers profesionales mensuales.",
            "1 video promocional para redes o WhatsApp.",
            "Publicidad orgánica en centros de copias y contenido audiovisual (películas, cortos, clips).",
            "Difusión física: pegado de flyers en zonas de alta concentración."
        ]
    },
    {
        name: "Paquete Intermedio",
        price: "$300",
        description: "Perfecto para negocios que buscan mayor alcance, interacción y posicionamiento diario.",
        features: [
            "Incluye todo del Paquete Básico",
            "Optimización de publicaciones diarias y segmentación avanzada.",
            "Campañas cruzadas entre Facebook, Telegram y Revolico.",
            "15 flyers personalizados y 2 videos promocionales mensuales.",
            "Actualización constante de anuncios y productos destacados."
        ],
        isFeatured: true
    },
    {
        name: "Paquete Profesional",
        price: "$350",
        description: "Diseñado para negocios que quieren escalar y generar una presencia digital sólida y profesional.",
        features: [
            "Incluye todo del Paquete Intermedio",
            "Publicaciones diarias avanzadas con segmentación de horarios y ubicaciones.",
            "20 flyers y 3 videos mensuales de contenido profesional.",
            "Colaboración con influencers de más de 100K seguidores en Instagram.",
            "Análisis mensual de resultados y ajustes estratégicos.",
            "Soporte prioritario 24/7."
        ]
    },
    {
        name: "Paquete Empresarial",
        price: "$400",
        description: "Ideal para marcas en expansión que buscan campañas sólidas y alcance profesional.",
        features: [
            "Incluye todo del Paquete Profesional",
            "Diseño gráfico y audiovisual avanzado (videos, reels, banners).",
            "25 flyers mensuales y 4 videos personalizados.",
            "Gestión de anuncios pagos (Facebook & Instagram Ads).",
            "Asesoría mensual en posicionamiento y estrategia visual.",
            "Publicidad orgánica en centros de copias y contenido audiovisual.",
            "Distribución física diaria de flyers en zonas estratégicas y de alto tránsito."
        ]
    },
    {
        name: "Paquete Premium",
        price: "$500",
        description: "La solución integral para empresas que buscan dominar su presencia digital y física, con estrategias completas de posicionamiento.",
        features: [
            "Incluye todo del Paquete Empresarial",
            "Gestión integral de marketing digital (Facebook Ads + Instagram Ads + Telegram + Revolico).",
            "Página web o tienda online interactiva personalizada, optimizada para móviles.",
            "Campañas continuas con influencers de alto impacto (más de 100K seguidores).",
            "30 flyers mensuales y 5 videos promocionales profesionales.",
            "Campañas orgánicas con presencia en contenido audiovisual popular.",
            "Pegado y rotación constante de flyers en zonas de alta afluencia durante todo el mes."
        ]
    }
];

const cubaPackages: Package[] = [
    {
        name: "Paquete Básico",
        price: "$250",
        description: "Ideal para emprendedores o pequeños negocios que buscan presencia diaria, promoción constante y resultados visibles.",
        features: [
            "Gestión profesional de redes sociales (Facebook e Instagram).",
            "Publicaciones diarias en Grupos de Facebook (200 publicaciones mensuales).",
            "Publicaciones diarias Canales de Telegram (20 publicaciones mensuales).",
            "10 grupos de WhatsApp, con publicaciones 3 veces al día programadas y 2 veces al día manuales por nuestro equipo.",
            "App Revolico: hasta 10 publicaciones diarias.",
            "Creación de identidad de marca (colores, tipografía, estilo visual).",
            "10 flyers profesionales mensuales.",
            "1 video promocional para redes o WhatsApp.",
            "Publicidad orgánica en centros de copias y contenido audiovisual (películas, cortos, clips).",
            "Difusión física: pegado de flyers en zonas de alta concentración."
        ]
    },
    {
        name: "Paquete Intermedio",
        price: "$300",
        description: "Perfecto para negocios que buscan mayor alcance, interacción y posicionamiento diario.",
        features: [
            "Incluye todo del Paquete Básico",
            "Optimización de publicaciones diarias y segmentación avanzada.",
            "Campañas cruzadas entre Facebook, Telegram y Revolico.",
            "15 flyers personalizados y 2 videos promocionales mensuales.",
            "Actualización constante de anuncios y productos destacados."
        ],
        isFeatured: true
    },
    {
        name: "Paquete Profesional",
        price: "$350",
        description: "Diseñado para negocios que quieren escalar y generar una presencia digital sólida y profesional.",
        features: [
            "Incluye todo del Paquete Intermedio",
            "Publicaciones diarias avanzadas con segmentación de horarios y ubicaciones.",
            "20 flyers y 3 videos mensuales de contenido profesional.",
            "Colaboración con influencers de más de 100K seguidores en Instagram.",
            "Análisis mensual de resultados y ajustes estratégicos.",
            "Soporte prioritario 24/7."
        ]
    },
    {
        name: "Paquete Empresarial",
        price: "$400",
        description: "Ideal para marcas en expansión que buscan campañas sólidas y alcance profesional.",
        features: [
            "Incluye todo del Paquete Profesional",
            "Diseño gráfico y audiovisual avanzado (videos, reels, banners).",
            "25 flyers mensuales y 4 videos personalizados.",
            "Gestión de anuncios pagos (Facebook & Instagram Ads).",
            "Asesoría mensual en posicionamiento y estrategia visual.",
            "Publicidad orgánica en centros de copias y contenido audiovisual.",
            "Distribución física diaria de flyers en zonas estratégicas y de alto tránsito."
        ]
    },
    {
        name: "Paquete Premium",
        price: "$500",
        description: "La solución integral para empresas que buscan dominar su presencia digital y física, con estrategias completas de posicionamiento.",
        features: [
            "Incluye todo del Paquete Empresarial",
            "Gestión integral de marketing digital (Facebook Ads + Instagram Ads + Telegram + Revolico).",
            "Página web o tienda online interactiva personalizada, optimizada para móviles.",
            "Campañas continuas con influencers de alto impacto (más de 100K seguidores).",
            "30 flyers mensuales y 5 videos promocionales profesionales.",
            "Campañas orgánicas con presencia en contenido audiovisual popular.",
            "Pegado y rotación constante de flyers en zonas de alta afluencia durante todo el mes."
        ]
    }
];

interface PricingPackagesProps {
    onChoosePlan: (packageName: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onChoosePlan }) => {
    const [isCuba, setIsCuba] = useState(false);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const res = await fetch("https://ipapi.co/json/");
                const data = await res.json();
                setIsCuba(data.country_name === "Cuba");
            } catch {
                setIsCuba(false);
            }
        };
        fetchCountry();
    }, []);

    const packagesToShow = isCuba ? cubaPackages : pricingData;

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const handleChoosePlan = (packageName: string) => {
        onChoosePlan(packageName);
        const contactSection = document.getElementById("contacto");
        if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="pricing-section" id="paquetes">
            <div className="container">
                <div className="pricing-header">
                    <h2 className="section-title">Paquetes a tu Medida</h2>
                    <p className="subtitle">
                        {isCuba
                            ? "Precios exclusivos"
                            : "Elige el plan que impulse tu negocio al siguiente nivel."}
                    </p>
                </div>
                <div className="pricing-grid">
                    {packagesToShow.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            className={`pricing-card ${pkg.isFeatured ? "featured" : ""}`}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="card-border-glow"></div>
                            {pkg.isFeatured && (
                                <div className="featured-badge">Más Popular</div>
                            )}
                            <div className="card-header">
                                <h3>{pkg.name}</h3>
                                <p className="price">
                                    {pkg.price}
                                    {pkg.price !== "Personalizado" && <span>/mes</span>}
                                </p>
                                <p className="card-description">{pkg.description}</p>
                            </div>
                            <ul className="features-list">
                                {pkg.features.map(feature => (
                                    <li key={feature}>
                                        <i className="ri-check-double-line"></i>{" "}
                                        {feature === "Sin influencers" ? (
                                            <>
                                                <i className="ri-user-unfollow-line" style={{ marginRight: 4 }}></i>
                                                {feature}
                                            </>
                                        ) : (
                                            feature
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <motion.a
                                href="#contacto"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleChoosePlan(pkg.name)}
                            >
                                Elegir Plan
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

