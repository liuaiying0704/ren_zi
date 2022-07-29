<template>
  <div>
    <button @click="changeFn">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue"; // shift + alt + 下
import TodoHeader from "./components/TodoHeader.vue"; // shift + alt + 下
import TodoMain from "./components/TodoMain.vue"; // shift + alt + 下
export default {
  data() {
    return {};
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
  },

  created() {},

  methods: {
    changeFn() {
      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var arr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      var str = "#";
      for (var i = 0; i < 6; i++) {
        str += arr[getRandom(0, arr.length - 1)];
      }
      console.log(str);//颜色
      this.$store.dispatch('updateColor',str)

    },
  },
};
</script>

<style scoped></style>
