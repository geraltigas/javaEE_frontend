<template>
  <div class="neo4j_test">
    <Neo4jVisualization :node_name_p="node_name"/>
  </div>
</template>

<script>


import Neo4jVisualization from "@/components/neo4j/Neo4jVisualization";
export default {
  name: "Neo4jTest",
  components: {Neo4jVisualization},
  props: {
    node_name: String
  },
  beforeMount() {
    console.log("Neo4jTest beforeMount", this.node_name)
  },

}
</script>

<style scoped>

</style>