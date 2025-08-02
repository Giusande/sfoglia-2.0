const botoes = document.querySelectorAll(".ver-mais");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const card = botao.parentElement;

    const titulo = encodeURIComponent(
      card.querySelector(".titulo").textContent
    );
    const descricao = encodeURIComponent(
      card.querySelector(".descricao").textContent
    );
    const preco = encodeURIComponent(card.querySelector(".preco").textContent);
    const imagem = encodeURIComponent(
      card.querySelector(".imagem").getAttribute("src")
    );

    const url = `../details/detalhes.html?titulo=${titulo}&descricao=${descricao}&preco=${preco}&imagem=${imagem}`;
    window.location.href = url;
  });
});
