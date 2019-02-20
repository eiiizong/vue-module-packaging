<template>
  <div class="test">
    <span>12456889 {{ name }}</span>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      name: "Eiiizong"
    };
  }
};
</script>

<style scoped lang="less">
.test {
  display: flex;
  color: #f00;
  span {
    flex: 1;
  }
}
</style>
