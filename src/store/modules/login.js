import { getAuth,boundPhone} from "../../service/index"

export default {
    //命名空间
    namespaced: true,
    state: {
        current: {
            phone: '',
            auth: ''
        },
        countDown: '',
        verifyCodeTime: '获取验证码'
    },
    mutations: {
        //接口返回验证码
        updateCountDown(state, payload) {
            state.countDown = payload
        },
        //60秒倒计时
        countdown(state, payload) {
            var c = 60;
            var intervalId = setInterval(function () {
                c = c - 1;
                state.verifyCodeTime = c + "s后重发";
                if (c == 0) {
                    clearInterval(intervalId);
                    state.verifyCodeTime = "获取验证码";
                }
            }, 1000);
        }
    },
    actions: {
        async getAuthData({ commit }, payload) {
            let data = await getAuth(payload)
            if (data.res_code === 1) {
                commit('updateCountDown', data.res_code)
            }
            console.log(data)
        },
        async getBoundPhone({ commit }, payload) {
            console.log(payload)
            let data = await boundPhone(payload)
            // if (data.res_code === 1) {
            //     commit('updateCountDown', data.res_code)
            // }
            console.log(data)
        }
    }
}