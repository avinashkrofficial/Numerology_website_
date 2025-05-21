import React from 'react';

const Team = () => (
  <section id="team">
    <div className="heading-container">
      <h1 className="team-heading">Meet the Team</h1>
    </div>
    <div className="about-us">
      <div className="card-container">
        {[
          {
            name: 'Vanshika Vats',
            img: '/vanshika.jpg',
            linkedin: 'https://www.linkedin.com/in/vanshika-vats-213854323/',
          },
          {
            name: 'Ananyaa Gupta',
            img: '/ananyaa.jpg',
            linkedin: 'https://www.linkedin.com/in/ananyaa-gupta-496647341/',
          },
          {
            name: 'Avinash Kumar',
            img: '/Avinash.jpg',
            linkedin: 'https://www.linkedin.com/in/avinash-kumar-453a47214/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          },
          {
            name: 'Alankrit Shukla',
            img: '/allu.png',
            linkedin: 'https://www.linkedin.com/in/alankrit-shukla-19376a290/',
          },
        ].map((member, index) => (
          <div key={index} className="profile-card">
            <img src={member.img} alt={member.name} className="profile-img" />
            <div className="info">
              <h2>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  {member.name}
                </a>
              </h2>
              <p>Full Stack Developer</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
