<template>
  <div>
    <Button @click="handleNewAd" type="primary">新建计划</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: '207326436'
    }
  },
  methods: {
    handleNewAd() {
      this.$router.push({
        name: 'ucplan',
        query: { account: this.account }
      })
    }
  }
}
</script>
