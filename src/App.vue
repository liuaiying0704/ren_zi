<template>
  <div>
    <!--type：可以选择的样式：
    success
    primary
    warning
    danger  -->
      <MyButton title="成功按钮" type="success" @myclick="myclickFn"></MyButton>
    <MyButton title="默认按钮" type="primary" @myclick="myclickFn"></MyButton>
    <MyButton title="警告按钮" type="warning" @myclick="myclickFn"></MyButton>
    <MyButton title="危险按钮" type="danger" @myclick="myclickFn"></MyButton>
 
  </div>
</template>

<script>
import MyButton from "@/components/MyButton";
export default {
  components: {
    MyButton,
  },
  data() {
    return {};
  },

  created() {},

  methods: {
    myclickFn() {
      alert("自定义点击事件名");
    },
  },
};
</script>

<style scoped>
</style>
