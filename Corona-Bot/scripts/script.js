function run(entrada){

    function normal( str ) {
        var string = str;
        var mapaAcentosHex = {
            a : /[\xE0-\xE6]/g, e : /[\xE8-\xEB]/g, i : /[\xEC-\xEF]/g, o : /[\xF2-\xF6]/g, u : /[\xF9-\xFC]/g, c : /\xE7/g, n : /\xF1/g,
            A : /[\xC0-\xC6]/g, E : /[\xC8-\xCB]/g, I : /[\xCC-\xCF]/g, O : /[\xD2-\xD6]/g, U : /[\xD9-\xDC]/g, C : /\xC7/g, N : /\xD1/g,
        }      
        for ( var letra in mapaAcentosHex ) {
            var expressaoRegular = mapaAcentosHex[letra];
            string = string.replace( expressaoRegular, letra );
        }      
        return string;
      }

    var str = normal(entrada).toLowerCase();

    var sintomas = 0;

    var sintomas_leves = [
        {
            valor: 'coriza',
            sinonimos: ['coriza', 'nariz entupido', 'nariz escorrendo']
        },        
        {
            valor: 'cansaco',
            sinonimos: ['cansaco']
        },        
        {
            valor: 'dor de cabeca',
            sinonimos: ['dor de cabeca', 'dor na cabeca']
        },        
        {
            valor: 'dor no corpo',
            sinonimos: ['dores no corpo ou abdominais', 'dor no corpo', 'dor abdominal', 'dores no corpo', 'dores abdominais']
        },        
        {
            valor: 'dor de garganta',
            sinonimos: ['dor de garganta', 'dor na garganta', 'dor gaganta']
        },
        {
            valor: 'diarreia ou mal estar',
            sinonimos: ['diarreia ou mal estar', 'diarreia', 'mal estar', 'mau estar']
        },        
        {
            valor: 'tosse',
            sinonimos: ['tosse', 'tosse seca']
        },        
        {
            valor: 'perda do olfato ou paladar',
            sinonimos: ['perda do olfato ou paladar', 'perda do olfato', 'perda do paladar', 'perca do olfato', 'perca do paladar']
        }
    ]


    var meus_sintomas = []

    sintomas_leves.forEach(sint => {
        
        sint.sinonimos.forEach(s => {
            if(str.indexOf(s) >= 0)
            meus_sintomas.push(sint.valor)
        })
    })

    meus_sintomas = meus_sintomas.filter((elem, index, self) => index === self.indexOf(elem))

    if(meus_sintomas.length > 0){

        return  meus_sintomas.length;
    }


    var numeros = [
        { num: 1, sin: ['1', 'um', 'uma'] },
        { num: 2, sin: ['2', 'dois', 'duas'] },
        { num: 3, sin: ['3', 'treis'] },
        { num: 4, sin: ['4', 'quatro'] },
        { num: 5, sin: ['5', 'cinco'] },
        { num: 6, sin: ['6', 'seis'] },
        { num: 7, sin: ['7', 'sete'] },
        { num: 8, sin: ['8', 'oito'] },
    ]

    var qtd = 0;

    numeros.forEach(num => {

       return num.sin.forEach(ns => {
            if(str.indexOf(ns) >= 0)
                qtd = num.num
        })
    })

    if(qtd > 0)
        return qtd

    return -1
}



console.log(run('tenho 9'))