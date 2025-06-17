import { useRef } from 'react';
import { Card } from './Card';
import './services.css';
import { useInView } from 'framer-motion';

const servicesData = [
    {
        icon: "ri-apps-line",
        title: "Desarrollo de Aplicaciones",
        description: "Transformamos ideas en aplicaciones móviles a medida, desde soluciones sencillas hasta plataformas complejas con funciones avanzadas e integraciones personalizadas.",
    },
    {
        icon: "ri-code-s-slash-line",
        title: "Diseño Web",
        description: "Un diseño web profesional permite a las marcas consolidar su presencia digital, optimizar la experiencia del usuario y maximizar las tasas de conversión.",
    },
    {
        icon: "ri-landscape-line",
        title: "Diseño Gráfico",
        description: "TEl diseño gráfico transforma mensajes en piezas visuales impactantes: bellas, funcionales y 100% alineadas con tu marca y metas comerciales.",
    },
    {
        icon: "ri-rocket-line",
        title: "Marketing Digital",
        description: "El marketing digital conecta marcas con su público ideal a través de medios digitales, construyendo notoriedad y transformando seguidores en clientes.",
    },
]

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="services" ref={ref}>
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Nuestros Servicios</h6>
          <h2>Optimiza el tiempo en la administración de tu empresa con</h2>
          <h2 className="highlight">nuestros mejores servicios</h2>
        </div>
        <div className="services__item-wrapper">
            {servicesData.map((i, idx) => (
                <Card key={`services__item-${idx}`} title={i.title} description={i.description} icon={i.icon} isInView={isInView} idx={idx} />
            ))}
        </div>
      </div>
    </section>
  );
};
