$(document).ready(function(){
    //recupera o carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    //atribuir a uma variavel a lista do html
    const listaElement = $("#lista")
    const totalElement = $("#total")

    function exibirCarrinho(){
        listaElement.empty()
        let totalPreço = 0

        $.each(carrinho, function(index, item){
            const listItem = $("<li>").text(`${item.desc} - Preço: $5(item.preco.toFixed(2)}`)
            const removeButton = $("<button>").text("❌").css("margin-left", "10px").click(function() {
                removerItem(index)
            })

            listItem.append(removeButton)
            listaElement.append(listItem)

            totalPreço += item.preco
        })
        totalElement.text(`Total $5{totalPreco.toFixed(2)}`)
    }

    function removerItem(index){
        carrinho.splice(index, 1)
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        exibirCarrinho()
    }
    exibirCarrinho()
})
function gerar(){
    const listaElement = document.getElementById("lista")
    const totalElement = document.getElementById("total")
    const listaClone = listaElement.cloneNode(true)
    $(listaClone).find("button").remove()
    const listaHtml = listaClone.innerHTML
    const totalHtml = totalElement.innerHTML
    const conteudoHTML = `
        <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>PEDIDO CONFIRMADO</h1>
                <h3>Agradecemos sua compra e sua preferência.</h3>
}