<template>
    <div id="book_detail" style="padding-right: 40px; padding-left: 40px; padding-bottom: 50px;">
        <el-card>
          <el-descriptions class="margin-top" :column="3" border :content-style="CS2" :label-style="LS" >
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-notebook-1"></i>封面</template>
              <el-image
              style="width: auto; height: 400px;"
              :src="this.currentBook.coverUrl"
              fit="fill"></el-image>
            </el-descriptions-item>
          </el-descriptions>
          <el-descriptions class="margin-top" :column="3" border :content-style="CS" :label-style="LS" >
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-notebook-1"></i>作者</template>
              {{this.currentBook.author}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-notebook-1"></i>出版商</template>
              {{this.currentBook.publisher}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-notebook-1"></i>语言</template>
              {{this.currentBook.language}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-notebook-1"></i>下载地址</template>
              {{this.currentBook.downloadUrl}}
            </el-descriptions-item>
          </el-descriptions>
          <el-descriptions class="margin-top" :column="3" border :content-style="CS" :label-style="LS" >
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-notebook-1"></i>知识点</template>
            <el-tag
            v-for="(knowledege, index) in this.currentBook.knowledeges"
             :key="index"
             :type="tagRowClassName(index)">
             {{knowledege.knowledgeName}}
             </el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "BookDetailView",
  el: "#book_detail",
  data() {
    return {
        currentBook: {
            id: '1',           // 书籍id
            title: 'Java™ Platform, Enterprise Edition (Java EE) Specification 8.0',        // 标题
            coverUrl: 'https://libgen.rocks/covers/2346000/2d0d59290c8adb2789da0c25757ad1d3.jpg',     // 封面url
            author: 'Linda DeMichiel, Bill Shannon (Oracle',       // 作者
            publisher: 'Oracle',    // 出版商
            language: 'English',     // 语言
            downloadUrl: 'https://libgen.rocks/get.php?md5=2d0d59290c8adb2789da0c25757ad1d3&key=YM0NRXS05FVHESHN',  // 下载地址
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
    init(id_book){
      axios.get('/books/' + id_book)
      .then(response=>{this.currentBook = Object.assign({}, response.data)})
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