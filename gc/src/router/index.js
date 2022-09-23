import { createRouter, createWebHashHistory } from 'vue-router'
import Tab from '../components/tab.vue'
import Home from '../components/Home.vue'
import Shoucang from '../components/Shoucang.vue'
import Xinfeng from '../components/Xinfeng.vue'
import Tongzhi from '../components/Tongzhi.vue'
import Me from '../components/Me.vue'
import Comment from '../components/tongzhi/comment.vue'
import Guanzhu_me from '../components/tongzhi/guanzhu_me.vue'
import System_notice from '../components/tongzhi/system_notice.vue'
import Zan from '../components/tongzhi/zan.vue'


const routes = [
    { path: '/', redirect: '/tab' },
    {
        path: '/tab',
        component: Tab,
        redirect: '/tab/home',
        children: [
            { path: 'home', component: Home },
            { path: 'shoucang', component: Shoucang },
            { path: 'xinfeng', component: Xinfeng },
            {
                path: 'tongzhi',
                component: Tongzhi,
                redirect: '/tab/tongzhi/comment',
                children: [
                    { path: 'comment', component: Comment },
                    { path: 'guanzhu_me', component: Guanzhu_me },
                    { path: 'system_notice', component: System_notice },
                    { path: 'zan', component: Zan },
                ]
            },
            { path: 'me', component: Me },

        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router