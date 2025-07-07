const projetosPersonalizados = [
  {
    nome: "React Shape",
    descricao: "Aplicação em React com foco em animações, interatividade e UI moderna.",
    link: "https://github.com/MauricioGoulartOliveira/ReactShape"
  },
  {
    nome: "Fitplace 2.0",
    descricao: "Sistema de gestão de academia com funcionalidades de login, cadastro e controle de planos.",
    link: "https://github.com/MauricioGoulartOliveira/fitplace-2.0"
  },
  {
    nome: "Systoque - Back-end 1.0",
    descricao: "API RESTful com Spring Boot para gerenciamento de estoque, vendas e produtos.",
    link: "https://github.com/MauricioGoulartOliveira/Systoque_back-end1.0"
  },
  {
    nome: "Banda Liverth",
    descricao: "Site institucional para banda de eventos, com galeria de fotos, vídeos e contatos.",
    link: "https://github.com/MauricioGoulartOliveira/Banda-Liverth"
  },
  {
    nome: "dsList - Backend",
    descricao: "API Java Spring Boot para listagem de jogos e integração com frontend React.",
    link: "https://github.com/MauricioGoulartOliveira/dsList-backend"
  }
];

const listaProjetos = document.getElementById("lista-projetos");

projetosPersonalizados.forEach(repo => {
  const div = document.createElement("div");
  div.classList.add("projeto");
  div.innerHTML = `
    <h3>${repo.nome}</h3>
    <p>${repo.descricao}</p>
    <a href="${repo.link}" target="_blank">Ver no GitHub</a>
  `;
  listaProjetos.appendChild(div);
});
