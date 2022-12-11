<template>
    <el-container>
      <el-header style="width:100%;margin: 0;padding: 0;top: 0;">
        <Header></Header>
      </el-header>
      <el-main style="width:100%;height:100%">
        <div class="m-slidebar" >
            <span class="m-closeBtn" id='m-closeBtn' @click="dianji" style="color:white">写笔记<Icon color="white" icon="ant-design:right-circle-outlined"></Icon></span>
            <div >
                <NoteEdit></NoteEdit>
            </div>
        </div>
      </el-main>
      <el-footer class="footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </template>
  
  <script>
  import Header from "@/components/layout/Header";
  import Footer from "@/components/layout/Footer";
  import NoteEdit from "@/components/layout/Article";
  export default {
    name: 'HomePage',
    components: {
      Header,
      NoteEdit,
      Footer
    },
    props: {
      msg: String
    },
    methods:{
      dianji() {
        var sideBar = document.getElementsByClassName('m-slidebar')[0];
        console.log(sideBar.classList);
        if(!sideBar.classList.contains('addWidth')){
          console.log(sideBar.classList.contains('addWidth'));
          console.log(sideBar.classList);
          sideBar.classList.add("addWidth")
          
        }
        else{
          sideBar.classList.remove("addWidth");
        }
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .note {
    position: absolute;
    right: -300px;
    bottom: 0;
    margin-right: 0;
    width: 600px;
    height: 600px;
    margin-bottom: 0;
  }
  .addWidth {
  height: 100vh!important;
  right: 0px!important;
  width: 800px!important;
  min-width:800px!important;
  position: absolute;
  z-index: 11!important;
  top: 0px!important;
  bottom: 0px!important;
}

.m-slidebar{
  height: 100vh!important;
  transition: width 1s;
  right: -800px;    /* 侧边栏有多宽，就-多少，相当于先藏在视窗外边（从左边打开的话就换成left）,我这个侧边栏在右边 */
  width: 800px;
  min-width: 800px;
  position: absolute;   
  z-index: 11;
  transition: all 0.2s;
  height: calc(100vh - 2.5rem);
  background: white;
  box-shadow: 0px 5px 5px rgba(11,2,5,0.1);
  top: 0px;
  bottom: 0px;
  .m-closeBtn{
    position: absolute;
    width: 60px;
    height: 40px;
    left: -60px;
    top: 700px;
    background-image: linear-gradient(135deg, #5e60eb 3%, #4282fa 100%),linear-gradient(#edf2fc, #edf2fc);
    box-shadow: 0px 5px 5px rgba(11,2,5,0.1);
    border-radius: 6px 0px 0px 6px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
	}
}
  </style>
  