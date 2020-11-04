import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

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
                zoom={13}
                style={{width: '100%', height: '100%'}}>
                    
                    <TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/titles/256/{z}/{x}/{y}@2x?acess_toke=${process.env.REACT_APP_TOKEN_MAPBOX}`}
                    /> */}

                </Map>
            </div>
    </div>
    )
}

export default ViewMap
