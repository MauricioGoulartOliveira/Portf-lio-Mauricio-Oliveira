// Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1000);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeToggle.checked = true;
  }
}

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// Scroll Behavior for Navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Skills Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and panes
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    // Add active class to clicked button and corresponding pane
    btn.classList.add('active');
    tabPanes[index].classList.add('active');
  });
});

// Projects Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    
    // Filter projects
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Animate on Scroll (AOS) Initialization
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Current Year in Footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Projects Data
const projetosPersonalizados = [
  {
    nome: "React Shape",
    descricao: "Aplicação em React com foco em animações, interatividade e UI moderna.",
    link: "https://github.com/MauricioGoulartOliveira/ReactShape",
    imagem: "assets/projects/react-shape.jpg",
    tags: ["React", "JavaScript", "UI/UX"],
    categoria: "frontend"
  },
  {
    nome: "Fitplace 2.0",
    descricao: "Sistema de gestão de academia com funcionalidades de login, cadastro e controle de planos.",
    link: "https://github.com/MauricioGoulartOliveira/fitplace-2.0",
    imagem: "assets/projects/fitplace.jpg",
    tags: ["React", "Spring Boot", "Full Stack"],
    categoria: "fullstack"
  },
  {
    nome: "Systoque - Back-end 1.0",
    descricao: "API RESTful com Spring Boot para gerenciamento de estoque, vendas e produtos.",
    link: "https://github.com/MauricioGoulartOliveira/Systoque_back-end1.0",
    imagem: "assets/projects/systoque.jpg",
    tags: ["Java", "Spring Boot", "API"],
    categoria: "backend"
  },
  {
    nome: "Banda Liverth",
    descricao: "Site institucional para banda de eventos, com galeria de fotos, vídeos e contatos.",
    link: "https://github.com/MauricioGoulartOliveira/Banda-Liverth",
    imagem: "assets/projects/liverth.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    categoria: "frontend"
  },
  {
    nome: "dsList - Backend",
    descricao: "API Java Spring Boot para listagem de jogos e integração com frontend React.",
    link: "https://github.com/MauricioGoulartOliveira/dsList-backend",
    imagem: "assets/projects/dslist.jpg",
    tags: ["Java", "Spring Boot", "REST"],
    categoria: "backend"
  },
  {
    nome: "Automação de Dados",
    descricao: "Scripts Python para automação de processos e análise de dados com Excel.",
    link: "#",
    imagem: "assets/projects/automation.jpg",
    tags: ["Python", "Excel", "Automação"],
    categoria: "tools"
  }
];

// Load Projects
const listaProjetos = document.getElementById('lista-projetos');

projetosPersonalizados.forEach(projeto => {
  const div = document.createElement('div');
  div.classList.add('project-card');
  div.setAttribute('data-category', projeto.categoria);
  div.setAttribute('data-aos', 'fade-up');
  
  div.innerHTML = `
    <img src="${projeto.imagem}" alt="${projeto.nome}" class="project-image">
    <div class="project-content">
      <h3 class="project-title">${projeto.nome}</h3>
      <p class="project-description">${projeto.descricao}</p>
      <div class="project-tags">
        ${projeto.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${projeto.link}" target="_blank" class="project-link">
          <i class="fab fa-github"></i> Ver Projeto
        </a>
      </div>
    </div>
  `;
  
  listaProjetos.appendChild(div);
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    
    // Here you would typically send the form data to a server
    // For demo purposes, we'll just log it and show an alert
    const formValues = Object.fromEntries(formData.entries());
    console.log('Form submitted:', formValues);
    
    alert('Obrigado pela sua mensagem! Entrarei em contato em breve.');
    this.reset();
  });
}

// Download CV Button
const downloadCvBtn = document.querySelector('.download-cv');
if (downloadCvBtn) {
  downloadCvBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // In a real scenario, you would link to your actual CV file
    alert('Download do CV iniciado!');
    // window.location.href = 'path-to-your-cv.pdf';
  });
}