<template>
	<div class="container">
	    <el-container>
		  <el-header>
				<n-header></n-header>
		  </el-header>
		  <el-main>
		  	<div class="main-banner"></div>
		  	<div class="main-info w1428">
		  		<div class="main-list"></div>
			  	<div class="main-video">
			  		
			  	</div>
			  	<div class="main-shop-list"></div>
			  	<div class="main-suiotions"></div>
		  	</div>
		  	<div style="width:300px;height:300px;border:1px solid red;">
		  		<img src="../../../static/banner.jpg" alt="" />
		  	</div>
		  </el-main>
		  <el-footer>
		  	<i class="iconfont icon-fs_2018112801icon">&#xf216;</i>
		  	<n-cyntryChoose></n-cyntryChoose> 
		  </el-footer>
		</el-container>
	</div>

</template>

<script>
	//elementui控件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import header from 'components/PCcomponents/header.vue'
import cyntryChoose from 'components/PCcomponents/cyntryChoose.vue'
Vue.use(ElementUI)
	export default {
    data(){
    	return {

    	}


    },
    components: {'n-header':header,'n-cyntryChoose':cyntryChoose},
    methods:{

    }
  }
</script>
<style>
/*	.container{*/
	
	@import '../../modules/css/PCinitial.css'
/*	}*/
</style>
<style lang="scss"> 

	body{
	   margin:0 !important;	

	}
	.container{
    background: #fff;
		
   .el-header{

    color: #333;
    text-align: center;
  
    height:110px !important;
    	padding: 0;
  

   
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding:0;
    .main-banner{
  	height:420px;
  	width:100%;
  	background: #F09000;
  	}
  	  .main-info{
  	background: #fff;
  	.main-list{
  	height:136px;
  	background: #9F9F9F;
  }
  .main-video{
  	height:320px;
  	background: #666666;
  }
  .main-shop-list{
		height:1120px;
		background:#22C415;
	}
	.main-suiotions{
		height:448px;
		background: #909090;
	}
  }
  
 
  }
  
	
  	.el-footer {
  		background-color: #B3C0D1;
       color: #333;
       text-align: center;
       line-height: 410px;
        height:410px !important;
    	padding: 0;
  	}

	}

</style>
