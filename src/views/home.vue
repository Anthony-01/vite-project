<template>
  <div class="home-wrapper">
    <el-time-picker v-model="value1" placeholder="Arbitrary time" />
    <el-time-picker v-model="value2" arrow-control placeholder="Arbitrary time" />
    <div class="test"></div>
  </div>
</template>

<script lang="js" setup>
import { ref } from 'vue'
const value1 = ref()
const value2 = ref()
export default {
  data() {
    return {
      value1,
      value2
    }
  }
}
</script>

<style scoped lang="scss">
.test {
  width: 100px;
  height: 100px;
  background-color: $color-primary;
}
</style>
