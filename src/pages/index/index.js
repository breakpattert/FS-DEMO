//页面初始化css
import 'css/common.css'
//当前页面的css
import './index.css'
//请求的url
import url from 'js/api.js'
import axios from 'axios'
import Vue from 'vue'
//pc端总模块
import pcview from './pcView.vue'
//moble总模块
import moble from './mobleView.vue'
//过滤js
import {currency2} from 'js/filter.js'
//elementui控件

//国际化 按需导入
import zh from 'js/lang/zh';
import en from 'js/lang/en';
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
import  i18n2 from 'js/lang';
//局部的路由器
import router from './router'
//vuex
import store from 'js/vuex/index.js'
const messages = {
  zh,
  en
}
const i18n = new VueI18n({
  locale: 'zh',
  messages
})
let view=new Vue({
    el:'#app',
     i18n2,
    data:{

        isLeftHiden:false,
        list2:null,
 
    },
    created(){

    },
    computed(){
         this.list2 = i18n2.messages;
         console.log(i18n2.messages,777)
    },
    methods:{
        togglemobileauto(ismobile){
          this.isLeftHiden = ismobile
        },
    },

    components:{
    	'n-pcview':pcview,
    	'n-moble':moble
    	
//      Footnav,
//      Swipe
    },
    beforeMount () {
      const {body} = document
      const WIDTH = 768;
      const RATIO = 3;
      const handler = () => {
        if (!document.hidden) {
          let rect = body.getBoundingClientRect()
          console.log(rect,7777);
          let isMobile = rect.width - RATIO < WIDTH
          this.togglemobileauto(isMobile)
        }
      }
      document.addEventListener('visibilitychange', handler)
      window.addEventListener('DOMContentLoaded', handler)
      window.addEventListener('resize', handler);
    },
})