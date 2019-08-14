import {getSearch} from "../../service/index"
const state = {
    searchList:{},
    searchVal: '',
    page:1,
    searchTitle: [
        {
            "title":"综合",
            queryType:'0',
        },
        {
            "title":"最新",
            queryType:'1',
        },
        {
            "title":"价格",
            queryType:'2',
        }
    ],
    currenType:'0',
    currentVal:""
}

const mutations = {
    searchList(state,payload){
        state.searchList = payload
        // console.log(" state.searchList", state.searchList)
    },
    getSearchVal(state,payload){
        if(!payload){
            state.searchList = {}
        }
        state.searchVal = payload;

    },
    changeTitle(state,payload){
        state.currenType = payload;
    },
    currentVal(state,payload){
        state.currentVal = payload;
    }
}

const actions = {
    async sendSearch({commit},payload){
        commit("currentVal",payload)
        let obj ={
            "queryWord": payload,
            "queryType": "0",
            "querySort": "desc",
            "pageIndex": 1,
          }
        let data = await getSearch(obj)
        commit("searchList", data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}