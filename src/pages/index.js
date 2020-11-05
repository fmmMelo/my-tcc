import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import AvatarHome from '../components/AvatarHome/AvatarHome';
import Topicos from '../components/TopicosHome/TopicoHome';
import ViewMap from '../components/LocationMap/Map';


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} | Drone de Baixo Custo`}
      description="">
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

    <ViewMap/>
      

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
