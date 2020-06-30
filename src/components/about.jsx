import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Base Information</h2>
                    <p>
                    I am an undergraduate student studying Bachelor of Science in Information Technology majoring in Enterprise Systems Development at the University of Technology Sydney.
                    I often learn new stuff and play games in my spare time (sometimes travelling). Although I want to be a great developer, I love teaching too, so I aim to be a great teacher in the future. 
                    For me, best experience as a person in tech is I got to meet new people with diverse background and help people with their bugs (this is my hidden skill)!
                    </p>
                    <p>
                    I am open to new opportunities, and I am available to work remotely/Sydney-based. 
                    Hit me up if you have any projects you want to discuss with me or simply grabbing a coffee!                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web & Mobile Apps Development </h3>
                    <p>Experienced in building websites with React.js and mobile applications with React Native.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-book2" />
                </span>
                <div className="desc">
                    <h3>Teaching / Tutoring</h3>
                    <p>Experienced in teaching kids and adults on IT subjects, programming, UI/UX design, etc.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Backend Development</h3>
                    <p>Experienced in coding at backend with Node.js, MongoDB, SQL and Python to conduct tests.</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>UI/UX Design</h3>
                    <p>Experienced in designing websites and mobile applications UI/UX with Adobe XD and Figma.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-video2" />
                </span>
                <div className="desc">
                    <h3>Videography and Video Editing</h3>
                    <p>Experienced in shooting and editing videos with Final Cut Pro. I am a freelance videographer for commercial and events during highschool.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-clock3" />
                </span>
                <div className="desc">
                    <h3>Time and Task Management</h3>
                    <p>In my opinion, this is the best soft skills I have. I am very good at managing my time at get my task done before the setted deadline.</p>
                </div>
                </div>
            </div>
           
            </div>
        </div>
        </section>
      </div>
    )
  }
}
