import React from 'react';
import Styles from './styles.css';


function AvatarHome() {
  return (
    <main id="avatar" className="avatar-container">
      <div className="avatar avatar--vertical">
        <img
          className="avatar__photo avatar__photo--xl"
          src="https://avatars2.githubusercontent.com/u/48595814?s=460&u=43698be9b8dddc470b07db6ee25b54c5d3b6eedc&v=4"
        />
        <div className="avatar__intro">
          <h4 className="avatar__name">Felipe Melo Moura</h4>
          <small className="avatar__subtitle">
            <strong id="devs" >Front End | Back End Developer
            <a className="link-destq" href="https://github.com/fmmMelo"> My Github</a></strong>
            <p>Aqui vamos embarcar em uma aventura que literalmente vai te tirar do chão, construindo seu próprio drone e de baixo custo! <a class="link-destq" href="docs/">Então vamos nessa...</a></p>
          </small>
        </div>
      </div>
    </main>
    
  );
}

export default AvatarHome;