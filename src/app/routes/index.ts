import express from 'express'
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { UserRoutes } from '../modules/user/user.route'
const router = express.Router()

const moduleRouters = [
  {
    path: '/users/',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters/',
    route: AcademicSemesterRoutes,
  },
]

moduleRouters.forEach(route => {
  router.use(route.path, route.route)
})

export default router
