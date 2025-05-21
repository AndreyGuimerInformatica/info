// Função para atualizar o relógio a cada segundo
function atualizarRelogio() {
  const relogio = document.getElementById('relogio');
  if (!relogio) return;

  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');

  relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

// Inicializa o relógio e atualiza a cada 1 segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Função para trocar tema (claro e escuro)
function trocarTema() {
  const body = document.body;
  const btnTema = document.getElementById('btn-tema');
  if (!body || !btnTema) return;

  body.classList.toggle('tema-escuro');

  if (body.classList.contains('tema-escuro')) {
    btnTema.textContent = 'Tema Claro';
  } else {
    btnTema.textContent = 'Tema Escuro';
  }
}

// Inicializa o texto do botão tema ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const btnTema = document.getElementById('btn-tema');
  if (btnTema) {
    // Define o texto inicial do botão
    btnTema.textContent = 'Tema Escuro';
    // Adiciona o event listener para troca de tema
    btnTema.addEventListener('click', trocarTema);
  }
});

// Validação simples do formulário antes de enviar
const form = document.getElementById('form-contato');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (nome.length < 3) {
      alert('Por favor, insira um nome válido com pelo menos 3 caracteres.');
      form.nome.focus();
      return;
    }

    // Regex simples para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      form.email.focus();
      return;
    }

    if (mensagem.length < 10) {
      alert('Por favor, escreva uma mensagem com pelo menos 10 caracteres.');
      form.mensagem.focus();
      return;
    }

    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    form.reset();
  });
}
