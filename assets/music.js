(() => {
  if (document.getElementById("burn-music")) return;

  const audio = document.createElement("audio");
  audio.id = "burn-music";
  audio.src = "assets/musica.mp3";
  audio.loop = true;
  audio.preload = "none";
  audio.volume = 0.35;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "▶ Tocar música";
  button.setAttribute("aria-label", "Tocar Cumade e Cumpade");
  button.setAttribute("aria-pressed", "false");

  const style = document.createElement("style");
  style.textContent = `
    #burn-music-button {
      position: fixed;
      right: 18px;
      bottom: max(18px, env(safe-area-inset-bottom));
      z-index: 900;
      padding: 14px 20px;
      border: 1px solid #d0f658;
      border-radius: 999px;
      background: #d0f658;
      color: #171c10;
      font: 700 13px Arial, sans-serif;
      cursor: pointer;
      box-shadow: 0 6px 24px #0005;
    }
    #burn-music-button:focus-visible {
      outline: 3px solid #c2b5e9;
      outline-offset: 4px;
    }
    body { padding-bottom: 76px; }
  `;
  button.id = "burn-music-button";

  function update() {
    button.textContent = audio.paused
      ? "▶ Tocar música"
      : "❚❚ Pausar música";
    button.setAttribute("aria-pressed", String(!audio.paused));
    button.setAttribute("aria-label", audio.paused
      ? "Tocar Cumade e Cumpade"
      : "Pausar Cumade e Cumpade");
  }

  button.addEventListener("click", async () => {
    if (!audio.paused) {
      audio.pause();
      return;
    }
    try {
      await audio.play();
    } catch {
      button.textContent = "↻ Tentar tocar novamente";
    }
  });

  audio.addEventListener("play", update);
  audio.addEventListener("pause", update);
  audio.addEventListener("error", () => {
    button.textContent = "Música indisponível";
  });

  document.head.append(style);
  document.body.append(audio, button);
})();
