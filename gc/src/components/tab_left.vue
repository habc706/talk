<template>
    <div class="tab_left-container">
        <svg class="icon caise" aria-hidden="true">
             <use xlink:href="#icon-shejiaotubiao-01"></use>
        </svg>
        <ul>
            <li :class="[this.Index==index?'hui':'']" @mouseenter="enter(index)" @mouseleave="leave" v-for="(it,index) in icons" :key="it"
            @click="tabs_click(index)">
                <i :class="['iconfont icon',this.currentIndex==index?it.i2:it.i1]"></i>
            </li>
        </ul>

    </div>
  
</template>

<script>
import bus from '../util/bus.js'
export default {
    data(){
        return{
          currentIndex:0,
          Index:null,
          icons:[
            {i1:'icon-zhuye',i2:'icon-fl-jia icon2'},
            {i1:'icon-shoucangjia icon3',i2:'icon-shoucangjia1 icon2 icon3'},
            {i1:'icon-xinfengyoujian icon3',i2:'icon-xinfengtianchong icon2 icon3'},
            {i1:'icon-tongzhi icon3',i2:'icon-tongzhifill icon2 icon3'},
            {i1:'icon-geren1 icon3',i2:'icon-geren2 icon2'},
          ],
        }  
    },

    methods:{

        tabs_click(index){
            this.currentIndex=index
            switch (this.currentIndex) {
                case 0: this.$router.push('/tab/home'); break;
                case 1: this.$router.push('/tab/shoucang'); break;
                case 2: this.$router.push('/tab/xinfeng'); break;
                case 3: this.$router.push('/tab/tongzhi'); break;
                case 4: this.$router.push('/tab/me'); break;
            
                default:
                    break;
            }
        },
        enter(index){
            this.Index=index
        },
        leave(){
             this.Index=null
        },
    },
    created(){
        this.currentIndex=0
        bus.on('setCurrentIndex_to_tab_left',(e)=>{
            this.currentIndex=e
        })
    },

}
</script>

<style lang="less" scoped>
.tab_left-container{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.caise{
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0px;
    left: 5px;
}
ul{
    margin: 0px;
    padding: 0px;
    padding-top: 75px;
}
li{
    list-style: none;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
}
.hui{
    background-color: rgba(213, 211, 211, 0.567);
}
.icon{
    font-size: 26px;
}
.icon2{
    color: rgb(73, 158, 233);
}
.icon3{
    font-size: 22px !important;
}


</style>