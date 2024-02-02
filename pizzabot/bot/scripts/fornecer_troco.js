

module.exports = {

    troco: function run(cliente) {

        var cliente = JSON.parse(cliente)

        var total = `R$ ${((cliente.vl_total + (cliente.entrega = 1 ? 5 : 0))).toFixed(2).toString().replace('.',',')}`

        return cliente
    }
}