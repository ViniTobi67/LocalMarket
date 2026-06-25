$(document).ready(function (){
    //recupera o carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    //atribuir a uma variavel a lista do html
    const listaElement = $("#lista");
    const totalElement = $("#total");

    function exibirCarrinho(){
        listaElement.empty();

        let totalPreco = 0;

        $.each(carrinho, function (index, item){
            const listItem = $("<li>").text(
                `${item.desc} - Preço: R$ ${item.preco.toFixed(2)}`
            );

            const removeButton = $("<button>")
                .text("❌")
                .css("margin-left", "10px")
                .click(function (){
                    removeItem(index);
                });

            listItem.append(removeButton);
            listaElement.append(listItem);

            totalPreco += item.preco;
        });

        totalElement.text(`Total: R$ ${totalPreco.toFixed(2)}`);
    }

    function removeItem(index) {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        exibirCarrinho();
    }

    exibirCarrinho();
});

function gerar(){
    const listaElement = document.getElementById("lista");
    const totalElement = document.getElementById("total");

    const listaClone = listaElement.cloneNode(true);


    $(listaClone).find("button").remove();

    const listaHtml = listaClone.innerHTML;
    const totalHtml = totalElement.innerHTML;

    const conteudoHTML = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Pedido Confirmado</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
            }

            h1 {
                color: green;
            }

            ul {
                padding-left: 20px;
            }

            #total {
                font-weight: bold;
                margin-top: 15px;
            }
        </style>
    </head>
    <body>
        <h1>PEDIDO CONFIRMADO</h1>

        <h2>Itens do Pedido:</h2>

        <ul>
            ${listaHtml}
        </ul>

        <p id="total">${totalHtml}</p>
    </body>
    </html>
    `;

    const novaJanela = window.open("", "_blank");

    novaJanela.document.open();
    novaJanela.document.write(conteudoHTML);
    novaJanela.document.close();

    novaJanela.print();
}