import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  const { user } = req.body
  try {
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created successfully!!',
      data: result,
    })
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Failed to create user!',
    })
  }
}

export default { createUser }
