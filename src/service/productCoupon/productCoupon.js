// 
import fly from '@/utils/request';

//获取首页头部：
export let getProductCoupon = code=>{
    return fly.post('/product/coupon/productCouponList/1.0.0');
}
