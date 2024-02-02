module.exports = {

    run:  function run(cliente, input) {

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

            var formas = {
                "entrega": ["1", "entrega", "entregar", "delivery", "receber"],
                "retirada": ["2", "retirada", "retirar", "retira", "buscar"]
            }


            var input = semAcento(input).toLowerCase().replace(',', '').split(' ')

            var chaves = []

            input.forEach((palavra, index) => {

                // busca palavra não
                if(palavra == 'nao'){
                    chaves.push('nao')
                }

                Object.keys(formas).forEach(key => {

                    formas[key].find(forma => {

                        if(forma == palavra){
                            chaves.push(key)
                        }
                    })

                })

            })

            var cliente = JSON.parse(cliente)

            function validaForma(array) {

                var numero = 0,
                    string = '',
                    forma1 = 'entrega',
                    forma2 = 'retirada',
                    forma1_str = 'Entrega',
                    forma2_str = 'Retirada'
                    tam = array.length

                if (tam == 1){

                        var v1 = array[0]

                        if(v1 == forma1){
                            numero = 1
                            string = forma1_str
                        }
                        else if(v1 == forma2) {
                            numero = 2
                            string = forma2_str
                        }
                        else {
                            numero = -1
                            string = ''
                        }

                    }
                    else if(tam == 2){

                        var v1 = array[0], 
                            v2 = array[1]

                        if(v1 == 'nao' && v2 == forma1){
                            numero = 2
                            string = forma2_str
                        }
                        else if(v1 == 'nao' && v2 == forma2){
                            numero = 1
                            string = forma1_str
                        }
                        else if(v1 == forma1 && v2 == 'nao'){
                            numero = 2
                            string = forma2_str
                        }
                        else if(v1 == forma2 && v2 == 'nao'){
                            numero = 1
                            string = forma1_str
                        }
                        else {
                            numero = -1
                            string = ''
                        }

                    }
                    else {
                        numero = -1
                        string = ''

                    }

                    return { numero, string }

            }


            if(chaves.length <= 2){

            var retorno = validaForma(chaves)

            }
            else {

                var temNao = chaves.indexOf('nao')
            
                while(temNao >= 0) {
        
                    var ehNao = chaves.indexOf('nao')
                    var anterior = chaves[ehNao -1]
                    var proximo = chaves[ehNao +1]
    
                    if(chaves.length == 3 && ehNao == 2 && anterior != 'nao'){
                        chaves.splice(1, 2)
                    }
                    else if(ehNao >= 0 && proximo != 'nao'){
                        chaves.splice(ehNao, 2)
                    }
        
                    temNao = chaves.indexOf('nao')
                }

                var retorno = validaForma(chaves)

            }

            cliente.entrega = retorno.numero
            cliente.entrega_str = retorno.string

            return JSON.stringify(cliente)
    }
}