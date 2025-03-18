document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".cta");

    button.addEventListener("click", function() {
        alert("Saiba mais sobre inclusão escolar em breve!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "Educação Inclusiva: Todos Juntos na Escola!";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
