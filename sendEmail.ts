import { user, IUser } from './user'

// Pressione CTRL + Espaço para abrir o menu abaixo:
function sendEmail(user: IUser) {
  console.log(`
    ${user.name} [${user.email}], seu pedido foi enviado para o seguinte endereço:

    Rua: ${user.address.street}
    Número: ${user.address.number}
    Cidade: ${user.address.city}
    Estado: ${user.address.state}
  `)
}

sendEmail(user)
