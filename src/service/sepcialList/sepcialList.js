import fly from '@/utils/request';

//专题详情
export let getSepcial = params => {
    return fly.post('/api/open/sepcial/query/1.0.0',{
        siid: params
    })
}