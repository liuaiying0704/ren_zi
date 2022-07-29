export default{
    state: {
        list: [
          {
            name: "吃饭",
            done: false,
            id: 1,
          },
          {
            name: "睡觉",
            done: false,
            id: 2,
          },
          {
            name: "打豆豆",
            done: false,
            id: 3,
          },
        ]
       
    },
    getters: {
    },
    mutations: {
      // 添加
        addList(state,payload){
            state.list.push(payload)
        },
        // 删除
        deleteList(state,payload){
          const index= state.list.findIndex(ele=>ele===payload)
          state.list.splice(index,1)
        }
        
    },
    actions: {
      // 添加
      updateAddList (context,val) {
        context.commit('addList',val)
      },
      // 删除
      deletelist (context,val) {
        context.commit('deleteList',val)
      }
       
    },
   
}
