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

  `;
  return $info;
}
