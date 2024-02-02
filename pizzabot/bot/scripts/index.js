
const add_forma_entrega = require('./add-forma-entrega')
const cep = require('./cep')
const numero_complemento = require('./numero_complemento')
const salva_endereco = require('./salva_endereco')
const pegar_pagamento = require('./pegar_pagamento')
const get_troco = require('./get_troco')
const resumo = require('./resumo')
const troco = require('./fornecer_troco')


var cliente = '{"application":"1da6e470-fed7-4a08-b95a-86bb9ac8d447.fastfoodrouter@0mn.io","nome":"","telefone":"","entrega":1,"entrega_str":"Entrega","pagamento":0,"pagamento_str":"","troco":0,"troco_str":"","vl_pagar_str":"","endereco":"","confirmou_endereco":0,"confirmou_pagamento":0,"vl_total":44.93,"vl_total_str":"R$ 44,93","quantidade":1,"quantidade_str":"uma pizza","lista":[{"indice":1,"id":1,"sabor":"Calabresa","tamanho":"Grande","quantidade":1,"vlu":44.93,"vlt":44.93,"str_vlu":"R$ 44,93","str_vlt":"R$ 44,93"}],"mensagem":""}'
var input  = 'retirada é entrega ';

const result = troco.troco(cliente)

console.log(result)

