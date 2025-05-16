const botoes = document.querySelectorAll(".add-carrinho");
const itensCarrinho = document.getElementById("itens-carrinho");
const total = document.getElementById("total");

let totalPreco = 0;

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const nome = botao.getAttribute("data-nome");
    const preco = parseFloat(botao.getAttribute("data-preco"));

    const li = document.createElement("li");
    li.textContent = `${nome} - R$ ${preco},00`;
    itensCarrinho.appendChild(li);

    totalPreco += preco;
    total.textContent = totalPreco.toFixed(0);
  });
});

function limparCarrinho() {
  itensCarrinho.innerHTML = "";
  alert(`compra finalizada com sucesso, valor total: R$ ${totalPreco},00`);
  totalPreco = 0;
  total.textContent = totalPreco.toFixed(0);
  // Limpa o carrinho e recarrega a página
  window.location.reload();
}
