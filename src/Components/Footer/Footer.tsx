import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './footer.css';
export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const year = new Date().getFullYear();
  const quickLinks = [
    {
      name: 'Solutions',
      content: [
        {
          path: '#',
          display: 'Marketing',
        },
        {
          path: '#',
          display: 'Analytics',
        },
        {
          path: '#',
          display: 'Ecommerce',
        },
      ],
    },
    {
      name: 'Support',
      content: [
        {
          path: '#',
          display: 'Pricing',
        },
        {
          path: '#',
          display: 'Documentation',
        },
        {
          path: '#',
          display: 'Guides',
        },
      ],
    },
    {
      name: 'Company',
      content: [
        {
          path: '#',
          display: 'About',
        },
        {
          path: '#',
          display: 'Jobs',
        },
        {
          path: '#',
          display: 'Blog',
        },
      ],
    },
  ];
  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer__wrapper">
          <div
            className="footer__logo"
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            <h2>Horizon Adversiting</h2>
            <p className="description footer__desc">Grow with us</p>
            <p className="small__text description">
              Agencia de Publicidad 
              Emprende y crece con nosotros
            </p>
          </div>
          <div
            className="footer__quick-links-wrapper"
            style={{
              transform: isInView ? 'none' : 'translateX(100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            {quickLinks.map((i, idx) => (
              <div key={idx} className="footer__quick-links">
                <h3 className="quick__links-title">{i.name}</h3>
                <ul className="quick__links">
                  {i.content.map((link, idx) => (
                    <li
                      key={`link-${idx}`}
                      className="quick__link-item"
                    >
                      <a key={idx} href={link.path}>
                        {link.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="copyright">
          Copyright© {year}, developed by{' '}
          <a href="https://www.instagram.com/horizon_adversiting/">HorizonAdversiting</a>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
