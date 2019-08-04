<template>
    <div>
      <div class="main">
        <ul class="ul1">
            <li><div class="divo1">家常菜谱
            <div class="div2" >
                <h2>家常菜谱</h2>
            <ul class="ulf">
                <li>家常菜</li>
                <li>私家菜</li>
                <li>凉菜</li>
                <li>海鲜</li>
                <li>热菜</li>
                <li>汤粥素食</li>
                <li>酱料蘸料</li>
                <li>微波炉</li>
                <li>火锅底料</li>
                <li>糕点主食</li>
            </ul><div class="divt">
                <div>
                <h2>每日三餐</h2>
                <ul class="ulf">
                    <li>早餐</li>
                    <li>午餐</li>
                    <li>晚餐</li>
                    <li>下午茶</li>
                    <li>夜宵</li>
                </ul></div>
                <div>
                 <h2>人群</h2>
                 <ul class="ulf">
                    <li>老年人</li>
                    <li>产妇孕妇</li>
                    <li>宝宝食谱-婴儿食谱</li>
                </ul></div>
                <div>
               <h2>功效</h2> 
               <ul class="ulf">
                    <li>疾病调理</li>
                    <li>功能性调理</li>
                    <li>脏腑调理</li>
                    <li>人群膳食</li>
                </ul>
                </div>     
            </div>
        </div>
        </div>
            </li>
            <li><div class="divo2">中华菜系
            <div class="div21" >
                <h2>中华菜系
                    </h2>
                <ul class="ulf">
                    <li>川菜</li>
                    <li>湘菜</li>
                    <li>粤菜</li>
                    <li>东北菜</li>
                    <li>鲁菜</li>
                    <li>浙菜</li>
                    <li>苏菜</li>
                    <li>清真菜</li>
                    <li>闽菜</li>
                    <li>沪菜</li>
                    <li>京菜</li>
                    <li>湖北菜</li>
                    <li>徽菜</li>
                    <li>豫菜</li>
                    <li>西北菜</li>
                </ul>
                </div>
             </div>
            </li>
            <li>
            <div class="father">各地小吃
            <div class="child">
            <h2>各地小吃</h2>
            <ul class="ulf">
                <li>四川小吃</li>
                <li>广东小吃</li>
                <li>北京小吃</li>
                <li>陕西小吃</li>
                <li>山东小吃</li>
                <li>山西小吃</li>
                <li>湖南小吃</li>
                <li>河南小吃</li>
                <li>上海小吃</li>
                <li>江苏小吃</li>
                <li>湖北小吃</li>
                <li>重庆小吃</li>
                <li>天津小吃</li>
                <li>河北小吃</li>
                <li>浙江小吃</li>
                <li>新疆小吃</li>
                <li>江西小吃</li>
                <li>福建小吃</li>
                <li>广西小吃</li>
                <li>安徽小吃</li>
                <li>西藏小吃</li>
            </ul>
            </div>
            </div>
            </li>
            <li>外国菜谱</li>
            <li>烘焙</li>
            <li>厨房百科</li>
            <li>食材百科</li>
        </ul>
        
        <div class="div3"><h2>印象中的那些妈妈的味道</h2> </div>
        <div class="a1"><router-link to="">最新|</router-link>
            <router-link to="">最热</router-link></div>
        <div class="m-div">
        <div class="m-div1">
            <div>
                <h3><span>筛 选</span></h3>
                <div class="title">选择难度</div>
                <div class="fade ">
                    <router-link to="">新手尝试</router-link>
                    <router-link to="">初级入门</router-link>
                    <router-link to="">初中水平</router-link>
                    <router-link to="#">中级掌勺</router-link>
                    <router-link to="#">高级厨师</router-link>
                    <router-link to="#">厨神级</router-link>
                </div>
                <div class="title">选择工艺</div>
                <div  class="fade ">
                    <router-link to="#">炒</router-link>
                    <router-link to="#">蒸</router-link>
                    <router-link to="#">煮</router-link>
                    <router-link to="#">炖</router-link>
                    <router-link to="#">拌</router-link>
                    <router-link to="#">烧</router-link>
                    <router-link to="#">煎</router-link>
                    <router-link to="#">炸</router-link>
                    <router-link to="#">烘焙</router-link>
                    <router-link to="#">微波</router-link>
                </div>
                <div class="title">选择口味</div>
                <div  class="fade ">
                    <router-link to="#">咸鲜味</router-link>
                    <router-link to="#">甜味</router-link>
                    <router-link to="#">酸甜味</router-link>
                    <router-link to="#">酸辣味</router-link>
                    <router-link to="#">麻辣味</router-link>
                    <router-link to="#">酱香味</router-link>
                </div>
                <div class="title">选择时间</div>
                <div class="fade ">
                    <router-link to="#">&lt;5分钟</router-link>
                    <router-link to="#">&lt;10分钟</router-link>
                    <router-link to="#">&lt;15分钟</router-link>
                    <router-link to="#">&lt;30分钟</router-link>
                    <router-link to="#">&lt;60分钟</router-link>
                    <router-link to="#">&lt;2小时</router-link>
                    <router-link to="#">&lt;5小时</router-link>
                    <router-link to="#">&lt;12小时</router-link>
                    <router-link to="#">&lt;1天</router-link>
                    <router-link to="#">&gt;1天</router-link>
                </div>
                
            </div>
        </div>
        <div class="m-div2" @mouseenter="hover" @mouseleave="leave">
            <div class="c" v-for="(lis,i) of list" :key="i">
                <router-link to="product">
                <img :src="'http://127.0.0.1:3000/img/'+lis.pic"/>
                <div class="c1" :class="hClass">
                    <h5>{{lis.pname}}</h5>
                    <span>{{lis.discuss}}</span>
                </div>
                <div class="c2" >
                    <p>{{lis.foot}}</p>
                    <p>{{lis.math}}</p>
                </div>
                </router-link>
            </div>
            <!-- <div class="c">
                <img src="../../public/img/details/18.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>牛肉茴香水饺</h5>
                    <span>1 评论 262 人气</span>
                </div>
                <div class="c2" >
                    <p>12步 / 大概15分钟</p>
                    <p>煮 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/19.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>茴香鸡蛋素水饺</h5>
                    <span>1 评论 414 人气</span>
                </div>
                <div class="c2" >
                    <p>10步 / 大概30分钟</p>
                    <p>煮 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/17.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>大馅儿薄皮儿馅饼</h5>
                    <span>16 评论 262 人气</span>
                </div>
                <div class="c2" >
                    <p>11步 / 大概10分钟</p>
                    <p>烙 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/16.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>砂锅牛腩</h5>
                    <span>1 评论 280人气</span>
                </div>
                <div class="c2" >
                    <p>11步 / 大概90分钟</p>
                    <p>炖 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/4.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>凉拌猪尾巴</h5>
                    <span>1 评论 317 人气</span>
                </div>
                <div class="c2" >
                    <p>12步 / 大概数小时</p>
                    <p>卤 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/10.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>蚝油焖鸡翅</h5>
                    <span>1 评论 500 人气</span>
                </div>
                <div class="c2" >
                    <p>10步 / 大概30分钟</p>
                    <p>焖 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/12.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>牛肉茴香水饺</h5>
                    <span>1 评论 262 人气</span>
                </div>
                <div class="c2" >
                    <p>12步 / 大概15分钟</p>
                    <p>煮 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/7.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>茴香鸡蛋素水饺</h5>
                    <span>1 评论 414 人气</span>
                </div>
                <div class="c2" >
                    <p>10步 / 大概30分钟</p>
                    <p>煮 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/15.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>大馅儿薄皮儿馅饼</h5>
                    <span>16 评论 262 人气</span>
                </div>
                <div class="c2" >
                    <p>11步 / 大概10分钟</p>
                    <p>烙 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/16.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>砂锅牛腩</h5>
                    <span>1 评论 280人气</span>
                </div>
                <div class="c2" >
                    <p>11步 / 大概90分钟</p>
                    <p>炖 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/17.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>凉拌猪尾巴</h5>
                    <span>1 评论 317 人气</span>
                </div>
                <div class="c2" >
                    <p>12步 / 大概数小时</p>
                    <p>卤 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/21.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>茴香鸡蛋素水饺</h5>
                    <span>1 评论 414 人气</span>
                </div>
                <div class="c2" >
                    <p>10步 / 大概30分钟</p>
                    <p>煮 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/11.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>大馅儿薄皮儿馅饼</h5>
                    <span>16 评论 262 人气</span>
                </div>
                <div class="c2" >
                    <p>11步 / 大概10分钟</p>
                    <p>烙 / 家常味</p>
                </div>
            </div>
            <div class="c">
                <img src="../../public/img/details/10.jpg"/>
                <div class="c1" :class="hClass">
                    <h5>牛腩</h5>
                    <span>1 评论 280人气</span>
                </div>
                <div class="c2" >
                    <p>11步 / 大概90分钟</p>
                    <p>炖 / 家常味</p>
                </div>
            </div> -->
        </div>
        </div>
    </div>
        <div class="m-div3">
            <button class="btn" @click="loadMore" :disabled="isDisable">加载更多</button>
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
           hClass:{
               h1:false,
               tram:true
           },
           list:[],
           pno:0,
           isDisable:false
        }
    },
    methods: {
        hover(e){
            this.hClass.h1=true
        },
        leave(e){
            this.hClass.h1=false
        },
        loadMore(){//加载更多数据
          var url="product";
          
          this.pno++;
           var obj={pno:this.pno};
          this.axios.get(url,{params:obj}).then(result=>{
              console.log(result);
              
              this.list=this.list.concat(result.data);
              if(this.list.length==48){
                  this.isDisable=true
              }
              console.log(this.list)
          })
        }
    },
    mounted() {
        $(".m-div1").on("click",".title",e=>
      $(e.target).next(".fade").toggleClass("in")
        .siblings(".fade").removeClass("in")
        );
    },
    created() {
        this.loadMore()
    },
}
</script>
<style scoped>
        *{margin: 0;padding: 0;}
     body{background-color: #fae8c8;} 
     .main{width: 990px;margin: 0 auto;padding-top:30px;position:relative;
     }
     .main>.ul1{
         background-color: #fdf4e4;
         font-size:20px;
         font-weight: bold;
         box-shadow:0px 5px 5px rgba(0,0,0,0.2);
     }
     .main ul{display: flex;
         justify-content: space-around;
         list-style: none;}
     .main>.ul1>li{padding:20px 20px;}
     .main>.ul1>li:hover{
         background-color: #fefdef;
         color: #ff3232;
     }
     .main h2{padding-bottom: 10px;color:#000;font-size:20px;}
     .ulf{color:#666;font-size:15px;}
     .ulf li+li{margin-left:5px;}
     .main .divo{background: #fff;padding:30px;}
     .main .div2{padding-left: 20px;padding-bottom: 20px;
     }
     .main .divt{border-top: 1px solid #ccc;
         
         display: flex;
         justify-content: space-around;
     }
     .main .divt div+div{
         border-left: 1px solid #ccc
     }
     .main .divt li{padding-left: 10px;}
     .div21{padding-left: 20px;padding-bottom: 20px;
     }
     .div3{
         display: flex;
         justify-content: center;
         padding:20px 0;
     }
     .div3 h2{
         font-size:28px;
         font-weight:bold;
     }
     div.a1{position: absolute;
        top:130px;left:900px;
     }
     .divo1 .div2{display:none}
     .divo2 .div21{display:none}
     .father .child{display:none}
     .divo1:hover .div2{display:block;
     }
     .divo2:hover .div21{display:block;}
     .father:hover .child{display:block}
     .div2,.div21,.child{
         position:absolute;
         display:flex;
                justify-content: space-around;
                flex-wrap: wrap;
            width:990px;background-color:#fefefe;
            font-size: 15px;
            overflow: hidden;
            color:#ff3232;
            box-shadow:0px 5px 5px rgba(0,0,0,0.3);
     }
     .div2{margin:0px 0 0 -35px;padding:10px;}
     .div21{margin:0px 0 0 -180px;padding:10px;}
     .child{margin:0px 0 0 -329px;padding:10px;}

     .m-div{
         display:flex;
         justify-content:space-between;
     }
     .m-div1{width:250px;height:200px;border:1px solid #aaa;box-shadow:0px 5px 5px rgba(0,0,0,0.3);}
     .title{
			background:#fff; border:1px soild #aaa;
			padding:3px; font-size:22px; 
			font-weight:bold; cursor:pointer;
            border:1px solid #aaa;
            box-shadow:0px 5px 7px rgba(0,0,0,0.5);
		} 
     .fade{
         font-size:20px; 
         background:#eee;
         display:flex;
         justify-content: space-around;
         flex-wrap: wrap;
      height:0;
      opacity:0;
      overflow:hidden;
      transition:all .2s linear;
    }
    .in{
      height:300px;
      opacity:1;
    }   
    
    .fade>a{
        text-align:center;
        margin-right:10px;
        padding:0px 10px;
        margin-top:8px;
        color:#000;
        background-color:#fff;
        line-height:26px;
        width:100px;
        height:26px;
        box-shadow:0px 5px 5px rgba(0,0,0,0.3);
    }
    h3{
        display:flex;
        justify-content: space-around;
        padding:10px 0;
        font-weight:bold;
    }
    
    .m-div2{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        width:720px;
    }
    .m-div2 div+div{margin-bottom:30px;}
    .c{background:#ececec;width:230px;height:300px;overflow:hidden;}
    .c a{color:#000}
    .c1,.c2{margin:10px 20px;}
    .c1 h5{font-weight:bold;padding-bottom:10px;}
    .c2 p:first-child{margin-top:-10px;}
    .h1{height:0px;overflow:hidden;}
    .tram{ transition:all .2s linear;}
    .m-div3 {
        width:900px;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        padding-bottom:100px;
        font-size:25px;
    }
    .m-div3>.btn{
        margin:0 auto;
        width:990px;
        height:50px;
        background-color:#05e3ed;
        text-align: center;
        font-size: 30px
    }
    </style>