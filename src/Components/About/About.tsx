import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImg from '../../images/about-us.jpg';
import { ChoseUs } from './ChoseUs';
import './about.css';

const chooseData = [
  {
    icon: 'ri-settings-2-line',
    title: 'Experience and Expertise',
    description:
      'Our team has over a decade of experience in the industry, and we pride ourselves on staying up-to-date with the latest developments and trends. We have the expertise to deliver high-quality work that meets your specific needs and exceeds your expectations.',
  },
  {
    icon: 'ri-team-line',
    title: 'Personalized Approach',
    description:
      'We understand that every client is unique, which is why we take a personalized approach to every project. We take the time to understand your goals, objectives, and challenges, and we work closely with you to develop a customized solution that works for your business.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7 Hours support',
    description:
      'At our company, we believe that great customer service is essential to building long-term relationships with our clients. We are committed to providing exceptional service, and we always go above and beyond to ensure that our clients are satisfied with our work.',
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
