<template>
  <div>
    <!--type：可以选择的样式：
    success
    primary
    warning
    danger  -->
    <MyButton type="success" @myclick="myclickFn">
      <span>注</span><span>册</span>
    </MyButton>
    <!-- <MyButton title="默认按钮" type="primary" @myclick="myclickFn"></MyButton> -->

 
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
