import { Credential, User } from '@models/api'
import { usersMock } from '@data/index'

export async function loginUserMock({ email, password }: Credential): Promise<User>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = usersMock.find(user => user.email === email && user.password === password)
      if (user) {
        resolve(user)
      } else {
        reject(new Error('Credenciales incorrectas'))
      }
    }, 1000)
  })
}
