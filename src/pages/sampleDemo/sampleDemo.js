import './sampleDemo.css'
import 'css/common.css'

import url from 'js/api.js'
import axios from 'axios'
import Vue from 'vue'
import MintUI from 'mint-ui'
Vue.use(MintUI)
import Footnav from 'components/FootNav.vue'
import Swipe from 'components/Swipe.vue'

import zh from 'js/lang/zh';
import en from 'js/lang/en';
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
import  i18n2 from 'js/lang';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
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
        lists:null,
        pageNum:1,
        pageSize:6,
        loading:false,
        allLoad:false,
        bannerLists:null,
        list2:null,
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
       
    },
    created(){
        this.getList()
        this.getBannerList()
        console.log(i18n2.messages,777)
        this.list2 = i18n2.messages;
    },
    methods:{
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
        },
        getBannerList(){
            axios.get(url.bannerLists).then((response)=>{
                this.bannerLists=response.data.lists
            })
        },
        showGoods(){
            window.location.href=`/goods?id=${list.id}`
        }
    },
    filters:{
        currency(num){
            num=num+''
            let arr=num.split('.')
            if (arr.length===1){
                return num+'.00'
            } else {
                if (arr[1].length===1){
                    return num+'0'
                } else return num
            }
        }
    },
    components:{
        Footnav,
        Swipe
    }
})