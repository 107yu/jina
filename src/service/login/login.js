import fly from '@/utils/request';

//添加面试：
export let login = code=>{
    return fly.post('/getUserInfo', code);
}