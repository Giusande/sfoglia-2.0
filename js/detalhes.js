const params = new URLSearchParams(window.location.search);

    const titulo = decodeURIComponent(params.get("titulo"));
    const descricao = decodeURIComponent(params.get("descricao"));
    const preco = decodeURIComponent(params.get("preco"));
    const imagem = decodeURIComponent(params.get("imagem"));

    document.getElementById("titulo").textContent = titulo;
    document.getElementById("descricao").textContent = descricao;
    document.getElementById("preco").textContent = preco;
    document.getElementById("img").src = imagem;
    document.getElementById("img").alt = titulo;