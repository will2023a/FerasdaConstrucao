// Exemplo simples de JavaScript
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário
    alert("Formulário enviado com sucesso!");
});
