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
                    chaves.push({ index, chave: 'nao' })
                }

                //busca entrega
                formas['entrega'].find(forma => {
                    
                    if(forma == palavra){
                        chaves.push({ index, chave: 'entrega' })
                    }
                    
                })
                
                // busca retirada
                formas['retirada'].find(forma => {
                    
                    if(forma == palavra){
                        chaves.push({ index, chave: 'retirada' })
                    }
                    
                })
            })

            for(var cont = 0; cont < chaves.length; cont++){

                var v1 = chaves[0].chave,
                    v2 = cont <= chaves.length ? null : chaves[1].chave
                
                if(v1 ==  'nao' && v2 == 'entrega'){
                    chaves.splice(0, 2)
                }
                else if(v1 ==  'nao' && v2 == 'retirada'){
                    chaves.splice(0, 2)
                }
            }

            var cliente = JSON.parse(cliente)

            chave = chaves[0]

            var ehEntrega = 0;
            var formaEntrega = '';


            if(chaves.length == 0){
                ehEntrega = -1
                formaEntrega = ''
            }
            else if(chave.chave == 'entrega'){
                ehEntrega = 1
                formaEntrega = 'Entrega'
            }                
            else{
                ehEntrega = 2
                formaEntrega = 'Retirada'
            }

            cliente.entrega = ehEntrega
            cliente.entrega_str = formaEntrega

            return JSON.stringify(cliente)
    }
}