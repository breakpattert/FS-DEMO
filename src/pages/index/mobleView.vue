<template>
	<div>
<div class="container with-bottom-nav" style="min-height: 667px;">
      <div class="content">

        <Swipe :lists="bannerLists" name="swpie.vue" v-if="bannerLists"></Swipe>
        <div class="section-title">优店推荐</div>
        <div class="section-content shops">
          <div class="shop-wrap">
            <div class="shop-item">
              <a href="https://h5.koudaitong.com/v2/showcase/feature?alias=zjtozpgn">
                <img class="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/09/23/FgQUVNXnvpFKFl1DIN2LXhPA1cxy.png?imageView2/2/w/300/h/0/q/75/format/png">
              </a>
            </div>
            <div class="shop-item">
              <a href="https://h5.koudaitong.com/v2/feature/1e22e3vtu">
                <img class="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/08/03/FqNGnCQS1eq9nIhRg48E_UfFf9K2.png?imageView2/2/w/300/h/0/q/75/format/png">
              </a>
            </div>
            <div class="shop-item">
              <a href="https://h5.koudaitong.com/v2/feature/8oups7zk">
                <img class="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/08/05/Fv5hhMZrtPZQWE7fape0ddEYtSuy.png?imageView2/2/w/300/h/0/q/75/format/png">
              </a>
            </div>
          </div>
        </div>

        <div class="line-block line-block-gray">
          <div class="lineblock-title">
            <span class="lineblock-font">最热商品推荐</span>
            <div class="price">￥{{price | currency2}}</div>
          </div>
          <div>{{time | parseTime}}</div>
          <div>{{time2 | formatTime}}</div>
        </div>
        <div class="hot-goods js-waterfull-wrap" data-src="">
          <!--<ul class="js-list js-lazy" data-src=""
          v-infinite-scroll="getList"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="50"
          >
              <li v-for="list in lists" :key="lists.id">
                <div class="goods-item">
                  <a :href="'/goods.html?id='+lists.id">
                    <div class="thumb img-box">
                      <img class="fadeIn" v-bind:src="list.img">
                    </div>
                    <div class="detail">
                      <div class="title">{{lists.name}}</div>
                      <div class="price">￥{{lists.price | currency}}</div>
                    </div>
                  </a>
                </div>
              </li>
          </ul>-->
          <div class="loading-more" v-show="loading"><span></span></div>
        </div>
        <div class="js-show-find category-guid" style="display: none;"></div>
      </div>
    </div>
		<Footnav></Footnav>
	</div>
</template>

<script>
	import url from 'js/api.js'
	import axios from 'axios'
	Vue.prototype.$http=axios;
	import Vue from 'vue'
	import Swipe from 'components/Swipe.vue'
	import MintUI from 'mint-ui'
//	公共处理方法
	import {currency2,parseTime,formatTime} from 'js/filter.js'
	Vue.use(MintUI)
	import Footnav from 'components/FootNav.vue'
	 export default {
	 	 data () {
	 	 	return{
	 	 		lists:null,
		        pageNum:1,
		        pageSize:6,
		        loading:false,
		        allLoad:false,
		        bannerLists:null,
		        price:6,
		        time:1545204780000,
		        time2:1545148800
	 	 	}
	 	 },
	 	 beforeMount(){
		 //模板即将挂在前面执行
	 	 },
	 	 components: {Footnav,Swipe},
	 	created(){
	 		//虚拟DOM渲染前操作调用函数
			//  this.getList()
			// this.getBannerList()
//			this.price=currency2(this.price);
	    },
	    mounted(){
	    	//数据加载完成时一般做数据的缓存
    		this.initData();
	    },
	 	 methods:{
	 	 //常规请求的操作
         getList(){
            if (this.allLoad) return
            this.loading=true
            axios.post(url.hostLists,{
                pageNum:this.pageNum,
                pageSize:this.pageSize
            }).then((response)=>{
                let currentList=response.data.lists
                if (currentList.length<this.pageSize) this.allLoad=true
                if (this.lists) {
                    this.lists=this.lists.concat(currentList)
                } else {
                    this.lists=currentList
                }
                this.pageNum++
                this.loading=false
            })
            //es6数组操作
			//this.getWeekList = [...this.getWeekList, ...getWeekList.result.data];
        },
        getBannerList(){
            axios.get(url.bannerLists).then((response)=>{
                this.bannerLists=response.data.lists
            })
        },
        //异步请求的操作
        async getList2(){
        	return '异步函数'
        },
        awaitMethod(num){
		  return new Promise((resolve,reject)=>{
		    setTimeout(()=>{
		      resolve(2*num);
		    },2000)
		  })
		},
		async test (){
		  let result = await this.awaitMethod(30);
		  let result1 = await this.awaitMethod(50);
    	  let result2 = await this.awaitMethod(30);
		  console.log(result);
		  console.log(result1);
		  console.log(result2);
		},
        //并发操作
         glist1(){
          return axios.get(url.bannerLists)
         },
         glist2(){
         	return axios.post(url.hostLists,{
                pageNum:this.pageNum,
                pageSize:this.pageSize
            })
         },
        initData(){

        	this.$http.all([this.glist1(),this.glist2()]).then(this.$http.spread(
        		(a,b)=>{
        			console.log(a,6)
        			console.log(b,7)
        		}
        	))

        },
        showGoods(){
            window.location.href=`/goods?id=${list.id}`
        },
        

    },
     destroyed() {
//   	数据销毁执行
     },
     updated(){
//   	数据重新渲染执行
     },
    //过滤
    filters:{
		currency2,
		parseTime,
		formatTime
//      currency(num){
//          num=num+''
//          let arr=num.split('.')
//          if (arr.length===1){
//              return num+'.00'
//          } else {
//              if (arr[1].length===1){
//                  return num+'0'
//              } else return num
//          }
//      }
    },
    watch: {
    	//一般监听某一个值的变化
//  	clusterInfo: {
//  		deep: true,
//    		immediate: false	
//  	}
    	
    },
    computed: {
    	//一般监听数据变化
    	
    }
    
	 }
</script>

<style>
</style>