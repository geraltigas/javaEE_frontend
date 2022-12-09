<template>
  <div>
    <el-input class="head_input" v-model="search_node_name" placeholder="search node name" @keyup.enter.native="handleEnter"></el-input>
    <v-chart class="chart" :option="option" @click="onClick"/>
    <div class="graph_panel">
      <div class="add">
        <el-radio-group v-model="radio">
          <el-radio :label="1">Node</el-radio>
          <el-radio :label="2">Edge</el-radio>
        </el-radio-group>
        <button @click="addData">Add {{radio===1?"Node":"Edge"}}</button>
        <div>
          <div v-if="radio===1">
            <el-input v-model="node_name" placeholder="node name"/>
            <el-input
                type="textarea"
                placeholder="description"
                v-model="description"
                maxlength="30"
                show-word-limit
            />
          </div>
          <div v-else>
            <el-input v-model="source_id" placeholder="source node id"/>
            <el-input v-model="target_id" placeholder="target node id"/>
            <el-radio-group v-model="edge_type">
              <el-radio :label="1">include</el-radio>
              <el-radio :label="2">preKnowledge</el-radio>
              <el-radio :label="3">common</el-radio>
              <el-radio :label="4">associated</el-radio>
            </el-radio-group>
            <el-input
                type="textarea"
                placeholder="description"
                v-model="description"
                maxlength="30"
                show-word-limit
            />
          </div>
        </div>
      </div>
      <div class="update" v-if="show_mode !== 0">
        <div class="update_node" v-if="show_mode===1">
          <h2>Update Node</h2>
          <h3>Node Id: {{show_data.id}}</h3>
          <h3>Node Name: {{show_data.name}}</h3>
          <h4>Node Description: {{show_data.description}}</h4>
        </div>
        <div class="update_edge" v-else>
          <h2>Update Edge</h2>
          <h3>Source Node Id: {{show_data.source}}</h3>
          <h3>Target Node Id: {{show_data.target}}</h3>
          <h3>Edge Type: {{show_data.type}}</h3>
          <h4>Edge Description: {{show_data.description}}</h4>
        </div>
      </div>
      <div v-else>
        none
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart {
  height: 500px;
  width: 100%;
}
.graph_panel{
  width: 100%;
  height: 190px;
  background-color: #cdffe9;
  display: flex;
  flex-direction: row;
}
.add {
  width: 50%
}
.update {
  width: 50%
}
.head_input {
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  z-index: 100;
}
</style>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {GraphChart} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent
} from "echarts/components";
import VChart from "vue-echarts";
import {ADD_NODE, ADD_RELATION, GET_GRAPH} from "@/utils/api/graph/graph";
import {PRINT} from "@/utils/config";

use([
  CanvasRenderer,
  GraphChart,
  TitleComponent,
  TooltipComponent
]);

export default {
  name: "HelloWorld",
  props: {
    // node_name_p: String
  },
  watch: {
    $route :{
      handler: function () {
        console.log("router_param" ,this.$route.params.node_name)
        PRINT("inside watch")
        this.node_name_p = this.$route.params.node_name
        this.init(this.node_name_p)
      },
      immediate: true
    }
  },
  components: {
    VChart
  },
  provide: {
    // [THEME_KEY]: "dark"
  },
  beforeMount() {
    console.log("init node: ", this.node_name_p)
    this.init(this.node_name_p);
  },
  data() {
    return {
      node_name_p: "",
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
                // formatter(x) {
                //   console.log("formatter: ",x)
                //   return x.data.type;
                // }
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
      node_name: "",
      radio:1,
      description:"",
      source_id:"",
      target_id:"",
      edge_type:1,
      show_data:{},
      show_mode:0,
      search_node_name:"",
    };
  },
  methods: {
    init(name) {
      GET_GRAPH({name:name}).then(response=>{
        PRINT("get graph: ", response)
            this.option.series[0].data = response.knowledges.map(knowledge => {
              return {
                name: knowledge.name,
                id: knowledge.id+"",
                description: knowledge.description,
                symbolSize: 70,
                itemStyle: {
                  color: "#0090ff"
                }
              };
            })
            this.option.series[0].links = [...response.includes,...response.associateds,...response.commons,...response.preKnowledges].map(item => {
              return {
                source: item.source+"",
                target: item.target+"",
                type: item.type,
                description: item.description,
                label: {
                  show: true,
                  formatter: item => item.data.type
                },
                lineStyle: {
                  width: 5,
                  curveness: 0.2,
                  color: (() => {
                    switch (item.type) {
                      case "include":
                        return "#0090ff";
                      case "associated":
                        return "#ff0000";
                      case "common":
                        return "#00ff00";
                      case "preKnowledge":
                        return "#ff00ff";
                      default:
                        return "#000000";
                    }
                  })()
                }
                // },

              }
            })
            return response.data;
      })
      // this.$refs.axios.get("knowledge?name="+name).then(response => {
      //   this.option.series[0].data = response.data.knowledges.map(knowledge => {
      //     return {
      //       name: knowledge.name,
      //       id: knowledge.id+"",
      //       description: knowledge.description,
      //       symbolSize: 70,
      //       itemStyle: {
      //         color: "#0090ff"
      //       }
      //     };
      //   });
      //   this.option.series[0].links = [...response.data.includes,...response.data.associateds,...response.data.commons,...response.data.preKnowledges].map(item => {
      //     return {
      //       source: item.source+"",
      //       target: item.target+"",
      //       type: item.type,
      //       description: item.description,
      //       label: {
      //         show: true,
      //         formatter: item => item.data.type
      //       },
      //       lineStyle: {
      //         width: 5,
      //         curveness: 0.2,
      //         color: (() => {
      //           switch (item.type) {
      //             case "include":
      //               return "#0090ff";
      //             case "associated":
      //               return "#ff0000";
      //             case "common":
      //               return "#00ff00";
      //             case "preKnowledge":
      //               return "#ff00ff";
      //             default:
      //               return "#000000";
      //           }
      //         })()
      //       }
      //       // },
      //
      //     }
      //   })
      //
      //   return response.data;
      // });
    },
    handleEnter() {
      this.init(this.search_node_name)
    },
    addData() {
      if (this.radio === 1) {
        ADD_NODE({name: this.node_name, description: this.description}).then(response => {
          this.node_name = "";
          this.description = "";
          console.log(typeof response.data.id);
          this.option.series[0].data = this.option.series[0].data.concat({
            name: response.name+"",
            id: response.id+"",
            description: response.description,
            symbolSize: 70,
            itemStyle: {
              color: "#0090ff"
            }
          });
        })
        // this.$refs.axios.post("knowledge", {
        //   name: this.node_name,
        //   description: this.description
        // }).then((response) => {
        //   this.node_name = "";
        //   this.description = "";
        //   console.log(typeof response.data.id);
        //   this.option.series[0].data = this.option.series[0].data.concat({
        //     name: response.data.name+"",
        //     id: response.data.id+"",
        //     description: response.data.description,
        //     symbolSize: 70,
        //     itemStyle: {
        //       color: "#0090ff"
        //     }
        //   });
        // });
      } else {
        ADD_RELATION({
          knowledgeId: parseInt(this.source_id),
          relatedId: parseInt(this.target_id),
          type: (() => {
            switch (this.edge_type) {
              case 1:
                return "include";
              case 2:
                return "associated";
              case 3:
                return "common";
              case 4:
                return "preKnowledge";
              default:
                return "include";
            }
          })(),
          description: this.description
        }).then(response => {
          console.log({
            source: response[0].startNodeId,
            target: response[0].endNodeId,
            type: response[0].type,
            description: response[0].description,
          })
          this.option.series[0].links = this.option.series[0].links.concat({
            source: response[0].startNodeId+"",
            target: response[0].endNodeId+"",
            type: response[0].type,
            description: response[0].description,
            label: {
              show: true,
              formatter: item => {
                return item.data.type
              }
            },
            lineStyle: {
              width: 5,
              curveness: 0.2,
              color: (() => {
                switch (response[0].type) {
                  case "include":
                    return "#0090ff";
                  case "associated":
                    return "#ff0000";
                  case "common":
                    return "#00ff00";
                  case "preKnowledge":
                    return "#ff00ff";
                  default:
                    return "#000000";
                }
              })()
            }
          });
          this.source_id = "";
          this.target_id = "";
          this.description = "";
        })

        // this.$refs.axios.post("relation", {
        //   knowledgeId: parseInt(this.source_id),
        //   relatedId: parseInt(this.target_id),
        //   type: (() => {
        //     switch (this.edge_type) {
        //       case 1:
        //         return "include";
        //       case 2:
        //         return "associated";
        //       case 3:
        //         return "common";
        //       case 4:
        //         return "preKnowledge";
        //       default:
        //         return "include";
        //     }
        //   })(),
        //   description: this.description
        // }).then(response => {
        //   console.log({
        //     source: response.data[0].startNodeId,
        //     target: response.data[0].endNodeId,
        //     type: response.data[0].type,
        //     description: response.data[0].description,
        //   })
        //   this.option.series[0].links = this.option.series[0].links.concat({
        //     source: response.data[0].startNodeId+"",
        //     target: response.data[0].endNodeId+"",
        //     type: response.data[0].type,
        //     description: response.data[0].description,
        //     label: {
        //       show: true,
        //       formatter: item => {
        //         return item.data.type
        //       }
        //     },
        //     lineStyle: {
        //       width: 5,
        //       curveness: 0.2,
        //       color: (() => {
        //         switch (response.data[0].type) {
        //           case "include":
        //             return "#0090ff";
        //           case "associated":
        //             return "#ff0000";
        //           case "common":
        //             return "#00ff00";
        //           case "preKnowledge":
        //             return "#ff00ff";
        //           default:
        //             return "#000000";
        //         }
        //       })()
        //     }
        //   });
        //   this.source_id = "";
        //   this.target_id = "";
        //   this.description = "";
        // });
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
    },
    edgeClick(param) {
      this.show_data = param.data;
      this.show_mode = 2;
    }
  },

}
</script>

