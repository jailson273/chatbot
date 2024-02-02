module.exports = {

    cep: function run(input){

            function semAcento(str){

                let string = str;
                let mapaAcentosHex = {
                    a : /[\xE0-\xE6]/g, e : /[\xE8-\xEB]/g, i : /[\xEC-\xEF]/g, o : /[\xF2-\xF6]/g, u : /[\xF9-\xFC]/g, c : /\xE7/g, n : /\xF1/g,
                    A : /[\xC0-\xC6]/g, E : /[\xC8-\xCB]/g, I : /[\xCC-\xCF]/g, O : /[\xD2-\xD6]/g, U : /[\xD9-\xDC]/g, C : /\xC7/g, N : /\xD1/g,
                }
                for ( let letra in mapaAcentosHex ) {
                    let expressaoRegular = mapaAcentosHex[letra];
                    string =  string.replace( expressaoRegular, letra );
                }
                return string;
            }

            var input = semAcento(input).toLowerCase().replace(',', ' ').split(' ');

            var ceps = []

            input.forEach(i => {
                 i = i.replace('-', '')
                 if(Number(i))
                    return ceps.push({ numero: i, tamanho: i.length })
            })

            if(ceps.length == 0){
                return { numero: 0, tamanho: 0, url: `https://viacep.com.br/ws/00000000/json/` }
            }

            cep = ceps.filter(cep => cep.tamanho == 8)[0]

            cep.url = `https://viacep.com.br/ws/${cep.numero}/json/`
    
            if(!cep){
    
                return { numero: 0, tamanho: 0, url: `https://viacep.com.br/ws/00000000/json/` }
            }
    
            return JSON.stringify(cep)

        },


    endereco: function run(response) {

        var response = JSON.parse(response)

        var endereco = {
            cep: response.cep,
            rua: !response.logradouro ? 0 : response.logradouro,
            bairro: !response.bairro ? 0 : response.bairro,
            cidade: response.localidade,
            uf: response.uf,

        }

        return JSON.stringify(endereco)


    }
}