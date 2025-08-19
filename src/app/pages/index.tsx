import Head from 'next/head';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>My Profile Portfolio</title>
        <meta name="description" content="Portfolio of [Your Name]" />
        {/* Google Font Montserrat */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero / Intro Section */}
      <section id="intro" className="section text-center">
        <h1>[Your Name]</h1>
        <h2 style={{ color: '#DAC5A7' }}>
          Software Engineer, Data Analyst, Photographer
        </h2>
        <p>
          Combining data insights with creative imagery.{' '}
          <a href="#contact">Get in touch</a>.
        </p>
      </section>

      {/* About Me */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a software engineer and data analyst with a passion for
          photography and video. I enjoy extracting insights from data and
          creating visual stories through images.
        </p>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="section">
        <h2>Professional Experience</h2>
        <h3>Data Analyst at XYZ Corp</h3>
        <p>
          Worked on [X, Y, Z projects], leveraging Python, SQL, and visualization
          tools to drive business decisions.
        </p>
        <h3>Software Intern at ABC Inc</h3>
        <p>
          Assisted in developing internal tools using Next.js and React,
          improving data processing workflows.
        </p>
      </section>

      {/* Education & Qualifications */}
      <section id="education" className="section">
        <h2>Education & Qualifications</h2>
        <p>
          <strong>B.S. in Computer Science</strong>, Example University (2022)
        </p>
        <p>
          Relevant coursework: Data Structures, Machine Learning, Database
          Systems.
        </p>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li>Languages: JavaScript, TypeScript, Python, SQL</li>
          <li>Frameworks: Next.js, React, Node.js</li>
          <li>Tools: Git, Docker, Tableau</li>
          <li>Photography & Video Editing</li>
        </ul>
      </section>

      {/* Project Achievements */}
      <section id="projects" className="section">
        <h2>Project Achievements</h2>
        <p>
          <strong>Project A:</strong> Developed a web app for data visualization
          using Next.js and D3.js.
        </p>
        <p>
          <strong>Project B:</strong> Created a photo-sharing portfolio site
          with Node.js backend.
        </p>
        {/* Example embedded video */}
        <div style={{ margin: '2rem 0' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Project Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Gallery & Media Samples */}
      <section id="gallery" className="section">
        <h2>Gallery & Media Samples</h2>
        <p>
          A selection of photography work and visual media samples. (Images
          below are placeholders.)
        </p>
        <div className="gallery">
          <img src="/images/photo1.jpg" alt="Sample photography 1" />
          <img src="/images/photo2.jpg" alt="Sample photography 2" />
          <img src="/images/photo3.jpg" alt="Sample photography 3" />
        </div>
      </section>

      {/* Languages & Communication */}
      <section id="languages" className="section">
        <h2>Languages & Communication</h2>
        <ul>
          <li>English (Native)</li>
          <li>Spanish (Professional Working Proficiency)</li>
          <li>Swahili (Conversational)</li>
        </ul>
      </section>

      {/* Contact & References */}
      <section id="contact" className="section text-center">
        <h2>Contact & References</h2>
        <p>
          Email:{' '}
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </p>
        <p>
          LinkedIn:{' '}
          <a href="https://linkedin.com/in/yourprofile">yourprofile</a> | GitHub:{' '}
          <a href="https://github.com/yourusername">yourusername</a> | Twitter:{' '}
          <a href="https://twitter.com/yourhandle">@yourhandle</a>
        </p>
        <p>References available upon request.</p>
      </section>
    </div>
  );
};

export default Home;
