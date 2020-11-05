import React from 'react';
import Styles from './styles.css';


function Topicos() {
    return(
        <main className="container" >
            <div id="topic1" className="sub-topics">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Farduino-icon-17.png&f=1&nofb=1" alt="arduino-img"/>
                <div id="text1" className="text-topic">
                    <h1>Arduino</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempora ratione dignissimos iure? Magnam omnis cumque 
                        dolorem pariatur ducimus porro quia eaque autem cupiditate 
                        perspiciatis, deserunt officiis, dolor quasi aliquam eos?Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione
                        dignissimos iure? Magnam omnis cumque dolorem pariatur ducimus porro 
                        quia eaque autem cupiditate perspiciatis, deserunt officiis, dolor quasi 
                        aliquam eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora 
                        atione dignissimos iure? Magnam omnis cumque dolorem pariatur ducimus porro
                        quia eaque autem cupiditate perspiciatis, deserunt officiis, dolor quasi aliquam 
                    </p>
                </div>
               

            </div>

            <div className="sub-topics">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.render.com.br%2Fwp-content%2Fuploads%2F2015%2F08%2FZortrax-M200.png&f=1&nofb=1" alt="arduino-img"/>
                
                <div  className="text-topic">
                    <h1>Impressão 3D</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempora ratione dignissimos iure? Magnam omnis cumque 
                        dolorem pariatur ducimus porro quia eaque autem cupiditate 
                        perspiciatis, deserunt officiis, dolor quasi aliquam eos?Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione
                        dignissimos iure? Magnam omnis cumque dolorem pariatur ducimus porro 
                        quia eaque autem cupiditate perspiciatis, deserunt officiis, dolor quasi 
                        aliquam eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora 
                        ratione dignissimos iure? Magnam omnis cumque dolorem pariatur ducimus porro
                        uia eaque autem cupiditate perspiciatis, deserunt officiis, dolor quasi aliquam eos?
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Topicos