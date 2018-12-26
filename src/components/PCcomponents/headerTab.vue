
<template>	
	<div class="container">
		 	<div class="w1428 main-tabs">
		  		<div class="FS-logo"></div>
		  		<div class="header_main_firstul" @mouseleave="slideIndex = -1">
		  			<div v-for="(item2, index2) in itemArr2" :key="index2"
		  				@mouseenter.stop="hoverSlide(index2)"
		  				>
		  				<div class="mr20">
		  					<span class="color70 f13">{{item2}}</span>
		  					<i class="iconfont icon-fs_2017090504icon mr3">&#xf146;</i>
		  				</div>
		  				<div class="mainbox" v-if="slideIndex==index2">
							<!--<div class="mainbox" v-if="slideIndex==index2">-->
							<div class="box">
								<ul class="classifylist">
									<li v-for="(item3,index3) in 6" :key="index3" @mouseenter="tabShows(index3,index2)" :class="{'tabBgc':tabIndex==index3}">
										<a href="">WDM & Optischer Zugang</a>
										<i class="iconfont icon-fs_2017090504icon ml15">&#xf146;</i> 
									</li>
									<p>{{slideIndex}}</p>
								</ul>
								<div class="classifyMain">
									<div>
										{{tabIndex2}} <span>{{slideIndex}}</span>
									</div>
								
								</div>
								
								
							</div>
					
			     
				 		</div>
		  			</div>
		  
		  		</div>
		  		<div class="header_main_search">
		  			
		  		</div>
		  	
				 
		  		  
		  		
		  	</div>
    </div>
</template>

<script>
	//elementui控件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import animate from 'animate.css'
Vue.use(animate)
Vue.use(ElementUI)
	export default {
    data(){
    	return {
         itemArr2:['Alle Kategorien','Nach Thema kaufen','Lösungen','Ressourcen','Über uns'],
    	 show3: false,
    	 show:false,
        placeholder:'Land/Region wählen',
         slideIndex: -1,
         tabIndex:-1,
         tabIndex2:-1
    	}


    },
    methods:{
 		hoverSlide(index){
    		this.slideIndex = index;
   },
   		tabShows(index,index2){
   			this.tabIndex = index;
   			this.tabIndex2 = index+'-'+index;
   			console.log(tabIndex2,888);
   		}
    }
  }
</script>
<style lang="scss"> 
	.container{
		   .main-tabs{
		   	position: relative;
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
		   	.header_main_firstul{
		   	  
		   	   height:100%;
		   	   border:1px solid darkgoldenrod;
		   	   	display: flex;
		   	align-items: center;
		 	justify-content:space-between;
		 	.mainbox{
		   	position: absolute;
		   	left:0px;
		   	top:0px;
		   height:500px;
		   opacity: 0;
		/*  background: red;*/
		   	width:100%;
		   	z-index: -1000;
		   	transition: all 0.5s ease;
		   	animation: enterSlide 0.5s ease-in-out;
		   		animation-fill-mode: forwards;
		   	.box{
		   		/*transition: all 0.5s ease;*/
 				height: auto;
 				display: flex;
		   	
		        /*position: absolute;
		        top:0px;*/
		   		background-color: #f7f8f9;
		   		width:100%;
		   		/*animation: enterSlide 0.5s ease-in-out;
		   		animation-fill-mode: forwards;*/
		   		height: 100%;
		   		.classifylist{
		   			width:248px;
		   			height:100%;
		   			background-color: #f7f8f9;
		   			padding:24px 0;
		   			li{
		   				display: block;
					    font-size: 14px;
					    line-height: 20px;
					    position: relative;
					    text-transform: capitalize;
					    font-weight: 400;
					    color: #333;
					    transition: initial;
					    padding: 10px 10px 10px 20px;
					    margin-bottom: 4px;
					    background-color: #f7f8f9;
					    >a{
					    	font-size: 14px;
					    	 color: #333;
					    	 line-height: 24px;
					    	 text-decoration: none;
					    }
		   			}
		   			.tabBgc{
		   				background-color: #fff;
		   			}
		   		}
		   		.classifyMain{
		   			width:80%;
		   			height:600px;
		   			background: blueviolet;
		   		}
		   	}
		   	.show-silde{
		   		animation: enterSlide 0.5s ease-in-out;
		   		animation-fill-mode: forwards;
		   	}
		   	.leave-silde{
		   		animation: leaveSlide 0.5s ease-in-out;
		   		animation-fill-mode: forwards;
		   	}
		   	  @keyframes enterSlide{
			      0% {
			      top:-538px;
			       opacity: 0;
			      }
			      25%{
			      	 opacity: 0.4;
			      	 
			      }
			      50%{
			      	 opacity: 0.6;
			      }
			      75%{
			      	opacity: 0.8;
			      }
			      90%{
			      	 z-index:2;
			      	opacity: 0.9;
			      }
			      100% {
			        top:72px;
			        opacity: 1;
			        z-index:7;
			      }
			    }
			    @keyframes leaveSlide{
			      0% {
			        height: 100%;
			      }
			      100% {
			        height: 0px;
			      }
			    }
			     /*.leave {
			      animation: fontScale 5s ease-in-out 0s 1 alternate forwards;
			       animation-fill-mode: forwards;
			    }*/
			 


	
				
				
		   }
	
		   	}
		   .header_main_search{
		   	width:300px;
		   	height:100%;
		   	border:1px solid cornflowerblue;

		   }

		
		   }
	}
</style>
	