import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

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
    throw new ApiError(400, 'Failed to create uses!!', '')
  }
  return newUser
}

export const UserService = {
  createUser,
}
