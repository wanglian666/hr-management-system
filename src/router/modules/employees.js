// 导出员工的路由规则

import Layout from '@/layout'

export default {
  path: '/employees', // 路径
  name: 'employees',
  component: Layout,
  // 配置二级路由
  children: [{
    // path 什么都不写的时候，表示该路由为当前二级路由的默认路由
    path: '',
    component: () => import('@/views/employees'),
    meta: {
      // 左侧导航会读取我们的路由里meta的title作为显示菜单名称
      title: "员工管理",
      icon: 'people'

    }
  }]

}
