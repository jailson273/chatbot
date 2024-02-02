module.exports = {

    salva_endereco: function run(cliente, enderecosrt) {

        cliente = JSON.parse(cliente)

        cliente.endereco = enderecosrt
        cliente.confirmou_endereco = 1

        return cliente
    }
}