<style scoped>
@import url("./index.less");
.uc-plan-wrapper{
  margin: 10px;
}
</style>

<template>
  <div class="uc-plan-wrapper">
   <plan></plan>
  </div>
</template>

<script>
import plan from '@/view/ucnew/components/plan'
export default {
  data() {
    return {}
  },
  components: {
    plan
  }
}
</script>
