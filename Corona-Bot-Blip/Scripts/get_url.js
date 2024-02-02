function run(entrada) {

    function removerAcentos(newStringComAcento) {

        var palavra = newStringComAcento;

        console.log(palavra)
        
          var mapaAcentosHex 	= {
              a : /[\xE0-\xE6]/g,
              e : /[\xE8-\xEB]/g,
              i : /[\xEC-\xEF]/g,
              o : /[\xF2-\xF6]/g,
              u : /[\xF9-\xFC]/g,
              c : /\xE7/g,
              n : /\xF1/g
          };
      
          for ( var letra in mapaAcentosHex ) {
              var expressaoRegular = mapaAcentosHex[letra];
              palavra = palavra.replace( expressaoRegular, letra );
          }
      
          return palavra;
      }
    
    
      var estados;

      fetch("https://dev-postapp-app-api.herokuapp.com/postapp/api/v1/cidade", {
        method: "GET",
        headers: [
          ["Content-Type", "application/json"],
          ["Content-Type", "text/plain"]
        ],
      })
      .then(res => res.json())
      .then(res => estados = res)
      .catch(err => err)
    
    
    entrada = removerAcentos(entrada).toLowerCase();
    
    var input = entrada.split(' ');
    
    var temp_cit = []
    
    // define a cidade
    cidades.forEach(c => {

        var pl = removerAcentos(c);
    
        var cit = ''
    
        var index = entrada.indexOf(removerAcentos(pl).toLowerCase(), 0);
    
        if(index == 0) {
            temp_cit.push(c);
        }
    })
    
    
    var cidade = temp_cit[0];
    
    
    // define o estado
    var estado = estados.find(e => {
    
        var est = ''
    
        input.forEach(i => {
    
            if(removerAcentos(i).toLowerCase() == removerAcentos(e).toLowerCase()) {
                est = e
    
                return
            }            
        });
    
        return est;
    })
    
    
    var url = { 
        url: `https://brasil.io/api/dataset/covid19/caso_full/data/?is_last=true&place_type=city&city=${cidade}&state=${!estado ? '' : estado}`,
        city: cidade,
        uf: estado
    }

    return JSON.stringify(url);
    
    }
 
    
    console.log(run("Hortolandia SP"))