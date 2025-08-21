let tempoRestante = 20;

  let intervalo;

  function abrirModal() {

    document.body.style.overflow = "hidden"; // bloqueia rolagem

    document.getElementById("modalOverlay").style.display = "flex";
    
    tempoRestante = 20;

    document.getElementById("contador").textContent = tempoRestante;

document.getElementById("contador").textContent = tempoRestante;

    intervalo = setInterval(() => {

      tempoRestante--;

      document.getElementById("contador").textContent = tempoRestante;

      if (tempoRestante <= 0) {

        fecharModal();

      }

    }, 1000);

  }

  function fecharModal() {

    clearInterval(intervalo);

     = "none";

    document.body.style.overflow = "auto"; // libera rolagem

  }

  // Abre automaticamente ao carregar a página

window.onload = abrirModal;
