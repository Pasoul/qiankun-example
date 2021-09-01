<template>
  <div>
      子应用关于我们页 <button @click="handleClick">返回</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log(this.$router)
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>