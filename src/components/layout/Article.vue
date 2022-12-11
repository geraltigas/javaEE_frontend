<template>
  <div>
    <Header></Header>

    <div class="m-content">
      <div style="height:100px"></div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title" style="width:600px"></el-input>
        </el-form-item>

        <el-form-item label="内容" prop="content" >
          <mavon-editor v-model="ruleForm.content" :subfield="false"
                  :defaultOpen="'edit'"
                  :editable="true"
                  :toolbarsFlag="true"
                  style="height:600px;width:600px;margin-left: 50px;">
          </mavon-editor>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

    </div>



  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
  export default {
    name: "noteedit",
    components:{ 
      mavonEditor,
      // prop () {
      //           return {
      //               subfield: true,// true：双栏(编辑预览同屏)，false： 单栏(编辑预览分屏)
      //               defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
      //               editable: false, // 是否允许编辑
      //               toolbarsFlag: false, // 工具栏
      //               scrollStyle: false, // 滚动条样式--只支持Chrome
      //               boxShadow: true//边框阴影
      //           };
      //       }
    },
    data() {
      return {
        ruleForm: {
          id: '',
          title: '',
          content: ''
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
          ],
          description: [
            { required: true, message: '请输入摘要', trigger: 'blur' }
          ],
          content: [
            { trequired: true, message: '请输入内容', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$axios.post('/notes/post', 
            {
              Title:this.ruleForm.title,
              Content:this.ruleForm.content,
            }).then((res) =>{
                //处理成功后的逻辑
                console.log(res)
              this.$alert('操作成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  this.$router.push(
                {
                  name: 'login'
                }
              )
                }
              });
            }).catch(err => {
              // 报错
              console.log(err)
            })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created() {
      const blogId = this.$route.params.blogId
      console.log(blogId)
      const _this = this
      if(blogId) {
        this.$axios.get('/blog/' + blogId).then(res => {
          const blog = res.data.data
          _this.ruleForm.id = blog.id
          _this.ruleForm.title = blog.title
          _this.ruleForm.description = blog.description
          _this.ruleForm.content = blog.content
        })
      }

    }
  }
</script>

<style scoped>
  .m-content {
    text-align: center;
  }
</style>