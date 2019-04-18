import moduleRouter from './modules'
const otherRouter = [
  {
    path: '*',
    redirect: '/404',
    meta: {
      auth: false
    }
  }
]
var allModules = moduleRouter.concat(otherRouter)
export const routes = allModules
