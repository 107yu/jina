import {getSearch} from "../../service/index"
const state = {
    searchList:{}, //搜索的数据
    searchVal: '', //当前长在搜索的值
    page:1,
    searchTitle: [
        {
            "title":"综合",
            queryType:0,
        },
        {
            "title":"最新",
            queryType:1,
        },
        {
            "title":"价格",
            queryType:2,
        }
    ],
    currenType:0,
    currentValue:""
}

const mutations = {
    searchList(state,payload){  //获取搜索的列表
        state.searchList = payload
    },
    getSearchVal(state,payload){ //获取正在输入的值---时时触发
        if(!payload){
            state.searchList = {}
            state.currenType = 0;
        }
        state.searchVal = payload;

    },
    changeType(state,payload){  //当前搜索的排序类型
        state.currenType = payload;
    },
    currentVal(state,payload){ //当前搜索的值
        state.currentValue = payload;
    }
}

const actions = {
    async sendSearch({commit},payload){  //发送请求，获取数据
        let data = await getSearch(payload)
        commit("searchList", data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}