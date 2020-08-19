import DocumentPage from '../pages/document/index'
import HomePage from '../pages/home/index'
import Login from '../pages/login/login3'
import Body from '../pages/body/index'
import Mobile from '../pages/mobile/index'
//import Mobile from '../pages/mobile/askForLeave'

const routes = [
  {
    path: '/',
    component: Login,
    children: [
      {
        path: '',
        redirect: '/login',
      },
      {
        path: 'login',
        component: Login,
      },
    ]
  },
  {
    path: '/body',
    component: Body,
    children: [
      {
        path: '/',
        redirect: '/body/home',
      },
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'document',
        component: DocumentPage,
        children: [{
          path: '/',
          component: () => import('../pages/document/content/welcome/homePage'),
        }, {
          path: 'start',
          component: () => import('../pages/document/content/start/start'),
        }, {
          path: 'test',
          component: () => import('../pages/document/content/test/index')
        }, {
          path: 'router',
          component: () => import('../pages/document/content/router/router'),
          children: [{
            name: 'about',
            path: '/',
            component: () => import('../pages/document/content/router/components/About'),
          }, {
            path: 'welcome',
            component: () => import('../pages/document/content/router/components/HelloWorld'),
          }, {
            path: 'param',
            component: () => import('../pages/document/content/router/components/Param'),
          }, {
            //若在path后添加/:id，则网址会拼接id，刷新时id不会消失；若不添加，不会拼接id，刷新页面也会消失id
            path: 'paramDetails',
            component: () => import('../pages/document/content/router/components/paramdetails'),
            name: 'paramDetails',
          }, {
            path: 'protect',
            component: () => import('../pages/document/content/router/components/protect'),
          }]
        }, {
          path: 'store',
          component: () => import('../pages/document/content/store/store'),
        }, {
          path: 'vuex',
          component: () => import('../pages/document/content/store/index')
        }, {
          path: 'refs',
          component: () => import('../pages/document/content/communication/refs')
        }, {
          path: 'center',
          component: () => import('../pages/document/content/communication/center')
        }, {
          path: 'whole',
          component: () => import('../pages/document/content/communication/whole')
        }, {
          path: 'father-child',
          component: () => import('../pages/document/content/communication/father-child')
        }, {
          path: 'echarts',
          component: () => import('../pages/document/content/Echarts/echarts')
        }, {
          path: 'summary',
          component: () => import('../pages/document/content/avue/components/summary')
        }, {
          path: 'test',
          component: () => import('../pages/document/content/avue/components/test')
        }, {
          path: 'avueForm',
          component: () => import('../pages/document/content/avue/components/form')
        }, {
          path: 'avueTable',
          component: () => import('../pages/document/content/avue/components/table')
        }, {
          path: 'computed',
          component: () => import('../pages/document/content/computed/index')
        }, {
          path: 'style',
          component: () => import('../pages/document/content/style/index')
        }, {
          path: 'render',
          component: () => import('../pages/document/content/render/index')
        }, {
          path: 'listRender',
          component: () => import('../pages/document/content/listRender/index')
        }, {
          path: 'event',
          component: () => import('../pages/document/content/event/index')
        }, {
          path: 'form',
          component: () => import('../pages/document/content/form/index')
        }]
      },
    ]
  },
  {
    path: '/mobile',
    component: Mobile,
  }
];

export default routes;
