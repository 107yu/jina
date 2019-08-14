import fly from '@/utils/request';

//获取首页头部：
export let getCategories = code=>{
    return fly.post('/api/open/product/category/query/1.0.0');
}

//获取首页为你精选的数据
export let getProducts = code =>{
    return fly.post('/api/open/page/home/products/1.0.0')
}

//获取首页大部分数据
export let getList = code =>{
    return fly.post('/api/open/page/home/list/1.0.0')
}

//获取购物车详情
export let getSwiperDetail = code =>{
    return fly.post('/api/open/sepcial/query/1.0.0',code)
}