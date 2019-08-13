export default {
    //命名空间
    namespaced: true,
    state: {
        navData:[{
            title:'爆款专区',
        },{
            title:'衣物清洁',
        },{
            title:'家庭清洁',
        },{
            title:'清洁工具',
        },{
            title:'家庭清洁',
        }],
        ind:0
    },
    mutations: {
        //tab切换
        tabNav(state,payload){
            state.ind=payload.index
        }
    },
    actions: {
    }
}