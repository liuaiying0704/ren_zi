<template>

<button :class="`one-button-${type}`" @click="clickFn" title="按钮">
  <slot/>

</button>

</template>

<script>
export default {
  props: {
    title:{
      type:String,
      default:'按钮'
    },
    type:{
      type:String, 
      default:'success'

    }


  },
  data () {
    return {

    }
  },

  created () {

  },

  methods: {
clickFn(){
  this.$emit('myclick')
}
  }
}
</script>

<style scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.one-button-primary {
  background-color: skyblue;
}
.one-button-success {
  background-color: hotpink;
}
.one-button-warning {
  background-color: yellow;
}
.one-button-danger {
  background-color: red;
}
</style>
