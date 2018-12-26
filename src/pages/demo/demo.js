//页面初始化css
//import 'css/common.css'
////当前页面的css
//import './index.css'
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
import iView from 'iview'
import VueI18n from 'vue-i18n'
import zhCN from 'iview/dist/locale/zh-CN'
import zhTW from 'iview/dist/locale/zh-TW'
import en from 'iview/dist/locale/en-US'
Vue.use(VueI18n)
Vue.use(iView)
Vue.locale = () => {}
const messages = {
  en: Object.assign({ message: 'hello' }, en),
  zhCN: Object.assign({ message: '你好' }, zhCN),
  zhTW: Object.assign({ message: '你好' }, zhTW)
}

const i18n = new VueI18n({
  locale: 'zhCN', // set locale
  messages // set locale messages
})
//局部的路由器
import router from './router'
//vuex
import store from 'js/vuex/index.js'


let view=new Vue({
    el:'#app',
    i18n,
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