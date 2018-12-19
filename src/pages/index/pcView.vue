<template>
	<div class="container">
	    <el-container>
		  <el-header>Header</el-header>
		  <el-main>Main</el-main>
		  <el-footer>Footer</el-footer>
		</el-container>
	</div>

</template>

<script>
	//elementui控件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
Vue.use(ElementUI)
	export default {
    data(){
    	return {
    	show: true,
		 tableData: [{
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄'
		  }, {
			date: '2016-05-04',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1517 弄'
		  }, {
		    date: '2016-05-01',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1519 弄'
		  }, {
		    date: '2016-05-03',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1516 弄'
		  }]
    	}


    }
  }
</script>
<style>
	@import '../../modules/css/PCinitial.css'
	body{
		margin:0 !important;	
		}
	.container{

	}
   .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 110px;
    height:110px !important;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height:720px;
  }

  
</style>