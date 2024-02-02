module.exports = {

    resumo: function run(cliente){

        var cliente = JSON.parse(cliente)

        var entrega_str = cliente.entrega_str
        var pagamento_str = cliente.pagamento_str
        var troco_str = cliente.troco_str
        var vl_pagar_str = cliente.vl_pagar_str
        var endereco = (cliente.entrega == 1 ? cliente.endereco : 'Retirar na pizzaria')
        var vl_total_str = `R$ ${(cliente.entrega == 1 ? (cliente.vl_total + 5) : cliente.vl_total).toString().replace('.',',')}`
        var quantidade_str = cliente.quantidade_str
        var items = cliente.lista

        var resumo = `Quantidade: <b>${quantidade_str}</b><br/>`

        var lista = `<li><b># - Sabor - Tamanho - Qtd - Valor - Total</b></li>`
        items.forEach(item => {
            lista = lista + `<li>${item.indice} - ${item.sabor} - ${item.tamanho} - ${item.quantidade} - ${item.str_vlu} - ${item.str_vlt} </li>`
        })
        lista = lista + (cliente.entrega == 1 ? `<li>Taxa de entrega - R$ 5,00</li>` : '')
        lista = `<ul> ${lista} </ul>`

        resumo = resumo + `${lista}`        
        resumo = resumo + `Total: <b>${vl_total_str}</b> <br/>`
        resumo = resumo + `Forma de Pagamento: <b>${pagamento_str}</b> <br/>`
        resumo = resumo + (cliente.pagamento == 1 ? `Troco para: <b>${vl_pagar_str}</b> <br /> Troco: <b>${troco_str}</b> <br/>` : '' )
        resumo = resumo + `Forma de recebimento: <b>${entrega_str}</b> <br/>`
        resumo = resumo + `Endereço: <b>${endereco}</b> <br/>`

        return resumo

    }
}