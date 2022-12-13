<template>
      <div class="m-slidebar" >
            <span class="m-closeBtn" id='m-closeBtn' @click="dianji" style="color:white">写笔记<Icon color="white" icon="ant-design:right-circle-outlined"></Icon></span>
            <div >
                <NoteEdit></NoteEdit>
            </div>
    </div>
</template>

<script>
import NoteEdit from "@/components/layout/Article";
export default {
  name: "VideoPlayView",
  components:{NoteEdit},
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

<style scoped lang="scss">
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