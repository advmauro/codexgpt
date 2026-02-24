const form = document.getElementById("leadForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    feedback.textContent = "Por favor, preencha os campos obrigatórios.";
    feedback.style.color = "#b91c1c";
    form.reportValidity();
    return;
  }

  const nome = document.getElementById("nome").value.trim();

  feedback.textContent = `${nome}, recebemos sua solicitação. Em breve entraremos em contato.`;
  feedback.style.color = "#166534";
  form.reset();
});
