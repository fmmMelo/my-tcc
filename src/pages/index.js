import React from 'react';
import Iframe from "react-iframe";

import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

import AvatarHome from '../components/AvatarHome/AvatarHome';
import Topicos from '../components/TopicosHome/TopicoHome';



function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Crie seu próprio drone com arduino">
      <header id="header" className={clsx('hero shadow--lw', styles.heroBanner)}>

        <div className="container">
          <div className="row">

                  <div className="col" >
                    <h1 className="hero__title">Construa com toda a tecnologia</h1>
                    <p className="hero__subtitle">Crie seu próprio Drone através desse projeto, economizando mais para você</p>
    
                    <Link to="/docs" >
                        <button className="button button--secondary button--outline button--lg">
                          Começa agora
                        </button>     
                    </Link>
                  </div>
          </div>
        </div>

      </header>


  <main id="description" className="description-text">   
    <div className="container">
      <div className="text-description">
        <h1>Quem somos ?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione dignissimos iure? Magnam 
          omnis cumque dolorem pariatur ducimus porro quia eaque autem cupiditate perspiciatis, deserunt officiis,
          dolor quasi aliquam eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione dignissimos iure? Magnam 
          omnis cumque dolorem pariatur ducimus porro quia eaque autem cupiditate perspiciatis, deserunt officiis,
          dolor quasi aliquam eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione dignissimos iure? Magnam 
          omnis cumque dolorem pariatur ducimus porro quia eaque autem cupiditate perspiciatis, deserunt officiis,
          dolor quasi aliquam eos?  
        </p>
      </div>
    </div>
  </main>
    
    <Topicos/>

    <AvatarHome />

    <div className="container-map">
            <div className="map-description">
                <h1>Lorem Inpsum</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quidem at voluptas libero ipsum culpa, rerum ullam aliquam fugit ab, ad animi minus beatae unde, adipisci numquam iste obcaecati nemo!</p>
            </div>

            <div className="view-map" >
              <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846.9063629594639!2d-54.76417021744222!3d-22.20922225194405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a8cb0944a387%3A0xb5931d768f1f95fe!2sInstituto%20Federal%20de%20Mato%20Grosso%20do%20Sul%20(IFMS)!5e0!3m2!1spt-BR!2sbr!4v1604646072822!5m2!1spt-BR!2sbr" 
                width="600" 
                height="450" 
                frameborder="0" 
                style="border:0;" 
                allowfullscreen="" a
                ria-hidden="false" 
                tabindex="0"
              />
            </div>
        
    </div>
      

      <footer  className="footer">
        <a href="#header" ><img class="logo-footer" src="./img/logo.png" alt=""/></a>
        <div className="container container--fluid">
          <div className="footer__links">
         
            <a className="footer__link-item" href="#description">
              Quem somos?
            </a>

            <Link to="/docs" >
              <a className="footer__link-item" href="docs/">
                Documentação
              </a>   
            </Link> 

            <Link to="/blog" >      
              <a className="footer__link-item" href="blog">
                Blog
              </a>
            </Link>
            <a className="footer__link-item" href="#url">
              Github
            </a>
          </div>
        </div>
      </footer>


    </Layout>
  );
}

export default Home;
