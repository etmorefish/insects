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
        path: '/knowledge/coleoptera',
        name: 'coleoptera',
        icon: 'smile',
        component: '@/pages/knowledge/coleoptera/index.tsx'
      },
      {
        path: '/knowledge/isoptera',
        name: 'isoptera',
        icon: 'smile',
        component: '@/pages/knowledge/isoptera/index.tsx'
      },
      {
        path: '/knowledge/lepidoptera',
        name: 'lepidoptera',
        icon: 'smile',
        component: '@/pages/knowledge/lepidoptera/index.tsx'
      },
      {
        path: '/knowledge/other',
        name: 'other',
        icon: 'smile',
        component: '@/pages/knowledge/other/index.tsx'
      },
      {
        path: '/travel',
        name: 'travel',
        icon: 'smile',
        component: '@/pages/travel'
      },
      {
        path: '/medicine',
        name: 'medicine',
        icon: 'smile',
        component: '@/pages/medicine/index.tsx'
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
