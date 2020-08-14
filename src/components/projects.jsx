import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/fastcoverletter.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/tanoto-the-explorer/Fast-Cover-Letter">Fast Cover Letter</a></h3>
											<span>Short Program (Possibly AI integration in the future.)</span>
											<p className="icon">
												<span><a href="https://github.com/tanoto-the-explorer/Fast-Cover-Letter"><i className="icon-github" /></a></span>
												<span><a>Python</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/chemtracker.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/tanoto-the-explorer/Additify">Additify</a></h3>
											<span>Mobile Application</span>
											<p className="icon">
												<span><a href="https://github.com/tanoto-the-explorer/Additify"><i className="icon-github" /></a></span>
												<span><a>ReactNative</a></span>
												<span><a>TesseractOCR</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/cookbook.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/tanoto-the-explorer/Cook-Book">Cook-Book</a></h3>
											<span>Mobile Application</span>
											<p className="icon">
												<span><a href="https://github.com/tanoto-the-explorer/Cook-Book"><i className="icon-github" /></a></span>
												<span><a>ReactNative</a></span>
												<span><a>MongoDB</a></span>
												<br />
												<span><a>Node.js</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/madmama.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/tanoto-the-explorer/Mad-Mama">Mad Mama</a></h3>
											<span>Game</span>
											<p className="icon">
												<span><a href="https://github.com/tanoto-the-explorer/Mad-Mama"><i className="icon-github" /></a></span>
												<span><a>Java</a></span>
												<span><a>Processing</a></span>
												<br />
												<span><a>2-People-Project</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/melbourne.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://youtu.be/r6iGIZ8Tg3w">Melbourne</a></h3>
											<span>Videography and Video Editing</span>
											<p className="icon">
												<span><a href="https://youtu.be/r6iGIZ8Tg3w"><i className="icon-youtube" /></a></span>
												<span><a>Final-Cut-Pro</a></span>
												<span><a>Shot-on-iPhone7</a></span>
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
    )
  }
}
