import fly from '@/utils/request';

//获取头部
export let getComNav = code => {
    return fly.post('/api/open/product/category/query/1.0.0');
}

//获取分类列表
export let getCount = params => {
    return fly.post('/api/open/product/category/productList/1.0.0',params);
}