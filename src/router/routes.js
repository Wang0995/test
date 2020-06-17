import DocumentPage from '../pages/document/index'
import HomePage from '../pages/home/index'


const routes =[
  //将根URL加入到路由表并声明对应Hello组件.
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/document',
    component: DocumentPage,
    children: [{
      path: '/',
      component: () => import('../pages/document/content/welcome/homePage'),
    }, {
      path: 'start',
      component: () => import('../pages/document/content/start/start'),
    },{
      path: 'router',
      component: () => import('../pages/document/content/router/router'),
      children: [{
        path: '/',
        component: () => import('../pages/document/content/router/components/About'),
      },{
        path: 'welcome',
        component: () => import('../pages/document/content/router/components/HelloWorld'),
      },{
        path: 'param',
        component: () => import('../pages/document/content/router/components/Param'),
      },{
        //若在path后添加/:id，则网址会拼接id，刷新时id不会消失；若不添加，不会拼接id，刷新页面也会消失id
        path: 'paramDetails',
        component: () => import('../pages/document/content/router/components/paramdetails'),
        name: 'paramDetails',
      },{
        path: 'protect',
        component: () => import('../pages/document/content/router/components/protect'),
      }]
    },{
      path: 'store',
      component: () => import('../pages/document/content/store/store'),
    },{
      path: 'refs',
      component: () => import('../pages/document/content/communication/refs')
    },{
      path: 'center',
      component: () => import('../pages/document/content/communication/center')
    },{
      path: 'whole',
      component: () => import('../pages/document/content/communication/whole')
    },{
      path: 'father-child',
      component: () => import('../pages/document/content/communication/father-child')
    },{
      path: 'echarts',
      component: () => import('../pages/document/content/Echarts/echarts')
    }]
  },
];

export default routes;
