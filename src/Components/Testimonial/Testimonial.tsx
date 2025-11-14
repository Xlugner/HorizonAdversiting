import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
import customer1 from '../../images/ava-1.jpg';
import customer2 from '../../images/ava-2.jpg';
import customer3 from '../../images/ava-3.jpg';
import { CustomerSlide } from './CustomerSlide';
import './testimonial.css';

const customerData = [
  {
    name: 'John Lee',
    description: `"¡No puedo recomendar a HorizonAdversiting lo suficiente! Como CEO de una gran corporación, al principio dudaba en trabajar con una agencia externa. Sin embargo, el equipo de HorizonAdversiting disipó rápidamente mis temores. Fueron profesionales, eficientes y, lo más importante, obtuvieron resultados. Su experiencia en marketing digital nos ayudó a aumentar nuestra presencia en línea y generar más leads que nunca. ¡Definitivamente seguiré utilizando HorizonAdversiting para todas mis necesidades de marketing en el futuro!"`,
    image: customer1,
    position: 'CEO, DreamMakers',
  },
  {
    name: 'Sarah Thompson',
    description: `"¡Estoy encantado de haber elegido a HorizonAdversiting como nuestra agencia de marketing! Desde el primer momento, se tomaron el tiempo para entender nuestros objetivos empresariales y desarrollar una estrategia personalizada. Su equipo siempre está disponible para resolver dudas y dar seguimiento, y han sido clave para aumentar el reconocimiento de nuestra marca y atraer más tráfico a nuestro sitio web. Gracias a su dedicación, hemos logrado hacer crecer nuestro negocio y llegar a nuevos clientes. ¡Recomiendo ampliamente a HorizonAdversiting a cualquier director que busque un partner de marketing confiable y efectivo!"`,
    image: customer2,
    position: 'CEO, WonderSon',
  },
  {
    name: 'Alexander Ramirez',
    description: "HorizonAdversiting destaca como la agencia de marketing más competente con la que he colaborado en mi carrera como Consejero Delegado. Su combinación de expertise profesional, enfoque creativo y extraordinaria dedicación ha generado un incremento notable en nuestras métricas de tráfico y conversión. Recomiendo sus servicios sin reservas para empresas que aspiren a la excelencia en marketing digital.",
    image: customer3,
    position: 'CEO, RamiTech',
  },
];

export const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="testimonial" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonios</h6>
          <h2>
            Confían en nosotros más de...
            <span className="highlight"> 76 clientes!</span>{' '}
          </h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            {customerData.map((i, idx) => (
              <CustomerSlide
                key={`slide-${idx}`}
                name={i.name}
                description={i.description}
                image={i.image}
                position={i.position}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
