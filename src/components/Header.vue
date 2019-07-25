<template>
<div>
    <div class="bdy">
        <div class="main">  
            <router-link to=""><img src="../../public/img/2.jpg" ></router-link>
            <div class="inp">
                    <datalist id="list3">
                            <option value="家常菜谱"></option>
                            <option value="中华菜系"></option>
                            <option value="外国菜谱"></option>
                            <option value="厨房百科"></option>
                            <option value="各地小吃"></option>
                            <option value="食料百科"></option>
                        </datalist>
                <input type="text" placeholder="请输入菜谱/食材/菜单/作者" class="text" list="list3">
                <input type="submit" value="搜索" class="sub">
            </div>
            <div class="login">
                <router-link to="">
                    <img src="../../public/img/wechat.png">微信登录
                </router-link>
                <router-link to="" >
                    <img src="../../public/img/sinablog.png"/>微博登录
                </router-link>
                <router-link to="">注册</router-link>
                <router-link to="">登录</router-link>
            </div>
        </div>  
    </div>
    <div class="bdyt">
        <ul class="maint">
            <li><router-link to="/">首页</router-link></li>
            <li><div  class="father1"  >
                <router-link to="details" >菜谱大全<img src="../../public/img/msj_menuarrow.gif"></router-link> 
             <div class="mians left1" >
                <div>家常菜谱
                <ul>
                    <li><router-link to="">家常菜</router-link></li>
                    <li><router-link to="">凉菜</router-link></li>
                    <li><router-link to="">素食</router-link></li>
                    <li><router-link to="">私家菜</router-link></li>
                    <li><router-link to="">热菜</router-link></li>
                    <li><router-link to="">海鲜</router-link></li>
                    <li><router-link to="">午餐</router-link></li>
                </ul></div>
                <div>外国菜系
                <ul>
                    <li><router-link to="">韩国菜</router-link></li>
                    <li><router-link to="">日本菜</router-link></li>
                    <li><router-link to="">法国菜</router-link></li>
                    <li><router-link to="">意大利菜</router-link></li>
                </ul></div>
                <div>各地小吃
                <ul>
                    <li><router-link to="">四川小吃</router-link></li>
                    <li><router-link to="">陕西小吃</router-link></li>
                    <li><router-link to="">北京小吃</router-link></li>
                    <li><router-link to="">东北小吃</router-link></li>
                    <li><router-link to="">安徽小吃</router-link></li>
                </ul></div>
                <div>食料百科
                <ul>
                    <li><router-link to="">蔬菜</router-link></li>
                    <li><router-link to="">水果</router-link></li>
                    <li><router-link to="">谷类</router-link></li>
                </ul></div>
                <div>厨房百科
                <ul>
                    <li><router-link to="">摆盘围边</router-link></li>
                    <li><router-link to="">烹饪技巧</router-link></li>
                    <li><router-link to="">生活妙招</router-link></li>
                    <li><router-link to="">美食专题</router-link></li>
                </ul></div>
            </div>
            </div></li>
            <li><div  class="father2"><router-link to="" >饮食健康<img src="../../public/img/msj_menuarrow.gif"></router-link>
                <div class="mians left2"  >
                    <div>饮食健康 
                    <ul>
                        <li><router-link to="">饮食小常识</router-link></li>
                        <li><router-link to="">美容瘦身</router-link></li>
                        <li><router-link to="">食品安全</router-link></li>
                        <li><router-link to="">养生妙方</router-link></li>
                        <li><router-link to="">饮食禁忌</router-link></li>
                        <li><router-link to="">中医保健</router-link></li>
                        <li><router-link to="">母婴</router-link></li>
                        <li><router-link to="">饮食新闻</router-link></li>
                    </ul></div>
                    <div>功能性调理
                        
                    <ul>
                        <li><router-link to="">清热去火</router-link></li>
                        <li><router-link to="">祛痰乌发</router-link></li>
                        <li><router-link to="">滋阴补肾</router-link></li>
                        <li><router-link to="">健脾开胃</router-link></li>
                        <li><router-link to="">消化不良</router-link></li>
                        <li><router-link to="">清热解毒</router-link></li>
                    </ul></div>
                    <div>人群膳食  
                    <ul>
                        <li><router-link to="">孕妇老人</router-link></li>
                        <li><router-link to="">青少年</router-link></li>
                        <li><router-link to="">幼儿儿童</router-link></li>
                        <li><router-link to="">学龄期</router-link></li>
                    </ul></div>
                    <div>疾病调理
                        
                    <ul>
                        <li><router-link to="">糖尿病</router-link></li>
                        <li><router-link to="">高血压</router-link></li>
                        <li><router-link to="">痛风</router-link></li>
                        <li><router-link to="">胃炎</router-link></li>
                        <li><router-link to="">甲状腺</router-link></li>
                    </ul></div>
                    <div>脏腑调理
                        
                    <ul>
                        <li><router-link to="">感冒</router-link></li>
                        <li><router-link to="">补肾</router-link></li>
                        <li><router-link to="">补血</router-link></li>
                        <li><router-link to="">活血化瘀</router-link></li>
                    </ul></div>
                </div></div>
            </li>
            <li><router-link to="">美食菜单</router-link></li>
            <li><router-link to="">家居馆</router-link></li>
            <li><router-link to="">美食达人</router-link></li>
            <li><router-link to="">菜谱视频</router-link></li>
            <li> <router-link to="">产品下载</router-link></li>
        </ul>
    </div></div>
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
   *{z-index:999;}
   .bdy{display: flex;
            justify-content: space-around;background-color:#f3f0cf;
            padding:10px;
            
        }
        .main{
        display: flex; }
        .main img{width:160px;height: 50px;padding:5px 0 0 5px;}
        .main .inp{margin: 16px 45px;
        display: flex;
        justify-content: space-around;}
        .main .inp>.text{
            width:400px;height:25px;
            border:1px solid #fff;
        }
        .main .inp>.sub{
            width:50px;height:27px;
            border:1px solid #fff;
            background-color:#f3d6e8;
        }
        .main .login{
            width:280px;
            display:flex;
            justify-content: space-between;
            margin-top: 28px;
        }
        .main .login a{text-decoration: none;font-size: 13px;}
        .main .login img{
            width:12px;height: 12px;padding:0;
        }
        .bdyt{display:flex;
        justify-content: space-around;
        font-size:22px;
        background-color:#fff;
        box-shadow:0px 5px 5px rgba(0,0,0,0.3);
        padding:16px 0;
        }
        .bdyt>.maint{
            display:flex;list-style: none;
            }
        .bdyt li+li{margin-left:22px;width:110px;height:40px; }
        .bdyt a{text-decoration: none;
        color: #000;
        font-weight: bold;
        }
        .bdyt a>img{
            padding-bottom: 10px;
        }
        .mians{
                display:flex;
                justify-content: space-around;
                flex-wrap: wrap;
            width:990px;background-color:#fefefe;
            font-size: 15px;
            overflow: hidden;
            color:#ff3232;
            box-shadow:0px 5px 5px rgba(0,0,0,0.3);}
        .mians ul{list-style: none;display: flex;}
        .mians ul>li{width:7px;padding-top:8px; }
        .mians ul>li>a{text-decoration: none;color: #999;font-size: 13px; }
        .left1{margin: 27px 0px 0px -98px;}
        .left2{margin: 27px 0px 0px -230px;}  
        .father1 .left1{display:none;}
        .father1:hover .left1{display:block;height:130px;display: flex;}
        .father2 .left2{display:none;}
        .father2:hover .left2{display:block;height:150px;display: flex;}
</style>