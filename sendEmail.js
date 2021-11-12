const { user } = require('./user')

// Não sabemos qual a propriedade dentro de user que contém os dados do endereço
function sendEmailJS(user) {
  console.log(`
    ${user.name} [${user.email}], seu pedido foi enviado para o seguinte endereço:

    Rua: ${user}
    Número:
    Cidade:
    Estado: 
  `)
}

sendEmailJS(user)
