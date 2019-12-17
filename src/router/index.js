import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Index from "@/view/index";
import first from "@/view/first";
import Goods from "@/view/goods";
import Login from "@/view/login";
import Xiaomi from "@/components/index/xiaomi";
import Xmshangou from "@/components/index/xmshangou";
import Iphone from "@/components/index/iphone";
import Goodsdetail from "@/view/goodsdetail";
import Error from "@/view/error";
import page from "@/view/page";
import a from "@/components/page1/a";
import b from "@/components/page1/b";
import c from "@/components/page1/c";
import page1 from "@/view/page1";
import t1 from "@/components/page2/t1";
import t2 from "@/components/page2/t2";
import car from "@/view/car";
Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [{
            path: "/page",
            name: "page",
            component: page,
            children: [{
                    path: "",
                    //path不写name和父相同 就设置为缺省
                    name: "page",
                    component: a,
                    meta: {
                        Index: 0
                    }
                },
                {
                    path: "/a",
                    //path不写name和父相同 就设置为缺省
                    name: "a",
                    component: a,
                    meta: {
                        index: 0
                    }
                },
                {
                    path: "/b",
                    name: "b",
                    component: b,
                    meta: {
                        index: 1
                    }
                },
                {
                    path: "/c",
                    name: "c",
                    component: c,
                    meta: {
                        index: 2
                    }
                }
            ]
        },
        {
            path: "/page1",
            name: "page1",
            component: page1,
            children: [{
                path: "",
                name: "page",
                components: {
                    a: t1,
                    b: t2
                },
            }]
        },
        {
            path: "/",
            name: "first",
            component: first,
            meta: {
                showhead: true,
                showfoot: true,
                title: '首页'
            },
            children: [{
                    path: "",
                    //path不写name和父相同 就设置为缺省
                    name: "first",
                    component: Xiaomi,
                    meta: {
                        showhead: true,
                        showfoot: true,
                        title: '首页'
                    }
                },
                {
                    path: "xiaomi",
                    //path不写name和父相同 就设置为缺省
                    name: "xiaomi",
                    component: Xiaomi,
                    meta: {
                        showhead: true,
                        showfoot: true,
                        title: '小米'
                    }
                },
                {
                    path: "xmshangou",
                    name: "xmshangou",
                    component: Xmshangou,
                    meta: {
                        showhead: true,
                        showfoot: true,
                        title: '闪购'
                    }
                },
                {
                    path: "iphone",
                    name: "iphone",
                    component: Iphone,
                    meta: {
                        showhead: true,
                        showfoot: true,
                        title: '手机'
                    }
                }
            ]
        },
        {
            path: "/goods",
            name: "goods",
            component: Goods,
            meta: {
                showhead: true,
                showfoot: true,
                title: '商品'
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                showhead: false,
                showfoot: false,
                title: '登录'
            }
        },
        {
            path: "/index",
            name: "index",
            component: Index,
            meta: {
                showhead: true,
                showfoot: true,
                title: '首页'
            }
        },
        {
            path: '/car',
            name: 'car',
            component: car,
            meta: {
                showhead: true,
                showfoot: true,
                isLogin: true,
                title: '首页'
            }
        },
        {
            path: "/goodsdetail/:id",
            name: "goodsdetail",
            component: Goodsdetail,
            meta: {
                showhead: true,
                showfoot: true,
                title: '详情'
            }
        },

        {
            path: "*",
            // redirect: (to) => {
            //     if (to.path == "/aaa") {
            //         return '/'
            //     } else if (to.path == "/bbb") {
            //         return '/goods'
            //     } else if (to.path == "/ccc") {
            //         return '/login'
            //     } else {
            //         return '/index'
            //     }
            // }
            component: Error
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        let t1 = router.app.$local.fetch("vue12")
        if (t1.userTel) {
            next()
        } else {
            router.push('/login')
        }
    } else {
        next()
    }
})
router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = "呵呵呵"
    }
})
export default router;