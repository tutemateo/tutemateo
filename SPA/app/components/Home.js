export function Home() {
  const $home = document.createElement("div");
  $home.classList.add("home");

  $home.innerHTML = `
<section class="home">
  
    <h2 class="home-title">Hi! I'm Tute</h2>
           <img class="profile-picture" src="./SPA/app/assets/yo.jpg" alt="Foto de Perfil">


        <div class="social-links">
          <a class="social-link" href="https://www.linkedin.com/in/francisco-mateo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="social-link" href="https://www.github.com/tutemateo" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a class="social-link" href="https://www.facebook.com/fj.mateo/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a class="social-link" href="https://www.instagram.com/tutemateo" target="_blank" rel="noopener noreferrer">Instagram</a>

          <!-- Agrega más enlaces a tus redes sociales -->
        </div>

        <div class="projects">
          <h2>Proyectos</h2>
          <a class="project-link" href="https://www.proyecto1.com/" target="_blank" rel="noopener noreferrer">Proyecto 1</a>
          <a class="project-link" href="https://www.proyecto2.com/" target="_blank" rel="noopener noreferrer">Proyecto 2</a>
          <a class="project-link" href="https://www.proyecto3.com/" target="_blank" rel="noopener noreferrer">Proyecto 3</a>
          <!-- Agrega más enlaces a tus proyectos -->
        </div>

</section>
  
  `;

  return $home;
}
