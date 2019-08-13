import fly from '@/utils/request';

//获取首页头部：
export let getProduct = code=>{
    return fly.post('/api/open/product/category/sub/1',{parentId:0});
}

// //获取首页数据
export let getList1 = code =>{
    return fly.post('/api/open/page/home/products/1.0.0')
}


export let getList = code =>{
    return fly.post('/api/open/page/home/list//1.0.0')
}