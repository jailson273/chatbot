
function run(nome) {

    function normal(str){

        let string = str;
        let mapaAcentosHex = {
            a : /[\xE0-\xE6]/g, e : /[\xE8-\xEB]/g, i : /[\xEC-\xEF]/g, o : /[\xF2-\xF6]/g, u : /[\xF9-\xFC]/g, c : /\xE7/g, n : /\xF1/g,
            A : /[\xC0-\xC6]/g, E : /[\xC8-\xCB]/g, I : /[\xCC-\xCF]/g, O : /[\xD2-\xD6]/g, U : /[\xD9-\xDC]/g, C : /\xC7/g, N : /\xD1/g,
        }      
        for ( let letra in mapaAcentosHex ) {
            let expressaoRegular = mapaAcentosHex[letra];
            string = string.replace( expressaoRegular, letra );
        }      
        return string;
    }

    var palavras = [

        'a','e','i','o','u',
        'ai','ae', 'oi', 'ola', 'boa','bom', 'tarde','noite','dia','meu', 'nome','me','chamo','chamam','chamado','sou','conhecem','apelido',
        'pode','me','eu','tu','ele','chama', 'assim', 
        '-', '+', '*', '/'
    ]

    var nome = ((normal(nome).toLowerCase()).replace(/[^\w\-]+/g, ' ')).split(' ');

    var arr = nome.filter(n => palavras.indexOf(n) < 0)


    if(arr.length == 0)
        return 'Caro cliente'

    var meu_nome = arr[0];

    return meu_nome;
}

console.log(run('meu nome é jailson'))