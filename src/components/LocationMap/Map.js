import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import Style from './styles.css';


function ViewMap()
{
    return(
    <div className="container-map">
            <div className="map-description">
                <h1>Lorem Inpsum</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quidem at voluptas libero ipsum culpa, rerum ullam aliquam fugit ab, ad animi minus beatae unde, adipisci numquam iste obcaecati nemo!</p>
            </div>

            <div className="view-map" >
                <Map 
                center={[-22.2089923, -54.7648979]} 
                zoom={14}
                style={{width: '100%', height: '100%'}}>
                    
                    {/* <TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    /> */}

                    <TileLayer 
                        url='https://api.mapbox.com/styles/v1/leefjs/ckh3pww19011k19o3zf72sv6c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGVlZmpzIiwiYSI6ImNrZ3gzcGFoeTAwY3Eycm9hNmNqeGlrNzcifQ.sLrT6sodhUnJOG-F4t5NzA'
                    />

                    <Marker 
                        position={[-22.2089923, -54.7648979]}                    
                    >
                        <Popup>

                            Instituto Federal de Mato Grosso do Sul - campus Dourados 
                            <img                      
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ifms.edu.br%2Fcampi%2Fcampus-dourados%2Fsobre%2Ffotos%2Ffotos-do-ifms-campus-dourados%2Ffachadanoite.jpg%2F%40%40images%2F3e66781b-bff3-4af3-9aa7-996e9c765989.jpeg&f=1&nofb=1"
                            />   
                        
                        </Popup>

                    </Marker>

                </Map>
            </div>
    </div>
    )
}

export default ViewMap
