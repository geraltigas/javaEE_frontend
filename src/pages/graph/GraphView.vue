<template>
  <div class="view_container">
    <HeaderView></HeaderView>
    <v-chart class="chart" :option="option" @click="onClick"/>
    <el-button class="button" type="primary" @click="buttonClick">Detail</el-button>
    <Footer></Footer>
  </div>
</template>

<script>

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {GraphChart} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent
} from "echarts/components";
import {GET_GRAPH} from "@/utils/api/graph/graph";
import {LINE_STYLE, NODE_STYLE, PRINT} from "@/utils/config";
import VChart from "vue-echarts";
import HeaderView from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

use([
  CanvasRenderer,
  GraphChart,
  TitleComponent,
  TooltipComponent
]);

export default {
  name: "GraphView",
  components: {Footer, HeaderView, VChart},
  watch: {
    $route :{
      handler: function () {
        this.node_name = this.$route.params.node_name
        this.init(this.node_name)
      },
      immediate: true
    }
  },
  methods:{
    init(name) {
      GET_GRAPH({name:name}).then(response=>{
        PRINT("get graph: ", response)
        this.option.series[0].data = response.knowledges.map(knowledge => {
          return {
            name: knowledge.name,
            id: knowledge.id+"",
            description: knowledge.description,
            foreignId: knowledge.foreignId,
            symbolSize: knowledge.name === name ? 100 : 70,
            itemStyle: NODE_STYLE(knowledge,name)
          };
        })
        this.option.series[0].links = [...response.relations].map(item => {
          return {
            source: item.start+"",
            target: item.end+"",
            type: item.type,
            description: item.description,
            label: {
              show: true,
              formatter: item => item.data.type
            },
            lineStyle: LINE_STYLE(item)
          }
        })
        return response.data;
      })
    },
    buttonClick() {
      if (this.show_data !== null) {
        // TODO nav to knowledge detail page
        this.$router.push({path: "/knowledge/"+this.show_data.name})
      }
    },
    onClick(param) {
      if (param.dataType === "node") {
        this.nodeClick(param);
      }else {
        this.edgeClick(param);
      }
    },
    nodeClick(param) {
      this.show_data = param.data;
      this.show_mode = 1;
      if (this.node_name !== this.show_data.name) {
        this.$router.push({path: '/graph/' + this.show_data.name})
      }
      PRINT("node click: ", param)
    },
    edgeClick(param) {
      // this.show_data = param.data;
      // this.show_mode = 2;
      PRINT("edge click: ", param)
    }
  },
  beforeRouteUpdate (to, from, next) {
    next()
  },
  beforeMount() {
    console.log("init node: ", this.node_name)
    this.init(this.node_name);
  },
  data() {
    return {
      node_name: "",
      option: {
        title: {
          text: "Knowledge Graph",
          left: "left"
        },
        tooltip: {
          formatter: function (params) {
            return "id: " + params.data.id + '<br>'+ "name: " + params.data.name;
          }},
        animationDurationUpdate: 500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            name: "Knowledge Graph",
            type: "graph",
            layout: 'force',
            symbolSize: 70,
            roam: true,
            focusNodeAdjacency: true,
            draggable: true,
            label: {
              show: true,
              fontSize: 20
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 20,
                  color: '#000'
                },
              }
            },
            categories: [],
            data: [],
            // links: [],
            links: [],
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            },
            force: {
              repulsion: 200,
              gravity: 0.02,
              edgeLength: 200,
              layoutAnimation: true,
            },
          }
        ]
      },
    }
  },
}
</script>

<style scoped>
.button {
  position: absolute;
  top: 100px;
  right: 10px;
}
.chart {
  height: 90%;
  width: 100%;
  padding: 1vw 0 0 1vw;
}
.view_container {
  height: 90%;
  width: 98%;
}
</style>