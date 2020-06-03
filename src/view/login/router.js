export const navRouter = [
    { // 系统设置
        path: "/setting",
        component: "Layout",
        meta: { title: "系统设置", icon: "enterprise" },
        children: [
            {
                path: "/setting/managerList",
                component: "System/Manager.vue",
                meta: { title: "用户管理" }
            }
        ]
    },
    { // 商城
        path: "/shop",
        component: "Layout",
        meta: { title: "商城设置", icon: "supervise" },
        children: [
            {
                path: "/shop/shopList",
                component: "Shop/shop.vue",
                meta: { title: "商品管理", icon: "supervise" }
            }
        ]
    },
    { // 视频管理
        path: "/video",
        component: "Layout",
        meta: { title: "视频设置", icon: "" },
        children: [
            {
                path: "/video/videos",
                component: "Video/video.vue",
                meta: { title: "视频管理" },
                children: [
                    {
                        path: "/video/videos/videoItem",
                        component: "Video/videoItem.vue",
                        meta: { title: "视频Item管理" },
                        children: [
                            {
                                path: "/video/videos/videoItem",
                                component: "Video/videoItem.vue",
                                meta: { title: "视频Item管理" }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    { // 视频管理
        path: "/video",
        component: "Layout",
        meta: { title: "视频设置", icon: "registered" },
        children: [
            {
                path: "/video/videos",
                component: "Video/video.vue",
                meta: { title: "视频管理" },
                children: [
                    {
                        path: "/video/videos/videoItem",
                        component: "Video/videoItem.vue",
                        meta: { title: "视频Item管理" },
                        children: [
                            {
                                path: "/video/videos/videoItem",
                                component: "Video/videoItem.vue",
                                meta: { title: "视频Item管理" }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    { // 视频管理
        path: "/video",
        component: "Layout",
        meta: { title: "视频设置", icon: "registered" },
        children: [
            {
                path: "/video/videos",
                component: "Video/video.vue",
                meta: { title: "视频管理" },
                children: [
                    {
                        path: "/video/videos/videoItem",
                        component: "Video/videoItem.vue",
                        meta: { title: "视频Item管理" },
                        children: [
                            {
                                path: "/video/videos/videoItem",
                                component: "Video/videoItem.vue",
                                meta: { title: "视频Item管理" }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    { // 视频管理
        path: "/video",
        component: "Layout",
        meta: { title: "视频设置", icon: "registered" },
        children: [
            {
                path: "/video/videos",
                component: "Video/video.vue",
                meta: { title: "视频管理" },
                children: [
                    {
                        path: "/video/videos/videoItem",
                        component: "Video/videoItem.vue",
                        meta: { title: "视频Item管理" },
                        children: [
                            {
                                path: "/video/videos/videoItem",
                                component: "Video/videoItem.vue",
                                meta: { title: "视频Item管理" }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    { // 视频管理
        path: "/video",
        component: "Layout",
        meta: { title: "视频设置", icon: "registered" },
        children: [
            {
                path: "/video/videos",
                component: "Video/video.vue",
                meta: { title: "视频管理" },
                children: [
                    {
                        path: "/video/videos/videoItem",
                        component: "Video/videoItem.vue",
                        meta: { title: "视频Item管理" },
                        children: [
                            {
                                path: "/video/videos/videoItem",
                                component: "Video/videoItem.vue",
                                meta: { title: "视频Item管理" }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
