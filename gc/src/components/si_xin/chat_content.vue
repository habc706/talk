<template>
    <div class="chat_content-container">
      <div class="tou">
        <p>{{nickname}}</p>
        <div class="gengduo">
          <i class="iconfont icon-gengduo" title="聊天信息"></i>
        </div>
      </div>
      <div class="zhong">

      </div>
      <div class="bottom">
        <div class="bottom_top">
          <i :class="['iconfont icon-biaoqing biaoqing']" title="表情"></i>
          <i :class="['iconfont icon-wenjianjia wenjian']" title="发送文件"></i>
        </div>
        <div class="input">
           
        </div>
        <div class="send">
          <p>发送(S)</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import bus from '../../util/bus.js'
  export default {
    data() {
      return {
        nickname:'',
        userpic:'',
        mypic:'https://img2.baidu.com/it/u=36978389,430586978&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663520400&t=5beb22609a5234227bb86ee7da6f94cb',
      };
    },
    mounted() {
      
    },
    created(){
      bus.on('gengxin_chatContent',(e)=>{
        this.nickname=e[0]
        this.userpic=e[1]
      })
    },
  
  }
  </script>
  
  <style lang="less" scoped>
  //头部区域start
  .tou{
    position: absolute;
    top: 0px;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(175, 175, 175, 0.416);
  }
  .tou p{
    margin-left: 15px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    color: black;
  }
  .gengduo{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 8px;
    padding: 5px 8px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
    z-index: 100;
  }
  .gengduo:hover{
    background-color: rgba(213, 211, 211, 0.316);
  }
  //头部区域end
  //中部聊天区start
  .zhong{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 160px;
    box-sizing: border-box;
    overflow-y: auto;
  }
  //中部聊天区end
  //底部区域start
  .bottom{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 160px;
    box-sizing: border-box;
    border-top: 1px solid rgba(175, 175, 175, 0.416);
  }
  .input{
    position: absolute;
    top: 40px;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 0px 22px;
    overflow-y: auto;
  }
  .bottom_top{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding-left: 12px;
  }
  .biaoqing,.wenjian{
    margin-left: 10px;
    color: rgb(159, 159, 160);
  }
  .biaoqing{
    font-size: 22px;
  }
  .biaoqing:hover{
    color: rgba(0, 0, 0, 0.774);
  }
  .wenjian:hover{
    color: rgba(0, 0, 0, 0.71);
  }
  .wenjian{
    font-size: 20px;
  }
  .send{
    position: absolute;
    bottom: 25px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    box-sizing: border-box;
    border: 1px solid rgba(175, 175, 175, 0);
    border-radius: 8px;
    background-color: rgba(213, 211, 211, 0.316);
  }
  .send:hover{
    background-color: rgba(213, 211, 211, 0.618) !important;
  }
  .send p{
    color: rgb(59 130 246);
    letter-spacing: 00.5px;
    cursor: pointer;
    user-select: none;
  }
  //底部区域end
  .chat_content-container{
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid rgba(175, 175, 175, 0.416);
  }
  p{
  margin: 0px;
  }
  .chat_content-container::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
  }//隐藏滚动条
  </style>