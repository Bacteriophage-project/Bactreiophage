import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/services.css';
import genome from '../assets/gemone-fetching.png'
import amr from '../assets/amr.webp'
import phage from '../assets/phage.jpg'
import heatmap from '../assets/heat_map.jpg'
import annotation from '../assets/annotation.png'
import save from '../assets/save.png'

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    title: 'Genome Fetching',
    description: 'Fetch genome data from NCBI using BioProject numbers.',
    image: genome,
  },
  {
    title: 'AMR Detection',
    description: 'Identify antimicrobial resistance genes with ResFinder.',
    image: amr,
  },
  {
    title: 'Phage-Host Visualization',
    description: 'Visualize interactions between phages and bacterial hosts.',
    image: phage,
  },
  {
    title: 'Heatmap Reports',
    description: 'Generate heatmaps for resistance patterns.',
    image: heatmap,
  },
  {
    title: 'Genome Annotation',
    description: 'Analyze and annotate genomic features.',
    image: annotation,
  },
  {
    title: 'Export & Reporting',
    description: 'Download results in PDF, CSV, HTML.',
    image: save,
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section className="services-vertical-section">
      <h1 className="vertical-heading">Our Core Services</h1>
      <div className="vertical-services-container">
        {servicesList.map((service, index) => (
          <div className="vertical-service-card" key={index} ref={(el) => (cardsRef.current[index] = el)}>
            <img src={service.image} alt={service.title} className="vertical-card-image" />
            <div className="vertical-card-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
            </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Services;


