import Hello from '../components/HelloWorld'
import About from '../components/About'
import Param from '../components/Param'
import paramdetails from '../components/paramdetails'
import DocumentPage from '../pages/document/index'

const routes =[
  //将根URL加入到路由表并声明对应Hello组件.
  { path: '/', component: Hello },
  { path: '/about', component: About },
  { path: '/param', component: Param },
  { path: '/Paramdetails/:id', component: paramdetails, name: 'Paramdetails'},
  { path: '/document', component: DocumentPage }
];

export default routes;
