export const option = {
    backgroundColor: "#05274C",
    color: [ "#E85C62", "#76FBC0", "#35C96E", "#FCC708", "#48B188", "#5957C2", "#4A5D73" ],
    tooltip: {
        trigger: "item",
        formatter: (params) => {
            return `使用情况<br />${params.name}:${params.value}(${params.percent}%)` ;
        }
    },
    legend: {
        type: "scroll",
        orient: "vertical",
        right: 10,
        top: 20,
        bottom: 20,
        data: [ "查看企业信息", "登录", "追溯周报表之一" ],
        textStyle: {
            color: [ ]
        },
        selected: []
    },
    series: [
        {
            color: [ "#786EB0", "#5D7AD4", "#E85C62", "#FCC708", "#48B188", "#5957C2" ],
            type: "pie",
            top: "30",
            radius: [ "62", "100" ],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 120,
                    lineStyle: {
                        type: "solid"
                    }
                }
            },
            label: {
                normal: {
                    formatter: (params) => {
                        return "{b| " + params.name + "}  " + "{c|" + params.percent + "%}";
                    },
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [ 0, -70 ], // 指线上的文字向pie靠拢
                    height: 50,
                    fontSize: 12,
                    align: "center",
                    color: "#3494BD",
                    rich: {
                        b: {
                            fontSize: 12,
                            lineHeight: 20,
                            color: "#41B3DC",
                            padding: [ 0, 0, 5, 0 ]
                        },
                        c: {
                            fontSize: 20,
                            lineHeight: 20,
                            color: "orange"
                        }

                    }
                }
            },
            data: []
        }
    ]
};
