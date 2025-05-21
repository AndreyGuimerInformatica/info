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
