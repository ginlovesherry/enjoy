const _import = require('../_import_' + process.env.NODE_ENV)
export const homeRouter = [
    {
        path: '/',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '/404',
        name: '404',
        component: _import('public/404')
    },
    {
        path: '/home',
        name: 'home',
        component: _import('pages/home')
    },
    {
        path: '/login',
        name: 'login',
        component: _import('pages/login')
    },
    {
        path: '/newsDetail/:id?',
        name: 'newsDetail',
        component: _import('pages/newsDetail')
    },
    {
        path: '/videoDetail/:id?',
        name: 'videoDetail',
        component: _import('pages/videoDetail')
    },
    {
        path: '/liveDetail/:id?',
        name: 'liveDetail',
        component: _import('pages/liveDetail')
    },
    {
        path: '/activityDetail/:id?',
        name: 'activityDetail',
        component: _import('pages/activityDetail')
    },
    {
        path: '/detail/:fileId',
        name: 'detail',
        component: _import('pages/detail')
    }
]
