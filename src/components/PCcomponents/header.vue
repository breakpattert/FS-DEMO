<template>
	<div class="container">
	
		  	<div class="main-header">
		  		<div class="w1428 main-header-tab">
		  			<div class="main-header-left">
			  			<span class="f12 color70 mr30">FS Deutschland</span>
			  			<span class="f12 color70">Kostenloser Versand bei Bestellung über 79,00 €</span>
			  		</div>
		  			<div class="main-header-right">
		  					<!--<div class="mr3">
		  						<i class="iconfont icon-fs_2017090504icon">&#xf146;</i>
		  					</div>
		  				   <el-dropdown trigger="click">
						      <span class="el-dropdown-link">
						        Warenkorb<i class="el-icon-arrow-down el-icon--right"></i>
						      </span>
						      <el-dropdown-menu slot="dropdown" placement="bottom-end">
						        <el-dropdown-item style="">
						        	<div>
						        		
						        	</div>
						        </el-dropdown-item>
					
						     
						      </el-dropdown-menu>
						    </el-dropdown>
						    <div class="top_right_line"></div>
						    <el-dropdown>
						      <span class="el-dropdown-link">
						        Anmelden<i class="el-icon-arrow-down el-icon--right"></i>
						      </span>
						      <el-dropdown-menu slot="dropdown">
						        <el-dropdown-item>黄金糕</el-dropdown-item>
						        <el-dropdown-item>狮子头</el-dropdown-item>
						        <el-dropdown-item>螺蛳粉</el-dropdown-item>
						        <el-dropdown-item>双皮奶</el-dropdown-item>
						        <el-dropdown-item>蚵仔煎</el-dropdown-item>
						      </el-dropdown-menu>
						    </el-dropdown>-->
						         <ul class="item">
							    <li v-for="(item, index) in itemArr" :key="index"
							      @mouseover="hoverShow(index)"
							      @mouseout="hoverIndex = -1"
							      >
		  						 <i class="iconfont icon-fs_2017090504icon mr3">&#xf146;</i>
							      <span class="color70 f13">{{item}}</span>
							      <span class="top_right_line" :class="{'delLine':index==3}"></span>
								   <!-- <div class="hoverIndex1" @mouseover="hoverShow(index)" v-if="hoverIndex==index">-->
								    <div class="hoverIndex1" :class="{'tabIndexcss1':index==1,'tabIndexcss2':index==2,}" @mouseover="hoverShow(index)" v-if="index==2">
								    	<ul>
								    		<li v-if="index==0" class="Anmelden">2222</li>
								    		<li v-if="index==1" class="Anmelden">
								    			<div class="signButton">Anmelden</div>
								    			<p class="color666 f13 pb15">New Customer?<a class="color168 ml5 f13">Create an account</a></p>
								    			<div class="header_not_log">
								    				<div>
								    					<i class="iconfont icon-fs_2017090503icon mr10 f18 color666">&#xf145;</i>
								    					<a href="">Account</a>
								    				</div>
								    				<div>
								    					<i class="iconfont icon-fs_2016icon mr10 f18 color666">&#xf103;</i>
								    					<a href="">Order History</a>
								    				</div>
								    				<div>
								    					<i class="iconfont icon-fs_20180130icon mr10 f18 color666">&#xf157;</i>
								    					<a href="">Saved Carts</a>
								    				</div>
								    				
								    				<div>
								    					<i class="iconfont icon-fs_2016icon-question f18 mr10 color666">&#xf126;</i>
								    					<a href="">Cases</a>
								    				</div>
								    				
								    			</div>
								    		</li>
								    		<li v-if="index==2" class="Deutschland">
								    			<h2>Country/Region</h2>
								    			<el-collapse>
								    			  <el-collapse-item :title="title.name" name="1">
												    <div class="dslMain">
												    		<div class="top_country_search_block">
													    		<input type="text" :placeholder="placeholder"/>
													    		<i class="iconfont icon-fs_2017090501icon-search mr3">&#xf143;</i>
													    		
													    	</div>
													    	<div class="top_country_countryList">
													    		<ul>
													    			<li class="mb15" v-for="item in 15"><a href="">Deutschland (Germany) <em></em></a></li>
													    		</ul>
													    	</div>
												    	
												    </div>
												    
												  </el-collapse-item>
												  </el-collapse>
												  <h2>Sprache/Währung</h2>
									    			<el-collapse>
									    			  <el-collapse-item :title="title2.name" name="1">
													    <div class="dslMain">
													    	<div class="top_country_search_block">
													    		
													    	</div>
													    	
													    </div>
													    
													  </el-collapse-item>
													</el-collapse>
								    		</li>
								    		
								    		
								    	</ul>
								    </div>
							    </li>
							     
							   
							    
							  </ul>
						
		  			</div>
		  		</div>
		  	
		  	</div>
		  	<div class="w1428 main-tabs">
		  		<div class="FS-logo"></div>
		  	</div>
	
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
		   itemArr:['Warenkorb','Anmelden','Deutschland/€ EUR','Hilfe brauchen'],
       	   hoverIndex: -1, //表示当前hover的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li
           clickIndex: -1, //表示当前点击的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li
           title:{
          		id: 1,
          		name: '王小虎',
            },
           title2:{
           	id: 2,
          	name: 'Deutsch/€ EUR'
          	},
          	placeholder:'Land/Region wählen'
    	}


    },
    methods:{
    	hoverShow(index){
    		this.hoverIndex = index;
    	}
    }
  }
</script>

<style lang="scss"> 
	.container{
    background: #fff;
		
   .el-header{

    color: #333;
    text-align: center;
  
    height:110px !important;
    	padding: 0;
    	.main-header{
   	height:38px;
   	background: #f7f8f9;
   	display: flex;
   	align-items: center;
 	justify-content:space-between;
 	.main-header-tab{
 			display: flex;
   			align-items: center;
 			justify-content:space-between;
 			height:38px;
 	 	.main-header-left{
		   	display: flex;
		   	align-items: center;
		 	justify-content:flex-start;
		 	overflow: hidden;
		 
		   	height:100%;
		   
		   	>span{
		   		display: inline-block;
		   	}
		
		   }
		   .main-header-right{
		   	 	display: flex;
		   	align-items: center;
		 	justify-content:flex-start;
		   	line-height: 38px;
		  
		   	height:100%;
		   	border:1px solid red;
		   	.icon-fs_2017090504icon{
		   		font-size:17px;
		   	}
		    .item{
			   height: 38px;
			   position: relative;
			   width:100%;
			   display: flex;
		   	   align-items: center;
		 	   justify-content:flex-start;
			   
			     li{
			     		 display: flex;
		   	   align-items: center;
		 	   justify-content:flex-start;
				   text-align: center;
				   cursor: pointer;
				   position: relative;
				   .hoverIndex1{
					 	position: absolute;
					 	left:10px;
					 	border:1px solid #000000;
					 	top:36px;
					 	width:100px;
					 	height:200px;
					 	padding: 0px 20px 25px;
					 	ul{
					 		/*容器1*/
					 		.Anmelden{
					 			display: block;
					 		.signButton{
					 			margin-top: 20px;
					 			width:100%;
					 			font-size: 14px;
							    color: #d63030;
							    transition: all .3s;
							    margin-bottom: 12px;
							    background-color: #FFFFFF;
							    border: 1px solid #D63030;
							    display: block;
							    height: 36px;
							    text-decoration: none;
							    text-align: center;
							    line-height: 36px;
							    border-radius: 3px;
					 		}
					 		.signButton:hover{
					 			background-color:#D63030;
					 			 color: #fff;
					 		}
					 		>P{
					 			color: #666;
							    text-align: center;
							    line-height: 15px;
							    border-bottom: 1px solid #eee;
						
					 		}
					 		.header_not_log{
					 		
					 			padding-top:18px;
					 			text-align: left;
					 			>div{
					 				line-height: initial;
    								padding-bottom: 15px;
    								>a{
    									color:#333;
    									font-size: 14px;
    								}
					 			}
					 			
					 		}
					 		
					 		}
					 		/*容器2*/
					 		.Deutschland{
					 			display: block;
					 			.el-collapse{
					 				border:none;
					 			}
					 			>h2{
					 				font-size: 13px;
								    color: #666;
								    font-weight: 400;
								    margin-top: 15px;
								    margin-bottom: 10px;
								    line-height: initial;
								    text-align: left;
					 			}
					 			.el-collapse-item__wrap{
					 				border-bottom:0;
					 			}
					 			.el-collapse .el-collapse-item__header{
					 				cursor: pointer;
								    left: 0;
								   /* text-indent: 36px;*/
								  	height:36px;
								    line-height: 36px;
								    color: #333;
								    font-size: 13px;
								    padding-left:15px;
								    border-radius: 2px;
    								border: solid 1px #dddddd;
					 			}
					 			.el-collapse-item__wrap .el-collapse-item__content{
					 				padding-bottom:0;
					 			}
					 			.dslMain{
					 			   border: solid 1px #dddddd;
					 			   border-top:none;
					 			  width:100%;
					 			  height:232px;
					 			  padding:15px;
					 			  .top_country_search_block{
					 			  	height:34px;
					 			  	width:100%;
					 			  	background: #aaa;
					 			  	position:relative;
					 			  	input{
					 			  		width: 100%;
									    height: 34px;
									    background-color: #f7f8f9;
									    text-indent: 10px;
									    font-size: 13px;
									    color: #aaa;
									    border: none;
									    border-color: #aaa;
					 			  	}
					 			  	.icon-fs_2017090501icon-search{
					 			  		position: absolute;
									    right: 10px;
									    top: 9.5px;
									    font-size: 14px;
									    color: #666;
									    line-height: initial;
					 			  	}
					 			  }
					 			  .top_country_countryList{
					 			  		margin-top: 12px;
						 			  	width:226px;
						 			  	height:164px;
						
						 			  	overflow: auto;
						 			  	min-height:48px;overflow-y:auto;max-height:164px;
						 			  	overflow-y:scroll;
						 			  	ul>li>a{
											display: block;
										    position: relative;
										    line-height: 20px;
										    padding-left: 24px;
										    color: #333;
										    cursor: pointer;
										    font-size: 13px;
										    em{
										    	background-image: url(../../../static/country.png);
											    background-repeat: no-repeat;
											    position: absolute;
											    width: 16px;
											    height: 16px;
											    left: 0;
    											top: 2px;
										    }
						 			  	}
					 			  }
					 			}
					 		}
					 	
					 	}
				
					 }
					 .delLine{
					 	width:0;
					 }
					 /*对应的 每个盒子样式*/
					.tabIndexcss1{
					    width:270px;
						height:290px;
						box-shadow: 0px 1px 8px 0 rgba(120, 102, 102, 0.3);
						border: none;
						background: #fff;
						border-radius: 3px;
					}
					.tabIndexcss2{
						width:300px;
						height:auto;
						box-shadow: 0px 1px 8px 0 rgba(120, 102, 102, 0.3);
						border: none;
						background: #fff;
						border-radius: 3px;
						position: absolute;
						left:-68px;
					}
						 
				 }
				 .hoverBg{
			  		background: #ccc;
			   		color: #fff;
			 	}
				 .clickBg{
				   background: red;
				   color: #fff;
				 }
			 }
			 
		   }
 	}

   
   }
   .main-tabs{
   	background:#fff;
   	height:72px;
   	display: flex;
   	align-items: center;
 	justify-content:space-between;
   	 .FS-logo{
   		width: 150px;
    height: 42px;
    border:0.5px solid red;
    background: url(https://img-en.fs.com/includes/templates/fiberstore/images/fs.com-logo.svg) no-repeat;
   	}
   }
   
  }

  
	


	}

</style>
