export const navRouter = [
    { // 系统设置
        path: "/setting",
        component: "Layout",
        meta: { title: "系统设置", icon: "el-icon-setting" },
        children: [
            {
                path: "/setting/managerList",
                component: "view/System/Manager.vue",
                meta: { title: "用户管理" }
            }
        ]
    },
    { // 商城
        path: "/shop",
        component: "Layout",
        meta: { title: "商城设置", icon: "el-icon-s-shop" },
        children: [
            {
                path: "/shop/shopList",
                component: "view/Shop/shop.vue",
                meta: { title: "商品管理" }
            }
        ]
    },
    { // 视频管理
        path: "/video",
        component: "Layout",
        meta: { title: "视频设置", icon: "el-icon-video-camera-solid" },
        children: [
            {
                path: "/video/videos",
                component: "view/Video/video.vue",
                meta: { title: "视频管理" },
                children: [
                    {
                        path: "/video/videos/videoItem",
                        component: "view/Video/videoItem.vue",
                        meta: { title: "视频Item管理" },
                        children: [
                            {
                                path: "/video/videos/videoItem",
                                component: "view/Video/videoItem.vue",
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
        meta: { title: "视频设置", icon: "el-icon-video-camera-solid" },
        children: [
            {
                path: "/video/videos",
                component: "view/Video/video.vue",
                meta: { title: "视频管理" },
                children: [
                    {
                        path: "/video/videos/videoItem",
                        component: "view/Video/videoItem.vue",
                        meta: { title: "视频Item管理" },
                        children: [
                            {
                                path: "/video/videos/videoItem",
                                component: "view/Video/videoItem.vue",
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
        meta: { title: "视频设置", icon: "el-icon-video-camera-solid" },
        children: [
            {
                path: "/video/videos",
                component: "view/Video/video.vue",
                meta: { title: "视频管理" },
                children: [
                    {
                        path: "/video/videos/videoItem",
                        component: "view/Video/videoItem.vue",
                        meta: { title: "视频Item管理" },
                        children: [
                            {
                                path: "/video/videos/videoItem",
                                component: "view/Video/videoItem.vue",
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
        meta: { title: "视频设置", icon: "el-icon-video-camera-solid" },
        children: [
            {
                path: "/video/videos",
                component: "view/Video/video.vue",
                meta: { title: "视频管理" },
                children: [
                    {
                        path: "/video/videos/videoItem",
                        component: "view/Video/videoItem.vue",
                        meta: { title: "视频Item管理" },
                        children: [
                            {
                                path: "/video/videos/videoItem",
                                component: "view/Video/videoItem.vue",
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
        meta: { title: "视频设置", icon: "el-icon-video-camera-solid" },
        children: [
            {
                path: "/video/videos",
                component: "view/Video/video.vue",
                meta: { title: "视频管理" },
                children: [
                    {
                        path: "/video/videos/videoItem",
                        component: "view/Video/videoItem.vue",
                        meta: { title: "视频Item管理" },
                        children: [
                            {
                                path: "/video/videos/videoItem",
                                component: "view/Video/videoItem.vue",
                                meta: { title: "视频Item管理" }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
