<style scoped>
@import url("../index.less");
</style>

<template>
  <div class="uc-plan">
    <week-time v-model="weekInfo"></week-time>
    <week-picker v-model="weekInfo"></week-picker>
    {{weekInfo}}
  </div>
</template>

<script>
// import Axios from '@/api/index'
// import { ERR_OK } from '@/api/config'
import weekTime from '@/components/weektime'
import weekPicker from '@/components/weekPicker/weekPicker'

export default {
  data() {
    return {
      adPlanList: [], // 推广计划数据
      adPlanListCopy: [],
      adPlanSetting: {},
      weekInfo: '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
    }
  },
  methods: {
    clearPlanInfo() {
      this.adPlanListCopy = []
    },
    getSpreadPlan() {},
    selectAdPlan() {},
    goBack() {
      this.$router.go(-1)
    }
  },
  computed: {
    getAdPlan() {
      let ret = []
      this.adPlanListCopy.forEach((plan) => {
        ret.push(plan.campaign_name)
      })
      return ret
    }
  },
  components: {
    weekTime,
    weekPicker
  },
  created() {
    this.getSpreadPlan()
  }
}
</script>
