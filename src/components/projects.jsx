import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/additify.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://github.com/michtnt/Additify">
                          Additify
                        </a>
                      </h3>
                      <span>Mobile Application</span>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/michtnt/Additify">
                            <i className="icon-github" />
                          </a>
                        </span>
                        <span>
                          <a>ReactNative</a>
                        </span>
                        <span>
                          <a>TesseractOCR</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/cookbook.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://github.com/michtnt/Cook-Book">
                          Cook-Book
                        </a>
                      </h3>
                      <span>Mobile Application</span>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/michtnt/Cook-Book">
                            <i className="icon-github" />
                          </a>
                        </span>
                        <span>
                          <a>ReactNative</a>
                        </span>
                        <span>
                          <a>MongoDB</a>
                        </span>
                        <br />
                        <span>
                          <a>Node.js</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/melbourne.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://youtu.be/r6iGIZ8Tg3w">Melbourne</a>
                      </h3>
                      <span>Videography and Video Editing</span>
                      <p className="icon">
                        <span>
                          <a href="https://youtu.be/r6iGIZ8Tg3w">
                            <i className="icon-youtube" />
                          </a>
                        </span>
                        <span>
                          <a>Final-Cut-Pro</a>
                        </span>
                        <span>
                          <a>Shot-on-iPhone7</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
          </div>
        </section>
      </div>
    );
  }
}
