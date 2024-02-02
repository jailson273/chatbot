// intenção de saudacao
const intencao_saudacao = ['oi', 'ola', 'tudo bem', 'como voce esta']

// entidade
const entidade = [
    {
        name: 'saudacao',
        values: {
            saudar: ['bom dia', 'boa manha', 'boa tarde', 'boa noite']
        }
    },

    {
        name: 'saudar',
        values: {
            manha: ['bom dia','boa manha'],
            tarde: ['boa tarde'],
            noite: ['boa noite']
            
        }
    }
]


function analiseIA(frase, intents, entities) {

    let intencao = 0,
        definition_entity = [];

    intents.forEach(intent => (frase.indexOf(intent) >= 0) ? intencao = intencao + 1 : 0)
    
    entities.forEach(entity => {

        const name = entity.name;
        const values = Object.keys(entity.values);

        values.forEach(value => {

            entity.values[value].find(vl => {
                if(frase.indexOf(vl) >= 0)
                   return definition_entity.push({[name]: value})
            })
        })
    })

    return definition_entity
}

function anliseEntity(analiseIA, entity_name, entity_value){

    const analise = analiseIA

    const entity = analise.find(a => (a[entity_name] == entity_value))

    if(!entity){
        console.log(true)
        return false
    }
    else{
        console.log(false)
        return true
    }
        
}



const intent = intencao_saudacao
const entity = entidade


const frase = 'ola boa tarde'
const ent = 'saudar'
const val = 'tarde'

const manha = anliseEntity(analiseIA(frase, intent, entity), ent, val)
const tarde = anliseEntity(analiseIA(frase, intent, entity), ent, val)
const noite = anliseEntity(analiseIA(frase, intent, entity), ent, val)


if(manha)
    console.log('Olá Bom dia, você é do atendimento da manha')
else if(tarde)
    console.log('Olá Boa tarde, você é do atendimento da tarde')
else if(noite)
    console.log('Olá Boa noite, você é do atendimento da noite')
else 
 console.log('Olá, você está no atendimento especial')