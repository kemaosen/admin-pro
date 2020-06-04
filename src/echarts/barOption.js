export const option = {
  tooltip: {
    trigger: "axis",
    triggerOn: "mousemove|click",
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: (data) => {
      const picHtml = `<span style="width: 10px; display: inline-block; height: 10px; border-radius: 50%; background-color: #00FCAE;"></span>`;
      return `${data[0].axisValueLabel}<br/>${picHtml} 数据：${data[0].value}`;
    },
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderColor: "#ededed",
    borderWidth: 1
  },
  title: {
    show: true, // 是否显示
    text: "追溯数据量", // 大标题
    textStyle: {
      width: "100%",
      fontSize: 12,
      color: "#00738C", // 文字颜色
      fontStyle: "normal" // italic斜体  oblique倾斜
    },
    x: "center",
    y: "top"

  },
  grid: {
    left: "2%",
    right: "4%",
    bottom: "15%",
    top: "18%",
    containLabel: true
  },
  // legend: {
  //     data: [ "0", "0" ],
  //     right: "center",
  //     top: 12,
  //     textStyle: {
  //         color: "#fff",
  //         fontSize: 14
  //     },
  //     itemWidth: 33,
  //     itemHeight: 14,
  //     itemGap: 35
  // },
  xAxis: {
    type: "category",
    data: [ "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019" ],
    axisLine: {
      lineStyle: {
        show: true,
        color: "#3B97E2"

      }
    },
    axisLabel: {
      rotate: "45",
      margin: "20",
      align: "center",
      interval: "auto",
      textStyle: {
        fontFamily: "Microsoft YaHei",
        color: "#00738C",
        fontSize: 14
      }
    }
  },

  yAxis: {
    type: "value",
    // name: "单位：个",
    nameTextStyle: {
      color: "#57C9FD",
      fontSize: 14,
      lineHeight: 25
    },
    // max: '800',
    axisLine: {
      show: true,
      lineStyle: {
        width: "30px",
        color: "#3B97E2"
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed", // 'solid' 'dashed' 'dotted'
        color: "#135DA2"
      }
    },
    axisLabel: {
      textStyle: {
        fontFamily: "Microsoft YaHei",
        color: "#00738C",
        fontSize: 14
      }
    }
  },
  series: [ {
    name: "",
    type: "bar",
    barWidth: "80%",
    itemStyle: {
      normal: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#00F3AC" },
            { offset: 1, color: "#006789" }
          ],
          global: false, // 缺省为 false
          barBorderRadius: 1
        }
      }
    },
    data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  } ]
};
