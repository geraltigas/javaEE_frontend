<template>
    <el-row class="wrapper">
      <el-col :xs="24" :sm="24" :xl="24" style="margin: 0 auto;">
        <el-col v-for="note in notes.records" :key="note.noteId" style="padding-bottom: 1rem;">
         <note-item :item="note"></note-item>
        </el-col>
        <el-col>
        <div class="vertical-container text-center">
          <el-pagination class="page"
                         :hide-on-single-page="true"
                         layout="total, prev, pager, next, jumper"
                         :page-size="notes.size"
                         :current-page="notes.current"
                         :total="notes.total"
                         prev-text="上一页"
                         next-text="下一页"
                         @current-change="currentChange">
          </el-pagination>
        </div>
      </el-col>
      </el-col>
    </el-row>
  </template>
  
  <script>
  import NoteItem from '@/pages/notes/NoteItem.vue'
  export default {
      name: 'NoteList',
      props: {
          notes: {
              type: Object
          }
      },
      methods: {
          currentChange(page) {
              this.$emit('currentChange', page)
          }
      },
      components: {
          NoteItem
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
.page {
  margin-top: 20px;
  text-align: center;
}
  </style>
  