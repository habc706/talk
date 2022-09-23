<template>
  <div class="me-container">
    <div class="left">
      <!-- 头部 -->
      <div class="tou">
        <div :class="['back',this.isback?'hui1':'']" @mousemove="this.isback=true" @mouseleave="this.isback=false">
          <i class="iconfont icon-xitongfanhui fanhui" @click="this.$router.back();this.isback=false"></i>
        </div>
        <p>{{vue_name}}</p>
      </div>
      <!-- 中部 -->
      <div class="zhong" ref="container">
        <div class="container">
          <div class="beijing">
            <div class="bj">
            </div>
          </div>
          <!-- ,fadein?'fade_in':'' -->
          <div :class="['user',isactive?'luo':'',issheng?'sheng':'',isnone?'none':'']">
            <img class="mypic" src="https://img2.baidu.com/it/u=36978389,430586978&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663520400&t=5beb22609a5234227bb86ee7da6f94cb">
            <div class="nickname">
              <p>{{nickname}}</p>
            </div>
            <div class="bianji">
              <p>编辑个人信息</p>
            </div>
          
          </div>

          <!-- 底部 -->
          <div :class="['bottom',bottom_isshow?'fade_in':'fade_out']">
            <My></My>
          </div>
        </div>
      </div>

    </div>
    <div class="right">
      <Me_right></Me_right>
    </div>
  </div>
</template>

<script>
import bus from '../util/bus.js'
import User from './user.vue'
import My from './my_tiezi.vue'
import Me_right from './me_right'
export default {
  components:{
    User,
    My,
    Me_right,
  },
  computed:{
    
  },
  watch:{
      issheng(){
        if(this.issheng){
          this.timeout=setTimeout(() => {
            this.isnone=true
          }, 1000);
        }else{
          this.isnone=false
          clearTimeout(this.timeout)
        }
      }
  },

  data() {
      return {
        a:null,
        isback:false,
        isactive:false,
        vue_name:'个人主页',
        nickname:'总之就很酸',
        issheng:false,
        bottom_isshow:false,
        timeout:null,
        isnone:false,
      };
    },

  methods:{

    scrollEvent(){
      const container=this.$refs['container']
      var scrolltop=container.scrollTop
      console.log(scrolltop);

      if(scrolltop<250){
        this.vue_name='个人主页'
        this.issheng=false
        this.bottom_isshow=false
      }else if(scrolltop>=250&&scrolltop<260){
        this.vue_name=this.nickname
        this.issheng=false
        this.bottom_isshow=false
      }else if(scrolltop>=260){
        this.vue_name=this.nickname
        this.issheng=true
        this.bottom_isshow=true
      }
    } 
  },
  mounted(){
    const scrollview=this.$refs['container']
    scrollview.addEventListener('scroll',this.scrollEvent, true)//加true是让鼠标拖动滚动条也能监听到滚动 
  },
  created(){
    bus.emit('setCurrentIndex_to_tab_left',4) 
  },
  activated(){
    this.isactive=true
    bus.emit('setCurrentIndex_to_tab_left',4) 
  },
  deactivated(){
    this.isactive=false
  }

}
</script>

<style lang="less" scoped>
// 底部start

.bottom{
  position: absolute;
  top: 350px !important;
  width: 100%;
  height: 500px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(220, 219, 219, 0.693);
  border-radius: 10px;
  overflow-y: auto;
}
// 底部end
//下落动画start
.luo{
  animation: xia 1s ease-out;
  animation-fill-mode: forwards;
  display: block;
}
@keyframes xia {
  0%{
    top: 70px;
    opacity: 0;
  }
  100%{
    top: 240px;
    opacity: 1;
  }
}
//下落动画end
//上升动画start
.sheng{
  animation: shang 1s ease-out;
  animation-fill-mode: forwards;
}
@keyframes shang {
  0%{
    opacity: 1;
    top: 240px;
  }
  100%{
    opacity: 0;
    top: 70px;
  }
}
.none{
  display: none;
}
//上升动画end
//消失动画start
.fade_out{
  animation: xiao 1s ease-out;
  animation-fill-mode: forwards;
}
@keyframes xiao {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
//消失动画end
//显示动画start
.fade_in{
  animation: xian 1s ease-out;
  animation-fill-mode: forwards;
}
@keyframes xian {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
//显示动画end

//中部start
.nickname{
  position: absolute;
  top: 60px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
.nickname p{
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
}
.zhong{
  position: absolute;
  width: 100%;
  top: 41px;
  height: 100%;
  // background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(220, 219, 219, 0);
  border-radius: 10px;
  overflow: auto;
}
.zhong::-webkit-scrollbar{
  width: 0 !important;
  height: 0;
}//隐藏滚动条
.container{
  width: 100%;
  height: 930px;
  position: relative;
  overflow-x: hidden;
}
.beijing{
  position: absolute;
  top: -1900px;
  width: 2200px;
  height: 2200px;
  left: -782px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50%;
  background-color: rgb(86, 85, 85);
  overflow: hidden;
}
.bj{
  position: absolute;
  bottom: 0px;
  left: 780px;
  width: 636px;
  height: 300px;
  background: url('../../public/imgs/南宫婉.jpeg') no-repeat;
  background-size: 100%;
  background-position: 0 -50px;
  opacity: 0.9;
  z-index: 100;
}
.user{
  position: absolute;
  width: 90%;
  left: 5%;
  top: 70px;
  height: 350px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.74);
  z-index: 100;
}
.mypic{
  position: absolute;
  top: -60px;
  left: 225px;
  width: 120px;
  height: 120px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50%;
  opacity: 1 !important;
}
.bianji{
  position: absolute;
  top: 60px;
  right: 10%;
  width: 110px;
  height: 35px;
  box-sizing: border-box;
  border: 1px solid rgb(59 130 246);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
.bianji:hover{
  background-color: rgba(102, 158, 247, 0.189);
}
.bianji p{
  color: rgb(59 130 246);
  font-size: 15px;
  letter-spacing: 0.5px;
}
//中部end
//头部start
.tou{
position: absolute;
top: 0px;
width: 100%;
height: 40px;
display: flex;
justify-content: center;
align-items: flex-start;
// border-zhong: 1px solid rgba(175, 175, 175, 0.416);
}
.back{
position: absolute;
left: 10px;
top: 10px;
width: 35px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
border: 1px solid rgba(220, 219, 219, 0);
border-radius: 8px;
}
.fanhui{
font-size: 20px;
font-weight: 600;
color: rgb(59 130 246);
}
.hui1{
background-color: rgba(177, 177, 177, 0.285);
}
.tou p{
margin-top: 10px;
font-size: 17px;
font-weight: 600;
color: black;
letter-spacing: 1px;
}
//头部end

.me-container{
position: relative;
width: 100%;
height: 100%;
}
p{
margin: 0px;
}
.me-container::-webkit-scrollbar{
  width: 0 !important;
  height: 0;
}//隐藏滚动条
.left{
position: absolute;
top: 0px;
left: 10px;
width: 636px;
height: 100%;
display: flex;
justify-content: center;
box-sizing: border-box;
overflow: hidden;
}
.right{
position: absolute;
left: 660px;
width: 300px;
height: 95%;
overflow: hidden;
}
</style>