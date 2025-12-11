import { useState, useEffect } from 'react'
import './App.css'
import foto from './assets/foto.jpg'
import foto2 from './assets/portt.PNG'
import foto3 from './assets/portt2.PNG'
import foto4 from './assets/portt3.PNG'
import foto5 from './assets/portt5.PNG'
import foto6 from './assets/portt6.PNG'
import foto7 from './assets/portt7.PNG'

function App() {


  // efeito do cursor luminoso
  useEffect(() => {
    const cursor = document.querySelector(".cursor-light");
    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = document.querySelector('.nav-links');

  function header() {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('show');
    });
  }








  return (
    <>
      {/* Cursor luminoso */}
      <div className="cursor-light"></div>

      {/* Navbar */}
      <div className='Topo'>
        <header>
          <h1>gabrielZS1.dev</h1>

          <nav className='nav'>
            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
              <li><a href="#">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projeto">Projetos</a></li>
              <li><a href="#cont">Contato</a></li>
            </ul>

            {/* Botão Hambúrguer */}
            <div
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>

          <div>
            <div className="social-icons">
              <a href='https://w.app/hr7awq'><i className='fa-brands fa-whatsapp'></i></a>
              <a href="https://github.com/gabrielZS1"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/gabriel-azevedo-b3a811378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://www.instagram.com/ogabriel.rh?igsh=c3BsbGQzY2YxY2Zj"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </header>
      </div>


      {/* Banner */}
      <div className='Banner'>
        <div className='textos'>


          <h1>Olá! Me chamo Gabriel 👋</h1>



          <div className='msg'>Web Developer</div> {/* Texto animado */}




          <h3>Desenvolvedor focado em criar interfaces modernas, rápidas e pensadas para melhorar a experiência do usuário.</h3>

          <a href="https://w.app/hr7awq" target="_blank">
            <button>Entre em contato</button>
          </a>


          <div class="social-box">
            <div class="social-icons">
              <a href='https://w.app/hr7awq'><i className='fa-brands fa-whatsapp'></i></a>
              <a href="https://github.com/gabrielZS1"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/gabriel-azevedo-b3a811378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://www.instagram.com/ogabriel.rh?igsh=c3BsbGQzY2YxY2Zj"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <img src={foto} alt="Foto" />

        

      </div>

      <div className='carrosa'>

            <div class="carousel-container">
              <div class="carousel-track">

                <div class="carousel-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"></img></div>
                <div class="carousel-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"></img></div>
                <div class="carousel-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"></img></div>
                <div class="carousel-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"></img></div>
                <div class="carousel-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"></img></div>
              

                <div class="carousel-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"></img></div>
                <div class="carousel-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"></img></div>
                <div class="carousel-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"></img></div>
                <div class="carousel-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"></img></div>
                <div class="carousel-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"></img></div>
              </div>
            </div>
      </div>


      {/* Sobre Mim */}

      <div class="conteudo-lado-a-lado">
        <div id='sobre' className='Sobre'>
          <h2 className='sobre-titulo'>Sobre Mim</h2>
          <div className='sobre-container'>

            <h3>
              Sou um Desenvolvedor Web Júnior apaixonado por criar experiências digitais envolventes e funcionais. Com conhecimentos em
              HTML, CSS, JavaScript e frameworks modernos, busco sempre entregar soluções digitais de alta qualidade. <br /> <br />
              Acredito que a tecnologia deve ser acessível e agregar valor aos usuários. Cada projeto em que trabalho é uma oportunidade de
              aprender, evoluir e contribuir de forma positiva para a comunidade de desenvolvedores.
            </h3>
          </div>

          <div className='tecnologias'>
            <h1>Skill & Tecnologias</h1>

            <div className='tec'>
              <h2>HTML5</h2>
              <h2>CSS3</h2>
              <h2>JavaScript</h2>
              <h2>React</h2>
              <h2>PHP</h2>
              <h2>C#</h2> <br />
              <h2>Python</h2>
              <h2>Sistema Responsivo</h2>
              <h2>Git</h2>
            </div>


          </div>

          <div className='brinc'>
            <h3>const developer = &#123;</h3>
            <p>name: 'Gabriel'</p>
            <p>função: 'Web Developer'</p>
            <p>paixão: 'Criar experiências web incriveis'</p>
            <h3>&#125; ;</h3>
          </div>
        </div>
      </div>


      {/* Projetos */}

<section id='projeto' class="secao-projetos">
  <h1>Meus Projetos</h1>

  <div class="container-cards">

    {/* CARD 1 */}
    <div class="card-projeto">
      <div class="projeto-imagem-container">
        <img src={foto6} class="projeto-imagem" />
      </div>

      <div class="projeto-conteudo">
        <h2 class="projeto-titulo">PizzariaDEV</h2>
        <p class="projeto-descricao">
          Sistema completo para pizzaria, desenvolvido com foco em praticidade e agilidade.
          Possui um sistema completo e uma interface moderna inspirada em apps de delivery.
        </p>

        <div class="projeto-tecnologias">
          <span class="tech-tag">HTML5</span>
          <span class="tech-tag">CSS3</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">TypeScript</span>
        </div>

        <a href="https://pizzariadev-full-stack-delight.vercel.app/" target="_blank" class="btn-repo">
          Ver Projeto
        </a>
      </div>
    </div>
    {/* CARD 2 */}

    <div class="card-projeto">
      <div class="projeto-imagem-container">
        <img src={foto7} class="projeto-imagem" />
      </div>

      <div class="projeto-conteudo">
        <h2 class="projeto-titulo">Manicure Elegance</h2>
        <p class="projeto-descricao">
          Site moderno para manicure, apresentando serviços, portfólio e informações da profissional.
          agendamento é feito de forma rápida e prática pelo WhatsApp.
        </p>

        <div class="projeto-tecnologias">
          <span class="tech-tag">HTML5</span>
          <span class="tech-tag">CSS3</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">TypeScript</span>
        </div>

        <a href="https://manicure-elegance.vercel.app/" target="_blank" class="btn-repo">
          Ver Projeto
        </a>
      </div>
    </div>



    {/* CARD 3 */}
    <div class="card-projeto">
      <div class="projeto-imagem-container">
        <img src={foto3} class="projeto-imagem" />
      </div>

      <div class="projeto-conteudo">
        <h2 class="projeto-titulo">Projeto PetShop</h2>
        <p class="projeto-descricao">
          Site de pet shop responsivo, desenvolvido em C# e ASP.NET, com funcionalidades dinâmicas,
          interface intuitiva e foco na experiência do usuário.
        </p>

        <div class="projeto-tecnologias">
          <span class="tech-tag">Aps.net</span>
          <span class="tech-tag">C#</span>
          <span class="tech-tag">HTML5</span>
          <span class="tech-tag">CSS3</span>
          <span class="tech-tag">JavaScript</span>
        </div>

        <a href="https://github.com/gabrielZS1/PetCenter" target="_blank" class="btn-repo">
          Ver Repositório
        </a>
      </div>
    </div>

    {/* CARD 4 */}
    <div class="card-projeto">
      <div class="projeto-imagem-container">
        <img src={foto4} class="projeto-imagem" />
      </div>

      <div class="projeto-conteudo">
        <h2 class="projeto-titulo">E-Commerce completo de Black Friday</h2>
        <p class="projeto-descricao">
          Projeto de e-commerce em PHP para Black Friday, com cadastro de produtos, gerenciamento
          de promoções e interface intuitiva para exibição das ofertas.
        </p>

        <div class="projeto-tecnologias">
          <span class="tech-tag">PHP</span>
          <span class="tech-tag">MySQL</span>
          <span class="tech-tag">HTML5</span>
          <span class="tech-tag">CSS3</span>
        </div>

        <a href="https://github.com/gabrielZS1/BlackFriday" target="_blank" class="btn-repo">
          Ver Repositório
        </a>
      </div>
    </div>

    {/* CARD 5 */}
    <div class="card-projeto">
      <div class="projeto-imagem-container">
        <img src={foto2} class="projeto-imagem" />
      </div>

      <div class="projeto-conteudo">
        <h2 class="projeto-titulo">Portfólio</h2>
        <p class="projeto-descricao">
          Portfólio responsivo, focado em performance, com HTML semântico e JavaScript puro
          para interações dinâmicas e navegação fluida.
        </p>

        <div class="projeto-tecnologias">
          <span class="tech-tag">React</span>
          <span class="tech-tag">HTML5</span>
          <span class="tech-tag">CSS3</span>
          <span class="tech-tag">JavaScript</span>
          <span class="tech-tag">Git</span>
        </div>

        <a href="https://github.com/gabrielZS1/Portfolio-gabrielZS1" target="_blank" class="btn-repo">
          Ver Repositório
        </a>
      </div>
    </div>

    {/* CARD 6 */}
    <div class="card-projeto">
      <div class="projeto-imagem-container">
        <img src={foto5} class="projeto-imagem" />
      </div>

      <div class="projeto-conteudo">
        <h2 class="projeto-titulo">Projeto loja</h2>
        <p class="projeto-descricao">
          Loja online interativa desenvolvida com HTML, CSS e JavaScript,
          com layout moderno e navegação intuitiva para melhorar a experiência do usuário.
        </p>

        <div class="projeto-tecnologias">
          <span class="tech-tag">JavaScript</span>
          <span class="tech-tag">HTML5</span>
          <span class="tech-tag">CSS3</span>
        </div>

        <a href="https://projeto-dev-club-story.vercel.app/" target="_blank" class="btn-repo">
          Ver Projeto
        </a>
      </div>
    </div>

  </div>
</section>







      {/* Contato */}
      <div id='cont' class="contato-section">

        <h2 class="contato-titulo">Contato</h2>



        <div class="contato-container">

          <div class="contato-info">

            <ul class="contact-list">
              <p class="contato-subtitulo">Entre em contato comigo! Respondo o mais rápido possível.</p>
              <li><i class="fa-solid fa-envelope"></i> gabrielazevedops@gmail.com</li>
              <li><i class="fa-solid fa-phone"></i> (11) 98845-6659</li>
              <li><i class="fa-solid fa-location-dot"></i> São Paulo, SP</li>
            </ul>

            <div class="social-box">
              <div class="social-icons">
                <a href='https://w.app/hr7awq'><i className='fa-brands fa-whatsapp'></i></a>
                <a href="https://github.com/gabrielZS1"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/gabriel-azevedo-b3a811378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/ogabriel.rh?igsh=c3BsbGQzY2YxY2Zj"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

          </div>

          <form class="contato-form" action="mailto:gabrielazevedops@gmail.com" method="POST" enctype="text/plain">
            <input type="text" name='nome' placeholder="Seu Nome" required></input>
            <input type="email" name='email' placeholder="Seu Email" required></input>
            <textarea name='mensagem' placeholder="Sua Mensagem" required></textarea>
            <button type="submit">Enviar Mensagem</button>
          </form>


        </div>

      </div>

      
      <footer class="footer">
          <p>© Gabriel 2025. Criado com amor e muita dedicação.</p>
      </footer>



    </>
  )
}


export default App
