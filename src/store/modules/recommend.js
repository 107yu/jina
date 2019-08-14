import { getComNav,getCount } from '@/service/'
export default {
    //命名空间
    namespaced: true,
    state: {
        navData: [],
        ind: 0,
        headData: [],
        newNav:[{
            cname:'综合',
            sortType:1
        },{
            cname:'最新',
            sortType:2
        },{
            cname:'价格',
            sortType:3
        }],
        countData:[]
    },
    mutations: {
        //tab切换
        tabNav(state, payload) {
            state.ind = payload.index;
            state.headData = state.navData.find(item => item.cid === payload.id).childs
        },
        //头部nav数据
        updateNav(state, payload) {
            state.navData = payload
            state.headData=payload[0].childs
        }
    },
    getters: {

    },
    actions: {
        async getNavData({ commit }, payload) {
            let data = await getComNav(payload)
            // console.log(data)
            if (data.res_code === 1) {
                commit('updateNav', data.result)
            }
        },
        async getCountData({ commit }, payload) {
            let data = await getCount(payload)
            console.log(data)
            // if (data.res_code === 1) {
            //     commit('updateNav', data.result)
            // }
        },
    }
}