import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import darkThemeHeroImg from '../../images/hero-img.png';
import lightThemeHeroImg from '../../images/light-hero-img.jpg';
import './hero.css';

interface Props {
  theme: string;
}

export const Hero: FC<Props> = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="hero__section" id="home" ref={ref}>
      <div className="container">
        <div className="hero__wrapper">
          <div
            className="hero__content"
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            <div>
              <h2>Donde se Crea todo Perfecto</h2>
              <h2>Productos Digitales Para</h2>
              <h2 className="highlight">Impulsar Tu Marca</h2>
            </div>
            <p className="description">
              Horizon Adversiting es una agencia de marketing digital que ayuda
            a las empresas a crecer en línea mediante servicios como SEO, 
            marketing en redes sociales y publicidad PPC. 
            Estamos comprometidos con la innovación y ofrecemos 
            estrategias orientadas a resultados para nuestros clientes.
            </p>
            <div className="hero__btns">
            <a href="#paquetes" className="primary__btn">
            Empiece Ahora
            </a>
            <a href="#about" className="secondary__btn">Sobre Nosotros</a>
            </div>
          </div>
          <div className="hero__img">
            <img
              src={
                theme === '' ? darkThemeHeroImg : lightThemeHeroImg
              }
              alt="hero-img"
              style={{
                transform: isInView ? 'none' : 'translateX(100%)',
                opacity: isInView ? 1 : 0,
                transition: 'all 1s ease-out 0.5s',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
