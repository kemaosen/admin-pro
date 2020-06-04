export const option = {
  color: [ "#FFFF8D", "#FF5722", "#FFC107", "#FF9600", "#737277" ],
  title: {
    show: true,
    text: "",
    left: "center",
    textStyle: {
      fontSize: "12",
      color: "#9B7A3A"
    },
    bottom: "25px"
  },
  tooltip: {
    formatter: function(params, ticket, callback) {
      // 根据业务自己拓展要显示的内容
      let res = "";
      const name = params.name;
      let value = params.value;
      const type = params.dataType;
      switch (type) {
        case "node":
          value = value ? ` ${value}` : "";
          res = `${name}<span style="color:#FFDF00">${value}</span>`;
          break;
        case "edge":
          if (value) {
            const status = value.split("|");
            if (status.length === 1) {
              res = `<div  class="text-green" style="border-bottom: 1px solid #424242;padding-bottom: 7px;margin-bottom: 7px">
                    ${params.data.source} <span class="text-grey-5"> > </span> ${params.data.target}
                    </div><div class="text-grey-5">
                    数量：<span style="color:#FFDF00">${value}</span>
                    </div>
                    `;
            } else {
              res = `
                <div style="display:inline-block" class="${status[0] ? "text-green" : "text-red"}">
                    ${params.data.source}<br />
                    <span class="text-grey-5">销售：${status[0] ? status[0] : "0"}</span>
                </div>
                <div style="display:inline-block">></div>
                <div style="display:inline-block" class="${status[1] ? "text-green" : "text-red"}">
                    ${params.data.target}<br />
                    <span class="text-grey-5">购买：${status[1] ? status[1] : "0"}</span>
                    </div>
                `;
            }
          }
          break;
      }
      return res;
    }
  },

  toolbox: {
    show: true,
    top: 10,
    right: 40,
    feature: {
      saveAsImage: {
        show: true,
        name: "关系图",
        backgroundColor: "black",
        icon: "image://statics/picture.svg"
      }
    }
  },
  animationEasingUpdate: "quinticInOut",
  legend: {
    show: false,
    top: 10,
    icon: "circle",
    textStyle: {
      color: "#757575",
      fontSize: 13
    }
  },
  series: [ {
    name: "流通企业",
    type: "graph",
    edgeSymbol: [ "none", "arrow" ],
    layout: "force",
    force: {
      edgeLength: [ 20, 35 ],
      repulsion: 200,
      layoutAnimation: true,
      gravity: 0.5
    },
    data: [],
    animationThreshold: 300,
    animationDuration: 100,
    links: [],
    categories: [
      { name: "该企业" },
      { name: "上游" },
      { name: "下游" }
    ],
    roam: true,
    draggable: true,
    symbolSize: 12,
    focusNodeAdjacency: true,
    itemStyle: {
      normal: {
        borderColor: "#E58980",
        opacity: 0.8,
        borderWidth: 1
      }
    },
    label: {
      show: true,
      position: "right",
      formatter: "{b}",
      color: "#979797",
      fontSize: 10
    },
    lineStyle: {
      color: "#F0E68C",
      opacity: 0.5,
      curveness: 0.2
    },
    emphasis: {
      lineStyle: {
        width: 3
      },
      label: {
        show: false
      }
    }
  } ]
};
