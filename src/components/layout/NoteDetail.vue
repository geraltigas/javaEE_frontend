<template>
    <div>
        <h1>{{this.ruleForm.title}}</h1>
    
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" >
        <el-form-item prop="content">
          <mavon-editor v-model="ruleForm.content" :subfield="false"
                  :defaultOpen="'preview'"
                  :editable="false"
                  :toolbarsFlag="false"
                  >
    </mavon-editor>
        </el-form-item>
</el-form>
</div>
</template>

<script>
import axios from 'axios'
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
    components:{ mavonEditor },
        data () {
            return {
              ruleForm: {
          id: '',
          title: 'title',
          content: '## 父子页面通信\n'
        },
            };
        },
        computed: {
            prop () {
                return {
                    subfield: false,// true：双栏(编辑预览同屏)，false： 单栏(编辑预览分屏)
                    defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
                    editable: false, // 是否允许编辑
                    toolbarsFlag: false, // 工具栏
                    scrollStyle: false, // 滚动条样式--只支持Chrome
                    boxShadow: true//边框阴影
                };
            }
        },
        methods:{
            getNote(id)
            {
                axios.get('/notes/detail/'+id, {
                }).then(function (res) {
                    this.ruleForm = res.data
                })
            }
        },
        created()
        {
            this.getNote(this.$route.params.id)
        }
    };
</script>