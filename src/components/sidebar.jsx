import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/photo.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Michelle Tanoto</a></h1>
              <span className="email"><i className="icon-mail"></i> michelletanotoo@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.youtube.com/channel/UC7qnwX8U8_AsNO2-bJvS6Mw?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="icon-youtube" /></a></li>
                <li><a href="https://www.instagram.com/tanoto.mich/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/michelle-tanoto-8a2732181/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/tanoto-the-explorer" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-wine" aria-hidden="true"></i><br></br>
              </small></p>
              <p><small>
                Software Developer, Academic Tutor, UI/UX Enthusiast and Videographer.
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}