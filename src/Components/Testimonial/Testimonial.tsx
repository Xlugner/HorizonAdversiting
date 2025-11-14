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
    name: 'Adrián C.',
    description: `"Desde que empecé con Horizon Advertising mis ventas subieron muchísimo. Yo mismo me sorprendí porque en pocas semanas se notó el cambio. Son gente seria y trabajan bien."`,
    image: customer1,
    position: 'Cliente',
  },
  {
    name: 'Daniel M.',
    description: `"De verdad, desde que empecé con Horizon Advertising mis publicaciones se ven mil veces mejor. Me ayudaron con todo sin complicarme. Súper agradecido."`,
    image: customer3,
    position: 'Cliente',
  },
  {
    name: 'Raquel S.',
    description: "Yo no sabía nada de marketing, pero ellos me guiaron súper fácil. Noté más mensajes y más movimiento en mis redes desde la primera semana.",
    image: customer2,
    position: 'Cliente',
  },
  {
    name: 'Javier L.',
    description: "Lo que me gusta de Horizon es que trabajan rápido y entienden lo que uno quiere sin dar tanta vuelta. Me han resuelto todo.",
    image: customer3,
    position: 'Cliente',
  },
  {
    name: 'Camila R.',
    description: "Con ellos me siento tranquila porque siempre están pendientes. Si necesito algo, les escribo y responden enseguida. Mi negocio se ve más profesional.",
    image: customer2,
    position: 'Cliente',
  },
  {
    name: 'Luis A.',
    description: "La verdad, pensé que era complicado esto de la publicidad, pero con Horizon ha sido fácil y los resultados se notan. Buen equipo.",
    image: customer3,
    position: 'Cliente',
  },
  {
    name: 'Andrea T.',
    description: "Yo los recomiendo porque trabajan bien, son sinceros y no te venden humo. Mis ventas subieron y eso es lo que importa.",
    image: customer2,
    position: 'Cliente',
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
            <span className="highlight"> 200 clientes!</span>{' '}
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
