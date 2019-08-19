import { getSepcial } from "../../service/index"
export default {
    //命名空间
    namespaced: true,
    state: {
        list: [],
        banner: null,
        title: null
    },
    mutations: {
        upstate(state, payload) {
            state.list = { ...payload.list.anchors };
            state.banner = payload.list.specialImg;
            state.title = payload.list.specialName;
        }
    },
    actions: {
        async getSepcialData({ commit }, payload) {
            let data = await getSepcial(payload.siid)
            console.log(data.result, "2222222222222222222222222222222222")
            if (data.res_code == "1") {
                commit('upstate', { list: data.result })
            }
        },

    }
}