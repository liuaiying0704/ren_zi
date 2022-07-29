export default{
    state: {
       color:'red'
    },
    getters: {
    },
    mutations: {
      setColor(state,payload){
            state.color=payload
        },
    },
    actions: {
        updateColor(context,val) {
        context.commit('setColor',val)
      },
    },
}
