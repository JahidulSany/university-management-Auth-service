import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto Incremental ID
  const id = await generateUserId()
  user.id = id

  // Default Password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const newUser = await User.create(user)
  if (!newUser) {
    throw new Error('Failed to create uses!!')
  }
  return newUser
}

export default {
  createUser,
}
