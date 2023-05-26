export function Info() {
  const $info = document.createElement("div");
  $info.classList.add("info");
  $info.innerHTML = `
  <section id="personal-information">
   <img src="./SPA/app/assets/info.png" alt="info-png" class="img-info">
  
      <h2>Personal Information</h2>
      <p>Name: Francisco José, MATEO</p>
      <p>Date of birth: 25/05/1996</p>
      <p>Email: fmateo25596@gmail.com</p>
    </section>

    <section>
    <h2>About me</h2>
    <p>Studying and learning is one of my greatest pleasures, so I describe myself as a self-made person  when it comes to it.</p>
    <pq>In terms of work, I am a person who adapts to work situations and requirements, flexible for different areas. I like to work in groups as well as alone.</pq>
    <p>Now I’m looking to make my path into the world of programming, in which I’ve been working and studying for a few years.</p> 
    <p>I did some personal  projects and at the same time I worked for small companies as a front-end developer.</p>
    <p>The different jobs and areas in which I had experiences gave me the necessary experience to take a job with the responsibility it deserves. I am a punctual, dedicated and reliable person.</p>

    </section>

    <section>
      <h2>Experiencia Laboral</h2>
      <ul>
        <li>
          <h3>Front-End developer</h3>
          <p>2023</p>
          <p>Cargo: Freelancer</p>
          <p>Descripción: Front-End developer 
          Node.js / JavaScript - React.js.</p>
        </li>
          <h3>Quality Control (QA) </h3>
          <p>COSMOMACK SRL / 2022 - 2023 </p>
          <p>Cargo: Chemistry Technician</p>
          <p>Descripción: 
          Italia - Rímini, Emilia-Romagna (RN)
          <br> 
          Working as a quality control manager, following the manufacturing line, packaging and all the in-side aspects to guarantee the quality, efficiency and results of the final product.
          </p>
        </li>
        </li>
          <h3>Co-Founder Chemycal Business</h3>
          <p>VaperWave / 2017 - 2020 </p>
          <p>Cargo: Chemistry Technician</p>
          <p>Descripción: 
          Production & production management.
          Advertising/Sales - Google Ads, Facebook Ads, Instagram Ads.
          Community Manager.
          </p>
        </li>

         <li>
          <h3>E-Commerce developer</h3>
          <p>MyWatch / 2017 - 2019 </p>
          <p>Cargo: Front-End / Full Stack Dev</p>
          <p>Descripción: Design and front-end work of sales websites using HTML, CSS, JavaScript and WorldPress.
          Sales management and advertising with Google Ads & Facebook Ads.
          </p>
        </li>
        <!-- Repite el código anterior para cada experiencia laboral -->
      </ul>
    </section>

    <section>
      <h2>Educación</h2>
      <ul>
        <li>
          <h3>Técnico / Técnico Químico</h3>
          <p>Institución: EIS - FIQ - UNL</p>
          <p>Fecha de Graduación: 2015</p>
        </li>
        <li>
          <h3>FullStack Dev</h3>
          <p>Institución: JohnMircha Courses</p>
          <p>Fecha de Graduación: 2022</p>
        </li>
        <!-- Repite el código anterior para cada nivel educativo -->
      </ul>
    </section>

    <section>
      <h2>CERTIFICATIONS</h2>
      <ul>
      <li>C#  & .NET 6 - PLURALSIGTH - 2022 - 2023
      </li>
      <li>Full Stack Dev - JM Courses - 2020 - 2022
      HTML, CSS, JavaScript - Node.js - Express - MongoDB - MySQL - React.Js
      </li>
      <li>Data Analysis - Python - IEEE-ITBA - 2022
      Python - Libraries and Frameworks.
      </li>
      <li>Development & Programming - Platzi 2021
      HTML & CSS - JavaScript - Node.Js 
      </li>
      <li>Digital Marketing - Google 2021
      Marketing and Advertising.
      </li>
      <li>Web Development - Google 2020 - 2021
      HTML & CSS.
      </li>
      <li>Community Manager - Digital Marketing - 2019
      Facebook Ads, Google Ads, Instagram, Facebook, Twitter, Linkedin, Youtube.
      </li>
      </ul>
    </section>

    <section>
      <h2>Languages</h2>
      <ul>
        <li>Spanish (native)</li>
        <li>Italian </li>
        <li>English</li>
        <!-- Agrega más idiomas -->
      </ul>
    </section>

    <section>
    <h2>OTHER EXPERIENCES</h2>
    <p>I’ve been working + 5 years in shops as a seller & work manager.</p>

    </section>
  `;
  return $info;
}
