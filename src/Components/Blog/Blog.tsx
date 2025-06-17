import { useInView } from 'framer-motion';
import { useRef } from 'react';
import articleThumbnail from '../../images/article.png';
import caseStudyThumbnail from '../../images/case-study.png';
import videoThumbnail from '../../images/video.png';
import { Post } from './Post';
import './blog.css';

const blogData = [
  {
    title: 'Video',
    category: 'Marketing',
    description: 'En este video aprenderás cómo..',
    thumbnail: videoThumbnail,
    link: '#',
  },
  {
    title: 'Análisis de Caso',
    category: 'SEO',
    description:
      "Acabas de escribir un artículo. Y crees que es bastante bueno. Pero, ¿está a la altura para competir con los millones de otros artículos en el índice de Google sobre el mismo tema? En este post...",
    thumbnail: caseStudyThumbnail,
    link: '#',
  },
  {
    title: 'Articulo',
    category: 'Diseño',
    description: 'Aquí encontrarás los conceptos básicos...',
    thumbnail: articleThumbnail,
    link: '#',
  },
];

export const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="blog" className="blog" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="blog__top-content">
          <h6 className="subtitle">Nuestro Blog</h6>
          <h2>
            Quieres saber mas,explora!!
            <span className="highlight"> Publicaciones Recientes</span>
          </h2>
        </div>
        <div className="blog__wrapper">
          {blogData.map((i, idx) => (
            <Post
              key={`BlogPost-${idx}`}
              title={i.title}
              category={i.category}
              description={i.description}
              thumbnail={i.thumbnail}
              link={i.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
