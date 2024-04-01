import { Credential, User } from '@models/index'

export default async function loginUserMock({ username, password }: Credential): Promise<User>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'pass') {
        resolve({
          id: 1,
          name: 'user',
          email: 'test@test.com',
        })
      } else {
        reject(new Error('Credenciales incorrectas'))
      }
    }, 1000)
  })
}
