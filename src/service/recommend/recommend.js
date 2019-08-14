import fly from '@/utils/request';

//获取头部
export let getComNav = code => {
    return fly.post('/api/open/product/category/query/1.0.0');
}

export let getCount = code => {
    console.log(code)
    return fly.post('/api/open/product/category/productList/1.0.0', { pageIndex: code.pageIndex, cid: code.cid, sortType: code.sortType });
}