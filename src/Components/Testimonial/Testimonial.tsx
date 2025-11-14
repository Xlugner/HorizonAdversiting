import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
import customer1 from '../../images/customer1.jpeg';
import customer2 from '../../images/customer2.jpeg';
import customer3 from '../../images/customer3.jpeg';
import customer4 from '../../images/customer4.jpeg';
import customer5 from '../../images/customer5.jpeg';
import customer6 from '../../images/customer6.jpeg';
import customer7 from '../../images/customer7.jpeg';
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
    image: customer4,
    position: 'Cliente',
  },
  {
    name: 'Camila R.',
    description: "Con ellos me siento tranquila porque siempre están pendientes. Si necesito algo, les escribo y responden enseguida. Mi negocio se ve más profesional.",
    image: customer5,
    position: 'Cliente',
  },
  {
    name: 'Luis A.',
    description: "La verdad, pensé que era complicado esto de la publicidad, pero con Horizon ha sido fácil y los resultados se notan. Buen equipo.",
    image: customer7,
    position: 'Cliente',
  },
  {
    name: 'Andrea T.',
    description: "Yo los recomiendo porque trabajan bien, son sinceros y no te venden humo. Mis ventas subieron y eso es lo que importa.",
    image: customer6,
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
