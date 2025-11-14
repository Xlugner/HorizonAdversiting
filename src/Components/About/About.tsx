import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImg from '../../images/imageAbout.jpeg';
import { ChoseUs } from './ChoseUs';
import './about.css';

const chooseData = [
  {
    icon: 'ri-settings-2-line',
    title: 'Experiencia y Compromiso',
    description:
      'Con tres años de experiencia en el sector, nuestro equipo combina conocimiento, pasión y actualización constante para ofrecer resultados de alto nivel. Nos mantenemos al día con las últimas tendencias y tecnologías para garantizar que cada proyecto no solo cumpla, sino que supere las expectativas de nuestros clientes.',
  },
  {
    icon: 'ri-team-line',
    title: 'Enfoque Personalizado',
    description:
      'Cada negocio tiene su propia historia, metas y desafíos. Por eso, trabajamos de forma cercana y personalizada, entendiendo tus necesidades para diseñar soluciones que realmente impulsen tu crecimiento. Creemos que la clave del éxito está en escuchar, planificar y crear contigo, no para ti.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Soporte 24/7',
    description:
      'Sabemos que la confianza se construye con atención y compromiso. Por eso, ofrecemos un servicio de atención continua las 24 horas, los 7 días de la semana, asegurándonos de que siempre tengas nuestro apoyo cuando lo necesites. Nuestro objetivo es que cada cliente se sienta acompañado, valorado y plenamente satisfecho con nuestro trabajo.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">¿Por qué elegirnos?"</h6>
            <h2>Especialista en asesoramiento a clientes sobre</h2>
            <h2 className="highlight">desafíos financieros</h2>
            <p className="description about__content-desc">
              En nuestra compañía, entendemos que enfrentar desafíos financieros puede ser abrumador.
            Por eso ofrecemos asesoramiento experto y orientación personalizada para ayudarle 
            a tomar decisiones informadas y alcanzar sus metas económicas.
            </p>
            <div className="choose__us-item-wrapper">
              {chooseData.map((i, idx) => (
                <ChoseUs
                  icon={i.icon}
                  title={i.title}
                  description={i.description}
                  key={`choose__us-${idx}`}
                />
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="about-us" />
          </div>
        </div>
      </div>
    </section>
  );
};
