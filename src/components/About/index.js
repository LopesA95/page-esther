import React from 'react';
import './About.css'; // Importe o arquivo CSS
import cardImage from './card.png';
import elipsImage from './ellipse.svg';
import estherImage from './img.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className='about-descriptions'>
          <h2 className="about-title">Sobre mim</h2>
          <p className='about-text ' >Olá, meu nome é Esther Maia, especialista em UX/UI Designer com único objetivo de criar a experiência do usuário única e atrativa digitalmente .</p>
          <img src={cardImage} alt='' className='card-image'/>
        </div>
        <div className='images-container'>
          <img src={estherImage} alt='' className='esther-image' />
          <img src={elipsImage} alt='' className='elips-image'/>
        </div>
      </div>
    </div>
  );
};

export default About;
