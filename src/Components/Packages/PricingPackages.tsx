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
    name: 'Paquete Esencial',
    price: '$150',
    description: 'Perfecto para startups y negocios que recién comienzan.',
    features: [
      'Gestión de 1 Red Social',
      '12 Publicaciones al Mes',
      'Diseño Gráfico Básico',
      'Reporte Mensual de Rendimiento',
      'Soporte por Correo'
    ],
  },
  {
    name: 'Paquete Crecimiento',
    price: '$300',
    description: 'Ideal para pequeñas empresas que buscan expandir su alcance.',
    features: [
      'Gestión de 2 Redes Sociales',
      '20 Publicaciones al Mes',
      'Diseño Gráfico Avanzado',
      'Campaña de Anuncios Básica',
      'Reporte Quincenal'
    ],
    isFeatured: true, // El paquete destacado
  },
  {
    name: 'Paquete Profesional',
    price: '$500',
    description: 'Para empresas establecidas que necesitan una estrategia sólida.',
    features: [
      'Gestión de 3 Redes Sociales',
      '30 Publicaciones al Mes',
      'Creación de Contenido de Video (1)',
      'Gestión de Campañas de Anuncios',
      'Optimización SEO On-Page'
    ],
  },
  {
    name: 'Paquete Premium',
    price: '$800',
    description: 'Solución completa para marcas que buscan dominar su nicho.',
    features: [
      'Gestión de 4 Redes Sociales',
      'Contenido Ilimitado',
      'Producción de Video y Fotografía',
      'Estrategia de Email Marketing',
      'Soporte Prioritario 24/7'
    ],
  },
  {
    name: 'Paquete Corporativo',
    price: 'Personalizado',
    description: 'Una solución a medida para grandes corporaciones.',
    features: [
      'Todo lo del Paquete Premium',
      'Consultoría Estratégica Dedicada',
      'Desarrollo Web y Mantenimiento',
      'Relaciones Públicas Digitales',
      'Análisis de Competencia Avanzado'
    ],
  }
];

const cubaPackages: Package[] = [
    {
        name: "Paquete Esencial",
        price: "15000 CUP",
        description: "Ideal para negocios cubanos que inician.",
        features: [
            "5 Diseños Gráficos basicos, portadas, flyers, etc.",
            "5 Publicaciones Diarias en hasta 100 grupos de Facebook",
            "5 flyers promocionales",
            "5 Publicaciones diarias en Revolico",
            "Sin influencers"
        ]
    },
    {
        name: "Paquete Emprendedor",
        price: "20000 CUP",
        description: "Para empresas cubanas que buscan crecer.",
        features: [
            "8 Diseños Gráficos, portadas, flyers, etc.",
            "8 Publicaciones Diarias en hasta 100 grupos de Facebook",
            "6 flyers promocionales",
            "6 Publicaciones diarias en Revolico",
            "Sin influencers"
        ],
        isFeatured: true
    },
    {
        name: "Paquete Profesional",
        price: "25000 CUP",
        description: "Ideal para negocios cubanos que buscan ser Profesionales.",
        features: [
            "12 Diseños Gráficos, portadas, flyers, etc.",
            "10 Publicaciones Diarias en hasta 200 grupos de Facebook",
            "7 flyers promocionales",
            "6 Publicaciones diarias en Revolico",
            "1 influencer de hasta 3000 seguidores",
            "Asesoria personalizada"
        ]
    },
    {
        name: "Paquete Empresarial",
        price: "30000 CUP",
        description: "Para empresas cubanas consolidadas.",
        features: [
            "18 Diseños Gráficos, portadas, flyers, etc.",
            "12 Publicaciones Diarias en hasta 300 grupos de Facebook",
            "8 flyers promocionales",
            "7 Publicaciones diarias en Revolico",
            "2 influencer de hasta 50 000 seguidores",
            "Segmentacion de Mercado Objetivo"
        ]
    },
    {
        name: "Paquete Elite",
        price: "35000 CUP",
        description: "Para marcas cubanas que buscan la excelencia.",
        features: [
            "25 Diseños Gráficos premium, portadas, flyers, etc.",
            "15 Publicaciones Diarias en hasta 500 grupos de Facebook",
            "10 flyers promocionales",
            "8 Publicaciones diarias en Revolico",
            "3 influencer de hasta 100 000 seguidores",
            "Plan de Marketing, Monitorización y Optimización"
        ]
    }
];

export const PricingPackages = () => {
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

    return (
        <section className="pricing-section" id="paquetes">
            <div className="container">
                <div className="pricing-header">
                    <h2 className="section-title">Paquetes a tu Medida</h2>
                    <p className="subtitle">
                        {isCuba
                            ? "Precios exclusivos para Cuba (CUP)."
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

