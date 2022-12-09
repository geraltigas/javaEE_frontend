<template>
  <Neo4jTest :node_name="$route.params.node_name"></Neo4jTest>
</template>

<script>
import Neo4jTest from "@/components/neo4j/Neo4jTest.vue";

export default {
  name: "GraphView",
  components: {Neo4jTest},
  watch: {
    $route :{
      handler: function (to, from) {
        console.log("router_param" ,this.$route.params.node_name)
        this.$message.success(`watch -> ${to.path}, ${from.path}`)
      },
      immediate: true
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.$message.info(`导航守卫 -> ${to.path}, ${from.path}`)
    next()
  }
}
</script>

<style scoped>

</style>