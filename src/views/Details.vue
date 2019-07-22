<template>
    <div>
      <div class="main">
        <ul class="ul1">
            <li><div class="divo1">家常菜谱
            <div class="div2" >
                <h2>家常菜谱</h2>
            <ul>
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
                <ul>
                    <li>早餐</li>
                    <li>午餐</li>
                    <li>晚餐</li>
                    <li>下午茶</li>
                    <li>夜宵</li>
                </ul></div>
                <div>
                 <h2>人群</h2>
                 <ul>
                    <li>老年人</li>
                    <li>产妇孕妇</li>
                    <li>宝宝食谱-婴儿食谱</li>
                </ul></div>
                <div>
               <h2>功效</h2> 
               <ul>
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
                <ul>
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
            <ul>
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
        <div class="m-div1"></div>
        <div class="m-div2"></div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
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
     .main h2{padding-bottom: 10px;}
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
     div.a1{float: right;}
     .divo1 .div2{display:none}
     .divo2 .div21{display:none}
     .father .child{display:none}
     .divo1:hover .div2{display:block;
     }
     .divo2:hover .div21{display:block;}
     .father:hover .child{display:block}
     .div2,.div21,.child{
         position:absolute;
         top:0px;left:0;
         background-color:#fff;
         width:990px;
         margin-top:100px;height:200px;
         border:1px solid #ccc;
     }
    </style>