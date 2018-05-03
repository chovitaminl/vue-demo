<style scoped>
@import "./index.less";
.uc-plan-wrapper {
  margin: 10px;
  height: 100%;
  overflow-y: scroll;
}
</style>

<template>
  <div class="uc-plan-wrapper">
    <router-view></router-view>
    <!-- 步骤1 新建推广计划 -->
    <!-- <plan @save-plan="handlePlanInfo"></plan> -->
    <!-- 步骤2 新建推广单元 -->
    <!-- <unit :plan-info="planInfo"></unit> -->
    <!-- 步骤3 新建创意 -->
    <!-- <idea></idea> -->
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {},
  created() {
  },
  components: {
    // plan,
    // unit,
    // idea
  }
}
</script>
