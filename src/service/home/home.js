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

//获取商品详情：
export let getGoodsDetail = code =>{
    return fly.post('/api/open/product/info/1.0.0',code)
}

//获取某商品的产品详情图：
export let getGoodsDetailPicture = code =>{
    return fly.post('/api/open/product/detailpicture/1.0.0',code)
}

//获取某商品的sku属性
export let getGoodSku = code =>{
    return fly.post('/api/open/product/sku/attrs/1.0.0',code)
}

//获取某商品的运费模板
export let getTemplates = code =>{
    return fly.post('/api/open/shipping/templates/info/1.0.0',code)
}

//获取某商品的产品优惠券
export let getCoupon = code =>{
    return fly.post('/api/open/product/coupon/productCouponList/1.0.0',code)
}