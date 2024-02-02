
module.exports = {

    get_troco: function run(cliente, input){

        var cliente = JSON.parse(cliente);
        var total = cliente.vl_total + (cliente.entrega == 1 ? 5 : 0)

        var dinheiro = input.split(' ').filter(value => (Number(parseFloat(value))) )[0]

        var troco = 0
        var troco_str = ''
        var vl_pagar_str = ''
        var mensagem = ''

        if(!dinheiro) {

            troco = -1
            troco_str = ''
            mensagem = 'Não foi possivel identificar o valor que será pago, por favor tente novamente!'
        }


        vl_troco = parseFloat(dinheiro.toString().replace(',','.')) - total

        if(vl_troco < 0){

            troco = -1
            troco_str = ''
            mensagem = `O valor que você informou é menor que o valor total do pedido. <b>R$ ${total.toFixed(2).toString().replace('.',',')} </b>!`
        }
        else {

            troco = 1
            troco_str = `R$ ${(vl_troco).toFixed(2).toString().replace('.',',')}`
            vl_pagar_str = `R$ ${parseFloat(dinheiro).toString().replace('.',',')}`
            mensagem = ''

        }

        cliente.troco = troco
        cliente.troco_str = troco_str
        cliente.vl_pagar_str =  vl_pagar_str
        cliente.mensagem = mensagem

        //return  JSON.stringify(cliente)
        return  (cliente)
    }
}