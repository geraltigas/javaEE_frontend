<template>
  <div id="project_detail" style="padding-right: 40px; padding-left: 40px; padding-bottom: 50px;">
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
          <el-tag v-for="(l, index) in this.currentProject.language" :key="index" :type="tagRowClassName(index)">{{l}}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="margin-top" :column="3" border :content-style="CS" :label-style="LS" >
        <el-descriptions-item>
          <template slot="label"><i class="el-icon-notebook-1"></i>知识点</template>
          <el-tag
              v-for="(knowledege, index) in this.currentProject.knowledeges"
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ProjectDetail",
  el: "#project_detail",
  data() {
    return {
      currentProject: {
        id: '1',           // 项目id
        name: 'Learneur',        // 项目名
        updateTime: '2022-12-09',     // 更新时间
        link: 'https://github.com/RudeGoose/Learneur',       // 项目链接
        description: 'Leareur',    // 项目描述
        starGazers: '123',     // 星标数
        forks: '1',  // 下载数
        homePage: 'https://github.com/RudeGoose/Learneur', // 主页
        language: 'Java, HTML'.split(','), // 使用语言
        readme: '',  // readme文档
        knowledeges: [{
          id: '1',                   // 知识点id
          knowledgeName: 'Java EE',        // 知识点
          knowledgeDescription: 'Java EE（Java Platform，Enterprise Edition）是sun公司（2009年4月20日甲骨文将其收购）推出的企业级应用程序版本。这个版本以前称为 J2EE。能够帮助我们开发和部署可移植、健壮、可伸缩且安全的服务器端 Java应用程序。Java EE 是在 Java SE 的基础上构建的，它提供Web 服务、组件模型、管理和通信 API，可以用来实现企业级的面向服务体系结构（service-oriented architecture，SOA）和 Web 3.0应用程序。' // 知识点描述
        },{
          id: '2',                   // 知识点id
          knowledgeName: 'Java SE',        // 知识点
          knowledgeDescription: 'Java EE（Java Platform，Enterprise Edition）是sun公司（2009年4月20日甲骨文将其收购）推出的企业级应用程序版本。这个版本以前称为 J2EE。能够帮助我们开发和部署可移植、健壮、可伸缩且安全的服务器端 Java应用程序。Java EE 是在 Java SE 的基础上构建的，它提供Web 服务、组件模型、管理和通信 API，可以用来实现企业级的面向服务体系结构（service-oriented architecture，SOA）和 Web 3.0应用程序。' // 知识点描述
        }],
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
  methods:  {
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
    }
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
