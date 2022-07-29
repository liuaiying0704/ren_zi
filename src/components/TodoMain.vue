<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="item in $store.state.list.list" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="deleteFn(item)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  created() {},
  computed: {},
  methods: {
    deleteFn(item) {
      this.$store.dispatch('deletelist', item)
      }
  },
}
</script>
