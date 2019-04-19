import moduleRouter from './modules'
const otherRouter = [{
    path: '*',
    redirect: '/404'
}]
var allModules = moduleRouter.concat(otherRouter)
console.log(allModules)
export const routes = allModules
