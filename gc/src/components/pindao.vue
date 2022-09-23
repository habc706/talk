<template>
  <div class="pindao-container">
    <div class="tou_left">
       <p>频道</p>
    </div>
    <div class="tou_right">
       <div :class="['d2',this.one_or_two?'hui':'']" @click="this.one_or_two=true">
         <p>1</p>
       </div>
       <div :class="['d2',this.one_or_two?'':'hui']" @click="this.one_or_two=false">
        <p>2</p>
       </div>
    </div>

    <div class="zhong">
        <ul>
            <li v-for="it in data" :key="it.id">
              <img :src="it.pic">
              <p class="name">{{it.name}}</p>
              <i class="iconfont icon-yuandian icon1"></i>
              <div class="online">
                <p>{{it.online}}在线</p>
                <i class="iconfont icon-yuandian icon2"></i>
                <p>{{it.peopleNum}}成员</p>
              </div>
            </li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
      return {
        one_or_two:true,
        data:[
            {id:1,name:'黑客说',online:1,peopleNum:384,pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
            {id:1,name:'黑客说',online:1,peopleNum:384,pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
            {id:1,name:'黑客说',online:1,peopleNum:384,pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
            {id:1,name:'黑客说',online:1,peopleNum:384,pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
            {id:1,name:'黑客说',online:1,peopleNum:384,pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
            {id:1,name:'黑客说',online:1,peopleNum:384,pic:'https://img2.baidu.com/it/u=1111031032,1956894194&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
        ]
      };
    },
    mounted() {
      
    },
  
}
</script>
  
<style lang="less" scoped>
// 中部区域start
.zhong{
    position: absolute;
    width: 100%;
    height: 300px;
    top: 30px;
    overflow: hidden;
}
ul{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin: 0;
    padding: 0;
}
ul::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
}//隐藏滚动条
li{
    position: relative;
    left: 2.5%;
    width: 95%;
    height: 49px;
    list-style: none;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(220, 219, 219, 0.449);
}
li:last-child{
    border-bottom: 0px !important;
}
img{
    position: absolute;
    top: 10px;
    left: 5px;
    width: 35px;
    height: 35px;
    box-sizing: border-box;
    border: 1px solid rgba(220, 219, 219, 0);
    border-radius: 8px;
}
.name{
    position: absolute;
    top: 9px;
    left: 46px;
    font-size: 13px;
    color: rgb(15 23 42);
    letter-spacing: 0.5px;
}
.online{
    cursor: default;
    position: absolute;
    bottom: 2px;
    left: 52px;
    display: flex;
    justify-content: flex-start;
    align-items:flex-end;
    letter-spacing: 0.5px;
}
.online p{
    font-size: 12px;
    color: rgb(146, 145, 145);
}
.icon1{
    position: absolute;
    top: 28px;
    left: 36px;
    color:  rgb(34 197 94);
    font-size: 20px;
}
.icon2{
    color: rgb(146, 145, 145);
}
// 中部区域end
.pindao-container{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(220, 219, 219, 0.744);
  border-radius: 10px;
  user-select: none;
}
p{
  margin: 0px;
}
.hui{
    background-color: rgb(241 245 249);
}
.pindao-container::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
}//隐藏滚动条
.tou_left{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 50%;
    height: 50px;
    cursor: default;
}
.tou_left p{
    position: absolute;
    top: 5px;
    left: 15px;
}
.tou_right{
    position: absolute;
    right: 10px;
    top: 0px;
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items:flex-start;
}
.d2{
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 8px;
    cursor: pointer;
}
.d2 p{
    font-size: 17px;
}
</style>