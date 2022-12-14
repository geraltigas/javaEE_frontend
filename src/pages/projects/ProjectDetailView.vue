<template>
  <div id="project_detail" style="padding-right: 40px; padding-left: 40px; padding-bottom: 50px;">
    <HeaderView></HeaderView>
    <el-card>
      <el-descriptions class="margin-top" :column="3" border :content-style="CS" :label-style="LS" >
        <el-descriptions-item>
          <template slot="label"><i class="el-icon-notebook-1"></i>项目名</template>
          {{this.currentProject.name}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"><i class="el-icon-notebook-1"></i>更新时间</template>
          {{this.currentProject.updateTime}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"><i class="el-icon-notebook-1"></i>星标数</template>
          {{this.currentProject.starGazers}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"><i class="el-icon-notebook-1"></i>下载数</template>
          {{this.currentProject.forks}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"><i class="el-icon-notebook-1"></i>语言</template>
          <el-tag>{{currentProject.language}}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="margin-top" :column="3" border :content-style="CS" :label-style="LS" >
        <el-descriptions-item>
          <template slot="label"><i class="el-icon-notebook-1"></i>知识点</template>
          <el-tag
              v-for="(knowledege, index) in this.currentProject.knowledge"
              :key="index"
              :type="tagRowClassName(index)">
            {{knowledege.knowledgeName}}
          </el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="margin-top" :column="3" border :content-style="CS" :label-style="LS" >
        <el-descriptions-item>
          <template slot="label"><i class="el-icon-notebook-1"></i>描述</template>
          {{this.currentProject.description}}
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="margin-top" :column="3" border :content-style="CS" :label-style="LS" >
        <el-descriptions-item>
          <template slot="label"><i class="el-icon-notebook-1"></i>README</template>
          {{this.currentProject.readme}}
        </el-descriptions-item>
      </el-descriptions>

    </el-card>
    <div class="readme" v-highlight v-html="readmeText">
      {{readmeText}}
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { marked }from 'marked';
import axios from 'axios'
import HeaderView from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default {
  name: "ProjectDetail",
  components: {Footer, HeaderView},
  el: "#project_detail",
  data() {
    return {
      readmeText: '',
      currentProject: {
        id: '1',           // 项目id
        name: 'Learneur',        // 项目名
        updateTime: '2022-12-09',     // 更新时间
        link: 'https://github.com/RudeGoose/Learneur',       // 项目链接
        description: 'Leareur',    // 项目描述
        starGazers: '123',     // 星标数
        forks: '1',  // 下载数
        homePage: 'https://github.com/RudeGoose/Learneur', // 主页
        language: '',
        readme: '',  // readme文档
        knowledge: [],
        key: Date.now()
      },

      CS: {
        'text-align': 'left',  //文本居中
        'min-width': '250px',   //最小宽度
        'word-break': 'break-all',  //过长时自动换行
      },
      CS2: {
        'text-align': 'center',  //文本居中
        'min-width': '250px',   //最小宽度
        'word-break': 'break-all',  //过长时自动换行
      },
      LS: {
        'color': '#000',
        'text-align': 'left',
        'font-weight': '600',
        'height': '40px',
        'min-width': '110px',
        'word-break': 'keep-all',
        'width': '150px'
      }
    }
  },
  created() {
    this.init(this.$route.query.id)
    this.getReadText()
  },
  methods:  {
    getReadText() {
      axios.get(this.currentProject.readme)
          .then((data)=> {
            //console.log(data.data.content)
            this.readmeText = marked(decodeURIComponent(escape(window.atob(data.data.content))))
            console.log(this.readmeText)
          })
          .catch((error)=> self.$message.error(error.response.data))
    },
    init(id_project){
      axios.get('/projects/' + id_project)
          .then(response=>{this.currentProject = Object.assign({}, response.data)})

          .catch(e => self.$message.error(e.response.data));
    },
    tagRowClassName(index) {
      if(index % 5 === 0) {
        return '';
      } else if(index % 5 === 1) {
        return 'success'
      } else if(index % 5 === 2) {
        return 'info'
      } else if(index % 5 === 3) {
        return 'warning'
      } else if(index % 5 === 4) {
        return 'danger'
      }
      return '';
    },

  }
}
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
