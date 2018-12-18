let url={
    hostLists:'/index/hotlists',
    bannerLists:'/index/banner',
    topLists:'/category/topList',
    subLists:'/category/subList',
    rank:'/category/rank',
    searchLists:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal',
    evaluation:'/goods/evaluation',
    cartLists:'/cart/list',
    remove:'/cart/remove',
    mrremove:'/cart/mrremove',
    add:'/cart/add',
    reduce:'/cart/reduce',
    addressAdd:'/address/add',
    addressRemove:'/address/remove',
    addressLists:'/address/list',
    addressUpdate:'/address/update',
    addressDefault:'/address/setDefault'
}
//修改配置 域名在 
let baseUrlApi = '';

switch (process.env.NODE_ENV) {
  case 'development':
    baseUrlApi = 'http://192.168.0.232/app'
    break
  case 'production':
    baseUrlApi = 'http://rap2api.taobao.org/app/mock/7058'
    // baseUrlApi = 'http://192.168.0.232/app/'
    //  baseUrlApi = 'http://192.168.0.232/app/ewei_shopv2_api.php'
    break
  default:
    throw new Error(`找不到当前环境-->>${process.env.NODE_ENV}`)
}
for (let key in url){
    url[key]=baseUrlApi+url[key]
}
export default url