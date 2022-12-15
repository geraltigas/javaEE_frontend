<template>
    <div>

    <h3 style="text-align: center">{{this.noteTitle}}</h3>
<el-form  label-width="100px" >
        <el-form-item prop="content">
          <mavon-editor v-model="noteContent" :subfield="false"
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
              noteTitle:'',
              noteContent:''
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
                }).then((res) => {
                  this.noteTitle = res.data.noteTitle;
                  this.noteContent = res.data.noteContent;

                })
            }
        },
        created()
        {
            this.getNote(this.$route.params.id)
        }
    };
</script>
