import { Credential, User } from '@models/index'

export default async function loginUserMock({ email, password }: Credential): Promise<User>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@test.com' && password === 'pass') {
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
