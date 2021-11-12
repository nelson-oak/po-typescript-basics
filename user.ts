// Interfaces definem o formato de um objeto
interface IUser {
  name: string
  email: string
  address: {
    street: string
    number: number
    city: string
    state: string
  }
}

// Aqui definimos o objeto com o tipo da interface
const user: IUser = {
  name: 'Nelson',
  email: 'nelson.carvalho@nelsonoak.dev',
  address: {
		street: 'Royal Avenue',
		number: 13,
		city: 'Akala',
		state: 'Alola'
  }
}

// Vamos exportar a interface para utilizar no sendEmail
export { user, IUser }