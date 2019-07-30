<template>
    <div>
        <ul class="ulm">
            <li><router-link to="/">首页</router-link></li>
            <li> &gt;</li>
            <li><router-link to="details">菜谱大全</router-link></li>
            <li>&gt;</li>
            <li>#热菜#</li>
            <li>#家常菜#</li>
        </ul>
        <div>
            <img src="../../public/img/product/1.jpg">
            <div></div>
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
    .ulm{
        display:flex;
        list-style:none;
        width:990px;
        margin:30px auto;
        font-size:20px;
    }
    .ulm>li>a{color:#000;}
</style>