<template>
    <div class="lun_tie-container" :id="this.ids">
        <div class="top">
          <!-- 头像 -->
          <img src="https://img2.baidu.com/it/u=36978389,430586978&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663520400&t=5beb22609a5234227bb86ee7da6f94cb" class="userpic">
          <!-- 昵称 -->
          <p class="username">总之就很酸</p>
          <!-- 时间与标签 -->
          <div class="time">
            <p>1小时前</p>
            <p style="font-size:15px;"> · </p>
            <p>java</p>
          </div>
          <!-- 更多图标 -->
          <div :class="['gengduo',i2_ishui?'hui':'']" @mouseenter="this.i2_ishui=true" @mouseleave="this.i2_ishui=false">
            <i class="iconfont icon-gengduo i2" ></i>
          </div>
        
        </div>
        <!-- 正文 -->
        <div class="text_container">
            <!-- 正文标题 -->
            <div class="title">
                <p>{{data.title}}</p>
            </div>

            <!-- 正文内容 -->
            <div class="text">
                <text class="" selectable="false" space="false" decode="false">
                    {{data.text}}
                </text>
            </div>
            <!-- 正文图片 -->
            <div class="text_pic" v-show="data.pics">
                <img :src="it" class="pic" v-for="it in data.pics" :key="it">
            </div>
            
        </div>

        
        <!-- 遮挡栏 -->
        <div class="zhe_dang" v-show="this.isshow">

        </div>
        

        <!-- 底部分享等功能栏 -->
        <div class="bottom">
           <div :class="['d1',this.currentIndex==0?'hui':'']" @mouseenter="enter(0)" @mouseleave="leave">
            <i class="iconfont icon-pinglun i1"></i>
            <p>1</p>
           </div>

           <div :class="['d1',this.currentIndex==1?'hui':'']" @mouseenter="enter(1)" @mouseleave="leave">
            <i class="iconfont icon-aixin i1"></i>
            <p>1</p>
           </div>

           <div :class="['d1',this.currentIndex==2?'hui':'']" @mouseenter="enter(2)" @mouseleave="leave">
            <i class="iconfont icon-fenxiang i1"></i>
            <p>分享</p>
           </div>
        </div>

    </div>
  
</template>

<script>
import bus from '../util/bus'
export default {
    props:{
      data:{
        required:true,
      },
      ids:{
        required:true,
      } 
    },
    data(){
        return{
          currentIndex:null,
          i2_ishui:false,
          contentStyleObj:null,
          isshow:false,
        }
    },

  methods:{
    enter(index){
        this.currentIndex=index
    },

    leave(){
        this.currentIndex=null
    },
    resize(){
      console.log('我的高度改变了');   
    },
        
  },
  mounted(){
    let height=document.querySelector('#'+this.ids).clientHeight
    console.log(height);
    if(height>=347){
        this.isshow=true
    }else{
        this.isshow=false
    }
  },
  created(){
    
  },
  
}
</script>

<style lang="less" scoped>
p{
    margin: 0;
}
.lun_tie-container{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid rgba(220, 219, 219, 0.744);
    border-radius: 10px;
    user-select: none;
    max-height: 350px;
    overflow: hidden;
}
.top{
    position: relative;
    top: 0px;
    width: 100%;
    height: 60px;
    display: flex;
}
// 正文start
.text_container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    padding-right: 12px;
    padding-left: 12px;
    padding-top: 10px;
    max-height: 245px;
    margin-bottom: 45px;
    overflow: hidden;
}
.title{
    max-width: 100%;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 00.5px;
    margin-bottom: 10px;
    flex-wrap: nowrap;
}
.text{
    max-width: 100%;
    font-size: 14px;
    user-select:text;
    margin-bottom: 10px;
    flex-wrap: wrap;
}
.text_pic{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
.pic{
    display: flex;
    width: 200px;
    margin-right: 10px;
    margin-bottom: 10px;
}
// 正文end
.gengduo{
    position: absolute;
    top: 10px;
    right: 18px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid rgba(220, 219, 219, 0);
    border-radius: 8px;
}
.i2{
    font-size: 20px;
}

.userpic{
    position: absolute;
    top: 10px;
    left: 12px;
    width: 45px;
    height: 45px;
    box-sizing: border-box;
    border: 1px solid rgba(220, 219, 219, 0);
    border-radius: 10px;
}
.zhe_dang{
    position: absolute;
    bottom: 40px;
    width: 100%;
    height: 60px;
    background-image: linear-gradient(rgba(0, 0, 0, 0),rgb(255, 255, 255));
}
.bottom{
    position: absolute;
    left: 3%;
    bottom: 0px;
    width: 94%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 10px;
    border-top: 1px solid rgba(205, 204, 204, 0.548);
}
.d1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32%;
    height: 36px;
    box-sizing: border-box;
    border: 1px solid rgba(205, 204, 204, 0);
    border-radius: 10px;
}
.i1{
    font-size: 18px;
    font-weight: normal;
}
.d1 p{
    margin-left: 3px;
    color: rgb(116, 115, 115);
    font-size: 15px;
    cursor: default;
}
.hui{
    background-color: rgb(241 245 249);
}
.username{
    position: absolute;
    top: 12px;
    left: 65px;
    font-size: 14px;
    color: rgb(15 23 42);
    letter-spacing: 0.5px;
}
.time{
    position: absolute;
    top: 35px;
    left: 65px;
}
.time p{
    display: inline-block;
    font-size: 12px;
    color: rgb(165, 165, 165);
    margin-right: 3px;
}

</style>