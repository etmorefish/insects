export default [
  {
    path: '/',
    component: '@/layouts/main/Mainlayout',
    routes: [
      {
        path: '/',
        name: 'index',
        icon: 'smile',
        component: '@/pages/index.tsx'
      },
      {
        path: '/company',
        name: 'company',
        icon: 'smile',
        component: '@/pages/company/index.tsx'
      },
      {
        path: '/cultivate',
        name: 'cultivate',
        icon: 'smile',
        component: '@/pages/cultivate/index.tsx'
      },
      {
        path: '/cultivate/chain',
        name: 'chain',
        icon: 'smile',
        component: '@/pages/cultivate/chain/index.tsx'
      },
      {
        path: '/cultivate/tech',
        name: 'tech',
        icon: 'smile',
        component: '@/pages/cultivate/tech/index.tsx'
      },
      {
        path: '/craft',
        name: 'craft',
        icon: 'smile',
        component: '@/pages/craft/index.tsx'
      },
      {
        path: '/knowledge',
        name: 'knowledge',
        icon: 'smile',
        component: '@/pages/knowledge/index.tsx'
      },
      {
        path: '/card',
        name: 'card',
        icon: 'smile',
        component: '@/pages/card'
      },
      {
        path: '/404',
        name: '404',
        icon: 'smile',
        component: '@/pages/errors/404'
      },
      {
        component: '@/pages/errors/404',
      },
    ],
  },
]
