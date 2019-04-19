const _import = require('../_import_' + process.env.NODE_ENV)
export const homeRouter = [
    {
        path: '/',
        name: 'HelloWorld',
        component: _import('HelloWorld/HelloWorld')
    },
    {
        path: '/404',
        name: '404',
        component: _import('public/404')
    }
]
