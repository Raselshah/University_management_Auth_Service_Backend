import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generate password incrementally

  // default password

  const id = await generateUserId()

  if (!user.password) {
    user.password = config.default_user_password as string
  } else {
    user.password = id
  }

  const createdUser = await User.create(user)
  //   if (!createdUser) {
  //     throw new Error('user creation failed!!')
  //   }
  return createdUser
}