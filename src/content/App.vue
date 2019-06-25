<style lang="scss">
.chrome-extension-template-content {
  display: none;
}
</style>


<template>
  <div class="chrome-extension-template-content"></div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    /**
     * 接收消息
     */
    onMessage ({ action, category }) {
      alert(action)
      alert(category)
    }
  }
}
</script>
