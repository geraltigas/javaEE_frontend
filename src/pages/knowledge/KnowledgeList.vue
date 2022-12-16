<template>
<div class="wrapper">
  <el-row class="row-cards row-deck" :gutter="20" >
    <el-col v-for="knowledge in knowledges.records" :key="knowledge.idKnowledge" >
      <knowledge-item :item="knowledge"></knowledge-item>
    </el-col>
  </el-row>
    <el-col>
      <div class="vertical-container text-center">
        <el-pagination class="page"
                        :hide-on-single-page="true"
                        layout="total, prev, pager, next, jumper"
                        :page-size="knowledges.size"
                        :current-page="knowledges.current"
                        :total="knowledges.total"
                        prev-text="上一页"
                        next-text="下一页"
                        @current-change="currentChange">
        </el-pagination>
      </div>
    </el-col>
</div>
</template>
<script>
import KnowledgeItem from '@/pages/knowledge/KnowledgeItem.vue'
export default {
    name: 'KnowledgeList',
    props: {
        knowledges: {
            type: Object
        }
    },
    methods: {
        currentChange(page) {
            this.$emit('currentChange', page)
        },
      click(id) {
          this.$router.push(`/knowledge/${id}`)
      }
    },
    components: {
        KnowledgeItem
    }
}
</script>
<style scoped>
.wrapper {
  max-width: 980px;
  margin: 20px auto;
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  float: none;
}
body {
  overflow-x: hidden;
}

.card {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  margin-bottom: 1.5rem;
  width: 100%;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 40, 100, 0.12);
  border-radius: 3px;
}

.card-profile .card-header {
  height: 20rem;
  background-size: cover;
}

.card-header:first-child {
  border-radius: calc(3px - 1px) calc(3px - 1px) 0 0;
}

.card-header {
  background: none;
  padding: 0.5rem 1.5rem;
  display: -ms-flexbox;
  display: flex;
  min-height: 3.5rem;
  -ms-flex-align: center;
  align-items: center;
}

.card-header {
  padding: 1.5rem 1.5rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
}

.card-body {
  -ms-flex: 1;
  flex: 1;
  margin: 0;
  padding: 1.5rem 1.5rem;
  position: relative;
}

.card-profile-img {
  max-width: 6rem;
  margin-top: -5rem;
  margin-bottom: 1rem;
  border: 3px solid #fff;
  border-radius: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.card-img-top {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.card-img-top {
  width: 100%;
  border-top-left-radius: calc(3px - 1px);
  border-top-right-radius: calc(3px - 1px);
}

.mb-3, .my-3 {
  margin-bottom: 0.75rem !important;
}

h3, .h3 {
  font-size: 1.5rem;
}

.mb-4, .my-4 {
  margin-bottom: 1rem !important;
}

.article-header-md {
  position: relative;
  line-height: 1.4em;
  height: 1.4em;
  overflow: hidden;
}

.article-header-md a {
  font-weight: bold;
  font-size: 1em;
}

.article-summary-md {
  position: relative;
  line-height: 1.4em;
  height: 4.2em;
  overflow: hidden;
}

.el-col-6 {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}
</style>
