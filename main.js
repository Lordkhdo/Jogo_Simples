const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16;
canvas.height = 64 * 9;

class Player {
  constructor() {
    this.posiçao = {
      x: 30,
      y: 30,
    };
    this.velocidade = {
      x: 0,
      y: 0,
    };
    this.gravidade = 1;
    this.altura = 100;
    this.largura = 100;
    this.baseP = this.posiçao.y + this.altura;
  }
  desenhar() {
    c.fillStyle = "blue";
    c.fillRect(this.posiçao.x, this.posiçao.y, this.altura, this.largura);
  }
  atualizar() {
    this.posiçao.x += this.velocidade.x;
    this.velocidade.y += this.gravidade;
    this.baseP = this.posiçao.y + this.altura;

    if (this.baseP + this.velocidade.y < canvas.height) {
      this.posiçao.y += this.velocidade.y;
    } else {
      this.velocidade.y = 0;
    }
  }
}

const player = new Player();

var butoes = {
  a: {
    botaoApertado: false,
  },
  d: {
    botaoApertado: false,
  },
};
function Animar() {
  window.requestAnimationFrame(Animar);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
    player.velocidade.x = 0
  if (butoes.d.botaoApertado === true) {
    player.velocidade.x = +5;
  } else if (butoes.a.botaoApertado === true) {
    player.velocidade.x = -5;
  }
  player.desenhar();
  player.atualizar();
}
Animar();

window.addEventListener("keydown", (evento) => {
  switch (evento.key) {
    case " ":
      if (player.velocidade.y == 0) {
        player.velocidade.y = -15;}
        console.log(player.velocidade.y);

      break;
    case "a":
      butoes.a.botaoApertado = true;
      break;
    case "d":
      butoes.d.botaoApertado = true;
      break;
  }
});
window.addEventListener("keyup", (evento) => {
  switch (evento.key) {
    case "a":
      butoes.a.botaoApertado = false;
      break;
    case "d":
      butoes.d.botaoApertado = false;
      break;
  }
});
