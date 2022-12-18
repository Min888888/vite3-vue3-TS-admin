import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useSystem } from '@/store/system'
import nprogress from 'nprogress' //过度条

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/layout/Login/Login.vue'),
    },
    {
        path: '/',
        name: 'Index',
        component: () => import('@/layout/Index.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('@/view/Home/Home.vue'),
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/layout/404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),  //history
    routes
})

router.beforeEach(async (to, from) => {
    nprogress.start()
    console.log(to);
    if (to.name == 'Home') {
        let system = useSystem();
        system.isLoading = true;
    }

    //pinia仓库可以最早出现的地方，路由初始化完毕
    // if (to.name == '404' && from.name == 'Login') {
    //     //处理404问题，并且从login跳转任何404页面重置为Login页面
    //     return { name: 'Login' };
    // } else if (store.isLogin) {
    //     //不是404，登录状态在，正常跳转
    //     return true;
    // } else if (isUserTime()) {
    //     //刷新进入，判断是否过期了登录时间，Cookie中是否存在密码
    //     //如果存在免登录，登录过程存在路由不存在问题则404，否则正常跳转
    //     let exist = await store.Login(to);
    //     if (!exist) return { name: '404' };
    // } else if (to.name !== "Login" && !store.isLogin) return { name: "Login" }; //第一次登录
});

router.afterEach((to, from) => {
    nprogress.done();
})


export default router
