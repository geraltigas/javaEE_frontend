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
              v-for="(knowledege, index) in this.currentBook.knowledge"
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
        idBook: 0,           // 书籍id
        title: '',        // 标题
        coverUrl: '',     // 封面url
        author: '',       // 作者
        publisher: '',    // 出版商
        language: '',     // 语言
        fileSize: '',
        fileType: '',
        publicDate: '',
        url: 'https://libgen.rocks/get.php?md5=2d0d59290c8adb2789da0c25757ad1d3&key=YM0NRXS05FVHESHN',  // 下载地址
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
  },
  methods:  {
    init(id){
      axios.get('/books/' + id)
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
