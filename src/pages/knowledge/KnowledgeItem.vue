<template>
  <el-col v-if="true" style="margin-bottom: 20px;">
      <el-card :body-style="{ padding: '20px' }" >
        <el-col :span="4">
          <el-image :src="require(`@/assets/images/cover`+Math.floor((Math.random()*9)+1)+`.png`)" style="width:96px;height: 96px;border-radius: 10px;background: #f5f7fa;border: #f5f7fa solid 1px;" fit="cover"
                    :preview-src-list="[require(`@/assets/images/cover`+Math.floor((Math.random()*9)+1)+`.png`)]"></el-image>
        </el-col>
        <el-col :span="16" style="padding-top: 0px; ">
          <div class="text-muted summary-md">{{item.knowledgeDescription}}</div>
        </el-col>
        <el-col :span="4" style="padding-top: 30px;text-align: right;">
          <el-button @click="onClick" round>进入</el-button>
        </el-col>
        <el-col style="padding-top: 20px;font-size: 16px;line-height: 22px;font-weight: 500;margin-bottom: 4px;">
          <span v-html="item.knowledgeName"></span>
        </el-col>
        <!-- <el-col style="padding-bottom: 20px;font-size: 14px;">
          <span>{{  0 }} 篇文章</span>
        </el-col> -->
      </el-card>
  </el-col>
</template>

  <script>
  export default {
    name: 'KnowledgeItem',
    props:{
      item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      onClick(){
        this.$router.push(`/knowledge/${this.item.idKnowledge}`)
      }
    }
  }
  </script>

<style scoped>
.text-muted {
  color: #9aa0ac !important;
}

.summary-md {
  position: relative;
  line-height: 1.4em;
  /* 3 times the line-height to show 3 lines */
  height: 5.6em;
  overflow: hidden;
  word-break: break-all;
}
</style>
