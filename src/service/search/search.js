import fly from '@/utils/request';

//搜索
export let getSearch = code=>{
    return fly.post('/api/open/search/query/1.0.0',code);
}

