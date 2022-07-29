<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="message"
      @keydown.enter="keydownFn"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      add:{}
    
    };
  },

  created() {},

  methods: {
    keydownFn() {
      this.add={name:this.message,
      done:false,
      id:this.$store.state.list.list.length+1}
      this.$store.dispatch('updateAddList',this.add)
    },
  },
};
</script>

<style scoped>
</style>
