function run(entrada) {

    var props = JSON.parse(entrada);

    var arvore = [
        { "id": "0000", "cenario": "A1",  "grupo": "A" },
        { "id": "0001", "cenario": "A2",  "grupo": "A" },
        { "id": "0010", "cenario": "A3",  "grupo": "A" },
        { "id": "0011", "cenario": "A4",  "grupo": "A" },
        { "id": "0020", "cenario": "A5",  "grupo": "A" },
        { "id": "0021", "cenario": "A6",  "grupo": "A" },
        { "id": "0100", "cenario": "A7",  "grupo": "A" },
        { "id": "0101", "cenario": "A8",  "grupo": "A" },
        { "id": "0110", "cenario": "A9",  "grupo": "A" },
        { "id": "0111", "cenario": "A10", "grupo": "A" },
        { "id": "0120", "cenario": "A11", "grupo": "A" },
        { "id": "0121", "cenario": "A12", "grupo": "A" },
        { "id": "1000", "cenario": "B1",  "grupo": "B" },
        { "id": "1001", "cenario": "B2",  "grupo": "B" },
        { "id": "1010", "cenario": "B3",  "grupo": "B" },
        { "id": "1011", "cenario": "B4",  "grupo": "B" },
        { "id": "1020", "cenario": "B5",  "grupo": "B" },
        { "id": "1021", "cenario": "B6",  "grupo": "B" },
        { "id": "1100", "cenario": "B7",  "grupo": "B" },
        { "id": "1101", "cenario": "B8",  "grupo": "B" },
        { "id": "1110", "cenario": "B9",  "grupo": "B" },
        { "id": "1111", "cenario": "B10", "grupo": "B" },
        { "id": "1120", "cenario": "B11", "grupo": "B" },
        { "id": "1121", "cenario": "B12", "grupo": "B" }
    ]

    var codigo = `${props.risco}${props.febre}${(props.leves == 0 ? 0 : (props.leves <= 3) ? 1 : 2)}${props.graves}` 

    var analise = arvore.find(ar => codigo == ar.id)

    return analise

}


var entrada = '{"risco": 1, "febre": 1, "leves": 4, "graves": 1 }'

console.log(run(entrada))