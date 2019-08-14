import { getComNav, getCount } from '@/service/'
export default {
    //命名空间
    namespaced: true,
    state: {
        navData: [],
        ind: 0,
        headData: [],
        newNav: [{
            cname: '综合',
            sortType: 1
        }, {
            cname: '最新',
            sortType: 2
        }, {
            cname: '价格',
            sortType: 3
        }],
        countData: [],
        current: {
            pageIndex: 1,
            cid: 1,
            sortType: 1
        }
    },
    mutations: {
        //顶部tab切换
        tabNav(state, payload) {
            state.ind = payload.index;
            //第二块
            state.headData = state.navData.find(item => item.cid === payload.id).childs
        },
        //头部nav数据
        updateNav(state, payload) {
            state.navData = payload
            state.headData = payload[0].childs
        },
        //列表数据
        updatecountData(state, payload) {
            state.countData = payload
        },
        //综合价格切换
        sortTabs(state, payload) {
            if (payload.sortType === 3) {
                payload.sortType = 4;
                state.newNav[2].sortType = 4
            } else if (payload.sortType === 4) {
                payload.sortType = 3;
                state.newNav[2].sortType = 3
            }
            state.current.sortType = payload.sortType
            state.current.cid = state.navData.find((item, index) => state.ind === index).cid
            state.current.pageIndex
        },
        //上拉加载
        updatepull(state,payload){
            // ++state.current.pageIndex
        }
    },
    getters: {

    },
    actions: {
        async getNavData({ commit }, payload) {
            let data = await getComNav(payload)
            if (data.res_code === 1) {
                commit('updateNav', data.result)
            }
        },
        async getCountData({ commit }, payload) {
            let data = await getCount(payload)
            if (data.res_code === 1) {
                commit('updatecountData', data.result)
            }
        },
    }
}