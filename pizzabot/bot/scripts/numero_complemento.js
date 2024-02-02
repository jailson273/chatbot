module.exports = {

    numer_complemento: function run(input, endereco) {

        var endereco = JSON.parse(endereco)

        endereco_str = `CEP: ${endereco.cep} / ${endereco.rua} / ${endereco.bairro} / ${input}`

        return endereco_str
    }
}