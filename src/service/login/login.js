import fly from '@/utils/request';

//添加面试：
export let login = code => {
    return fly.post('/getUserInfo', code);
}

//获取验证码
export let getAuth = code => {
    return fly.post('/api/open/user/info/send/code/1.0.0', code);
}

//用户绑定手机号
export let boundPhone = code => {
    console.log(code,'777')
    return fly.post('/api/open/user/info/bind/phone/1.0.0');
}
