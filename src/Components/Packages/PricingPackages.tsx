import React from 'react';
import { motion } from 'framer-motion';
import './PricingPackages.css'; // Asegúrate de usar el nuevo archivo CSS
import 'remixicon/fonts/remixicon.css';

// La interfaz y los datos se mantienen igual
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


export const PricingPackages = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      }
    })
  };

  return (
    <section className="pricing-section" id="paquetes">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">Paquetes a tu Medida</h2>
          <p className="subtitle">Elige el plan que impulse tu negocio al siguiente nivel.</p>
        </div>
        
        <div className="pricing-grid">
          {pricingData.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`pricing-card ${pkg.isFeatured ? 'featured' : ''}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="card-border-glow"></div>
              {pkg.isFeatured && <div className="featured-badge">Más Popular</div>}
              
              <div className="card-header">
                <h3>{pkg.name}</h3>
                <p className="price">{pkg.price}
                  {pkg.price !== 'Personalizado' && <span>/mes</span>}
                </p>
                <p className="card-description">{pkg.description}</p>
              </div>

              <ul className="features-list">
                {pkg.features.map(feature => (
                  <li key={feature}>
                    <i className="ri-check-double-line"></i> {feature}
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

