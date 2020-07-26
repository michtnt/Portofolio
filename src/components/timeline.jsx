import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Junior Software Developer <span>Mar 2020 - Present</span></h2>
                        <p> I use React.js, React Native, MongoDB, Node.js, Python for tests and 
                          I need to learn how to use Angular.js and AWS. In this role, I assist the Development Manager 
                          with all aspects of software design and coding, writing and maintaining code,
                          working on bug fixes and new features, gathering information from consumers 
                          about program functionality, conducting development tests and etc.
                        </p>
                      </div>
                    </div>
                  </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer Intern <span>Jan 2020 - Mar 2020</span></h2>
                        <p>During my internship period, I learned a lot about React.js and React Native. 
                          I Developed an admin web portal for the support team using React.js and integrate front-end and back-end code.
                          In addition, I also developed a desktop version of Bookipi Invoice on invoice documents, 
                          invoice details and the basic functionality of the application using React.js (the development is taken by the lead developer afterwards).
                          I also Design a mobile app prototype for Bookipi Expense Tracker with Adobe XD and develop a pilot version of Bookipi Expense 
                          Tracker mobile app prototype using React Native.
                        </p>
                      </div>
                    </div>
                  </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Teacher Asssitant <span>Feb 2020 - Jul 2020</span></h2>
                        <p>In this role, I worked as a casual teacher assistant 
                          to teach kids the base knowledge of coding and improve their logical thinking.
                        </p>
                      </div>
                    </div>
                  </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Peer Tutor <span>Jul 2019 - Jul 2020</span></h2>
                        <p>In this role, I assist students as a Peer Tutor on 
                          Application Programming subject. The subject requires 
                          students to practice object-oriented programming 
                          using Java and MVC pattern along with Java GUI. In addition,
                          I also tutored students in Web Systems subject. The subject 
                          requires students to practice Unix commands and build a website using HTML and CSS.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Peer Mentor <span>Jul 2019 - Apr 2020</span></h2>
                        <p>I am responsible at providing support, advice and guidance
                          to international students to help them settle down in Sydney and provide
                          learning support to those struggling to understand IT related subjects.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate at UTS <span>2019-2021</span></h2>
                        <p>I am pursuing my Bachelor of Science in IT degree with Enterprise Systems Development major. During this period, 
                          I joined Programming Society and Women in Engineering and IT (WiEIT) to network and learn new stuff. In addition,
                          my team got second place in UTS Programming Society's annual hackathon [Apr 2019].
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Diploma of IT at UTS Insearch <span>2018-2019</span></h2>
                        <p>
                          I am pursuing my Diploma of IT degree. During this period, 
                          I have received Dean's Merit Prize Award [May 2018] for outstanding academic performance, 
                          Outstanding Graduate Prize [July 2019] for receiving highest overall GPA (10.0/10.0) 
                          and received a Future Leaders Scholarship [Jan 2019].
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>High School Diploma at SMA Sutomo 1 <span>2015-2018</span></h2>
                        <p>I took the science major on my high school, and I developed a lot of interests in Chemistry. Originally, I was going to take a Chemical Engineering major but I changed my mind and took IT major instead (didn't regret anything).</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
