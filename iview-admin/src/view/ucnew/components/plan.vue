<style scoped>
@import url("../index.less");
</style>

<template>
  <div class="uc-plan">
    <Card dis-hover bordered>

      <Button slot="title" type="text" @click="goBack" class="padding-left-0">
        <Icon type="chevron-left"></Icon>
        返回计划列表
      </Button>

      <Form :model="adPlanSetting" label-width="126" label-position="left">
        <FormItem>
          <h3 slot="label" class="sub-title">导入推广计划</h3>
           <Select style="width:200px" @click.native="selectAdPlan">
            <Option v-for="(plan, index) in getAdPlan" :value="plan" :key="index">{{plan}}</Option>
          </Select>
          <Button type="text" @click="clearPlanInfo">重置</Button>
        </FormItem>
      </Form>

      <h3 class="sub-title border-top">推广计划设置</h3>

      <Form :model="adPlanSetting" label-width="126" label-position="left">
        <FormItem label="推广计划名称">
           <!-- <Input maxlength="30" placeholder="推广计划名称" class="x`item-width"></Input> -->
           <span class="text-tip">最多30个字符，且不能包含特殊字符</span>
        </FormItem>
      </Form>

    </Card>
  </div>
</template>

<script>
// import Axios from '@/api/index'
// import { ERR_OK } from '@/api/config'

export default {
  data() {
    return {
      adPlanList: [], // 推广计划数据
      adPlanListCopy: [],
      adPlanSetting: {}
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
  created() {
    this.getSpreadPlan()
  }
}
</script>
