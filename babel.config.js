module.exports = {
    presets: [
        "@vue/cli-plugin-babel/preset"
    ],
    // 按需 element-ui 引入配置
    plugins: [
        [
            "component",
            {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk"
            }
        ]
    ]
};
