export const option = {
    top: "3%",
    bottom: "3%",
    // eslint-disable-next-line standard/object-curly-even-spacing
    tooltip: { formatter: "{b}" },
    visualMap: {
        show: false,
        min: 0,
        max: 500,
        left: "left",
        top: "bottom",
        text: [ "高", "低" ], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [ 1 ],
        inRange: {
            color: [ "#0f0c29", "#302b63", "#24243e" ] // 黑紫黑
        }
    },
    geo: {
        map: "shanghai",
        show: true,
        label: {
            normal: {
                show: true,                 // 控制是否显示各个地名[浦东新区]
                color: "#fff"
            },
            emphasis: {
                show: false
            }
        },
        zoom: 1,
        zlevel: 0,
        roam: true, // 是否允许缩放
        layoutCenter: [ "46%", "50%" ], // 地图位置
        layoutSize: "99%",
        itemStyle: {
            normal: {
                areaColor: "#031525",
                borderColor: "#3B5077"
            },
            emphasis: {
                areaColor: "#2B91B7"
            }
        }
    },
    legend: {
        show: true,
        data: [],
        selected: {}
    },
    series: [ {
        name: "SH",
        type: "map",
        mapType: "上海",
        zlevel: 1,
        geoIndex: 0,
        data: [
            { name: "黄浦区", value: [ 121.490317, 31.222771 ] },
            { name: "徐汇区", value: [ 121.43752, 31.179973 ] },
            { name: "长宁区", value: [ 121.4222, 31.218123 ] },
            { name: "静安区", value: [ 121.448224, 31.229003 ] },
            { name: "普陀区", value: [ 121.392499, 31.241701 ] },
            { name: "虹口区", value: [ 121.491832, 31.26097 ] },
            { name: "杨浦区", value: [ 121.522797, 31.270755 ] },
            { name: "闵行区", value: [ 121.375972, 31.111658 ] },
            { name: "宝山区", value: [ 121.489934, 31.398896 ] },
            { name: "嘉定区", value: [ 121.250333, 31.383524 ] },
            { name: "浦东新区", value: [ 121.567706, 31.245944 ] },
            { name: "金山区", value: [ 121.330736, 30.724697 ] },
            { name: "松江区", value: [ 121.223543, 31.03047 ] },
            { name: "青浦区", value: [ 121.113021, 31.151209 ] },
            { name: "奉贤区", value: [ 121.458472, 30.912345 ] },
            { name: "崇明区", value: [ 121.397516, 31.626946 ] } ]
    }, {
        name: "数值",
        type: "scatter",
        coordinateSystem: "geo",
        data: []
    },
    {
        name: "数值2",
        type: "scatter",
        coordinateSystem: "geo",
        data: []
    }
    ]
};
