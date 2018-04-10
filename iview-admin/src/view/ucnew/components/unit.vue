<style scoped lang="less">
@import url("../index.less");
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    top: 0;
  }
}
</style>

<template>
  <div class="uc-unit">
    <Row>
      <Col span="21">
      <Card dis-hover bordered>

        <Button slot="title" type="text" @click="handleGoBack" class="padding-left-0">
          <Icon type="chevron-left"></Icon>
          返回单元列表
        </Button>
        <!-- 导入推广单元 -->
        <Form :label-width="126" label-position="left">
          <FormItem class="border-import">
            <h3 slot="label" class="sub-title">导入推广单元</h3>
            <Select @on-change="handleChangeImportPlan" v-model="unitSetting.campaign_name" :clearable="true" class="item-width">
              <Option v-for="(plan, index) in importDate.planlist" :value="plan.campaign_name" :key="index.id">{{plan.campaign_name}}</Option>
            </Select>
            <Select @on-change="handleChangeImportUnit" v-model="unitSetting.adgroup_name" :clearable="true" class="item-width">
              <Option v-for="(unit, index) in importDate.unitlist" :value="unit.adgroup_name" :key="index.id">{{unit.adgroup_name}}</Option>
            </Select>
            <Button type="text" @click="handleClearImport">重置</Button>
          </FormItem>
        </Form>
        <!-- 推广单元设置 -->
        <h3 class="sub-title title-padding">推广单元设置</h3>

        <Form ref="unitSetting" :model="unitSetting" :label-width="126" label-position="left">
          <FormItem label="所属推广计划">
            <p>{{ unitSetting.campaign_name }}</p>
          </FormItem>
          <FormItem label="推广单元名称">
            <Input v-model="unitSetting.adgroup_name" :maxlength="30" placeholder="推广单元名称" class="item-width"></Input>
            <span class="color-red">最多30个字符，且不能包含特殊字符</span>
          </FormItem>
          <FormItem label="推广方式">
            <RadioGroup @on-change="handleGeneralizeType" v-model="unitSetting.generalizeType">
              <Radio label="1">打开页面</Radio>
              <Radio label="2">APP下载</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem v-if="!isGeneralizePage" label="操作系统">
            <RadioGroup v-model="unitSetting.platform">
              <Radio label="001">IOS</Radio>
              <Radio label="010">Android</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem v-if="isGeneralizePage" label="操作系统">
            <CheckboxGroup @on-change="handlePagePlatform" v-model="pagePlatform">
              <Checkbox label="001">IOS</Checkbox>
              <Checkbox label="010">Android</Checkbox>
              <Checkbox label="100">其他系统</Checkbox>
            </CheckboxGroup>
          </FormItem>
          {{unitSetting.platform}}
        </Form>
        <!-- 推广定向设置 -->
        <Row type="flex" justify="start" align="middle" class="title-padding">
          <Col style="width:126px">
          <h3 class="sub-title">定向设置</h3>
          </Col>
          <Col>
          <Select @on-change="handleChangeTargeting" v-model="targetingSetting.targeting_name" :clearable="true" class="item-width">
            <Option v-for="(targeting, index) in targetingList" :value="targeting.targeting_name" :key="targeting.targeting_id">{{targeting.targeting_name}}</Option>
          </Select>
          </Col>
        </Row>

        <Form ref="targetingSetting" :model="targetingSetting" :label-width="126" label-position="left">
          <!-- <FormItem label="自定义人群定向">
            <RadioGroup v-model="unitSetting.campaign_id">
              <Radio :label="1">不限</Radio>
              <Radio :label="2">
                <span>定向用户群</span>
                <Tooltip placement="top">
                  <Icon type="help-circled"></Icon>
                  <div slot="content">
                    <p>定向给自定义人群包里的</p>
                    <p>用户群，与其它定向条件</p>
                    <p>取交集，为确保覆盖量，</p>
                    <p>建议选择定向用户群时少</p>
                    <p>设/不设其它定向条件。</p>
                    <p>若同时开启用户智能定</p>
                    <p>向，将智能拓展人群包</p>
                    <p>以外的用户群。</p>
                  </div>
                </Tooltip>
              </Radio>
              <Radio :label="2">
                <span>投放地域</span>
                <Tooltip placement="top">
                  <Icon type="help-circled"></Icon>
                  <div slot="content">
                    <p>投放排除自定义人群包里</p>
                    <p>的用户群，与其它定向条</p>
                    <p>件取余，从其它定向条件</p>
                    <p>圈定的用户群中排除。</p>
                  </div>
                </Tooltip>
              </Radio>
            </RadioGroup>
          </FormItem> -->
          <FormItem label="定向名称">
            <Input v-model="targetingSetting.targeting_name" :maxlength="30" placeholder="请输入定向名称" class="item-width"></Input>
            <span class="color-red">最多30个字符，且不能包含特殊字符</span>
          </FormItem>
          <FormItem label="投放地域">
            <RadioGroup v-model="targetingSetting.all_region">
              <Radio label="-1">不限</Radio>
              <Radio label="0">省市</Radio>
              <Radio label="1">
                <span>区县</span>
                <Tooltip placement="top">
                  <Icon type="help-circled"></Icon>
                  <div slot="content">
                    <p>定向给最近30天活跃及实</p>
                    <p>时位于该区县的人群。</p>
                  </div>
                </Tooltip>
              </Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="性别">
            <RadioGroup v-model="targetingSetting.gender">
              <Radio label="-1">不限</Radio>
              <Radio label="1">男</Radio>
              <Radio label="0">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="年龄">
            <RadioGroup v-model="targetingSetting.age">
              <Radio label="-1">不限</Radio>
              <Radio label="custom">自定义</Radio>
            </RadioGroup>
            <!-- <CheckboxGroup v-model="">
              <Checkbox label="18">&lt;=18</Checkbox>
              <Checkbox label="24">19-24</Checkbox>
              <Checkbox label="29">25-29</Checkbox>
              <Checkbox label="39">30-39</Checkbox>
              <Checkbox label="49">40-49</Checkbox>
              <Checkbox label="50">&gt;=50</Checkbox>
            </CheckboxGroup> -->
          </FormItem>
          <FormItem label="兴趣与行为定向">
            <RadioGroup v-model="targetingSetting.user_targeting">
              <Radio label="-1">不限</Radio>
              <Radio label="custom">自定义</Radio>
            </RadioGroup>
            <Checkbox v-model="targetingSetting.intelli_targeting">
              <span>同时开启用户智能定向</span>
              <Tooltip placement="top">
                <Icon type="help-circled"></Icon>
                <div slot="content">
                  <p>开启智能定向后，汇川</p>
                  <p>系统将根据您所选的定</p>
                  <p>向条件，您账户中创意</p>
                  <p>的内容以及账户历史积</p>
                  <p>累的互动人群数据，自</p>
                  <p>动拓展更多定向条件，</p>
                  <p>帮助您获得更优质的潜</p>
                  <p>在用户，从而提升推广</p>
                  <p>效果。</p>
                </div>
              </Tooltip>
            </Checkbox>
          </FormItem>
          <FormItem label="网络环境">
            <RadioGroup v-model="targetingSetting.network_env">
              <Radio label="11">不限</Radio>
              <Radio label="01">WiFi</Radio>
              <Radio label="10">数据网络</Radio>
            </RadioGroup>
          </FormItem>
        </Form>

        <Row class="btn-submit">
          <Col>
          <Button @click="handleTargetingSumbit" type="primary">确认</Button>
          </Col>
        </Row>
        <!-- 出价设置 -->
        <h3 class="sub-title title-padding">出价设置</h3>

        <Form ref="priceSetting" :model="unitSetting" :label-width="126" label-position="left">

          <FormItem label="转化类型">
            <Select @on-change="" class="item-width">
              <!-- <Option v-for="" :value="" :key="">{{}}</Option> -->
            </Select>
          </FormItem>
          <FormItem>
            <p slot="label">优化目标
              <Tooltip placement="top">
                <Icon type="help-circled"></Icon>
                <div slot="content">
                  <p>广告主设定的推广的目的，</p>
                  <p>会影响计费和出价的方式，</p>
                  <p>该选项为单选，除点击可切</p>
                  <p>换为转化外，其他优化目标</p>
                  <p>不能进行更改，转化为根据</p>
                  <p>转化智能出价，点击为原有</p>
                  <p>CPC计费方式，展现为原有</p>
                  <p>CPM计费方式。</p>
                </div>
              </Tooltip>
            </p>
            <RadioGroup v-model="unitSetting.optimizationTarget">
              <Radio label="1">点击</Radio>
              <Radio label="2">展现</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="计费方式">
            <RadioGroup v-model="unitSetting.chargeType">
              <Radio label="1">CPC</Radio>
              <Radio label="2">CPM</Radio>
            </RadioGroup>
            <span class="color-red">计费方式保存后不可修改</span>
          </FormItem>
          <FormItem label="出价">
            <InputNumber :max="101" :min="0.50" :step="10" v-model="unitSetting.bid" class="item-width"></InputNumber>元/点击
            <span class="color-red">请输入0.50-101之间的数字，精确到小数点后2位，单元出价需小于预算。</span>
          </FormItem>
        </Form>
        <!-- 出价设置 -->
        <h3 class="sub-title title-padding">高级设置</h3>

        <Form ref="priceSetting" :model="unitSetting" :label-width="126" label-position="left">
          <!-- <RadioGroup v-model="">
            <Radio label="">拨打电话样式</Radio>
            <Radio label="">填写表单样式</Radio>
          </RadioGroup> -->
        </Form>

        <Row class="btn-submit">
          <Col>
          <Button @click="handleUnitSumbit" type="primary">确认</Button>
          <Button @click="handleGoBack" type="ghost">取消</Button>
          </Col>
        </Row>

      </Card> -->
      </Col>
      <Col span="3">col-12</Col>
    </Row>
  </div>
</template>

<script>
// 本地测试代码
import planList from "../simple/plan";
import unitList from "../simple/unit";
import targetingList from "../simple/targeting";
import Axios from "@/api/index";
const ERR_OK = 1;
export default {
  props: ["planInfo"],
  data() {
    return {
      // 导入推广单元
      importDate: {
        planlist: {}, // 推广计划数据
        unitlist: {} // 推广单元数据
      },
      // 自定义推广单元数据
      unitSetting: {
        account_id: "",
        adgroup_name: "", // 推广单元名称
        campaign_id: 123456789, // 推广方式的id
        campaign_name: "", // 推广计划名称
        generalizeType: "1", // 推广方式
        adResourceId: 1, // 推广计划推广资源
        platform: "001", // 操作系统
        chargeType: 1, // 计费方式
        bid: 0, // 出价
        secondBid: "", // 第二阶段出价
        adconvertId: "", // 	转化id
        convertMonitorType: -1, // 转化监测类型
        optimizationTarget: "1", // 优化目标
        unitType: 0 // pp应用推广类型
      },
      // 定向数据
      targetingList: [],
      // 自定义定向设置数据
      targetingSetting: {
        account_id: "", // 账户id
        adgroup_id: "", // 推广单元id
        targeting_name: "", // 	定向名称
        audience: [], // 人群包定向id集合
        audience_targeting: "", // 自定义人群定向
        all_region: "", // 投放地域定向
        region: [], // 	地域id集合
        gender: "", // 性别定向
        age: "", // 	年龄定向
        user_targeting: "", // 兴趣与行为自定义
        interest: [], // 兴趣定向
        word: [], // 关键关键词定向
        url: [], // 	兴趣站点定向
        app: [], // app名称定向
        appcategory: 0, // app分类定向
        network_env: "", // 	网络环境定向
        intelli_targeting: true, // 开启用户智能定向
        search_word: [], // 应用搜索关键词定向
        auto_search_word: false // 开启智能关键词
      },
      isGeneralizePage: true, // 推广方式状态： true 为 打开页面， false 为 APP下载
      pagePlatform: []
    };
  },
  mounted() {
    console.log("planInfo", this.planInfo);
  },
  created() {
    // init DATA
    this.pagePlatformList = ["001", "010", "100"];
    this.pagePlatformNum = [1, 10, 100];
    this.getCampaignPlan();
    this.getCampaignUnit();
    this.getTargetingList();
  },
  methods: {
    //  对比两数组，符合条件则按照numList累加结果，返回字符串格式如： 111
    arrToString(currList, srcList, numList) {
      let total = 0;
      for (let c = 0; c <= currList.length - 1; c++) {
        for (let s = 0; s <= srcList.length - 1; s++) {
          if (srcList[s] === currList[c]) {
            total += numList[s];
          }
        }
      }

      let retStr = total.toString();
      console.log("arrToString", retStr, typeof retStr)
      if ("1" === retStr) {
        return "001";
      } 
      if ("11" === retStr) {
        return "011";
      }
      if ("111" === retStr) {
        return "111";
      }
    },
    // 将字符串按照形式分割为数组
    strToArray(str) {
      let ret = [];
      switch (str) {
        case "000":
          ret = ["000"];
          break;
        case "001":
          ret = ["001"];
          break;
        case "010":
          ret = ["010"];
          break;
        case "100":
          ret = ["100"];
          break;
        case "011":
          ret = ["010", "001"];
          break;
        case "110":
          ret = ["010", "100"];
          break;
        case "111":
          ret = ["100", "111", "010"];
          break;
      }
      console.log("strToArray", ret, typeof ret)
      return ret;
    },
    // 事件：监听当推广方式状态
    handlePagePlatform(statusList) {
      let platform = this.arrToString(
        statusList,
        this.pagePlatformList,
        this.pagePlatformNum
      );
      this.unitSetting.platform = platform;
      console.log("statusList", statusList, this.unitSetting.platform, platform);
    },
    // 事件：监听推广方式状态
    handleGeneralizeType(status) {
      if ("1" === status) {
        this.isGeneralizePage = true;
      } else if ("2" === status) {
        this.isGeneralizePage = false;
      }
    },
    // 事件：新建定向设置
    handleTargetingSumbit() {},
    // 事件：选择targeting
    handleChangeTargeting(target) {
      let currTarget = this._getcurrList(
        this.targetingList,
        "targeting_name",
        target
      );
      console.log("select target", target, currTarget);
      this._assignMethod(this.targetingSetting, currTarget.targeting);
      this.targetingSetting.account_id = currTarget.account_id;
      this.targetingSetting.targeting_id = currTarget.targeting_id;
      this.targetingSetting.targeting_name = currTarget.targeting_name;
    },
    // 事件：新建推广单元
    handleUnitSumbit() {},
    clearSingleSelect(...arg) {
      console.log(arg);
    },
    // 事件：返回计划列表
    handleGoBack() {
      this.$router.go(-1);
    },
    // 事件：重置导入推广单元的数据与显示
    handleClearImport() {
      this.unitSetting.campaign_name = "";
      this.unitSetting.adgroup_name = "";
    },
    // 事件：处理导入推广单元的计划数据
    handleChangeImportPlan(plan) {
      console.log(plan);
      this.unitSetting.campaign_name = plan;
    },
    // 事件：处理导入推广单元的单元数据
    handleChangeImportUnit(unit) {
      let currUnit = this._getcurrList(
        this.importDate.unitlist,
        "adgroup_name",
        unit
      );
      console.log("select unit", unit, currUnit);
      // this.unitSetting.adgroup_name = unit;
      this._assignMethod(this.unitSetting, currUnit);
      this.unitSetting.bid = parseInt(this.unitSetting.bid);
      this.pagePlatformList = this.strToArray(this.unitSetting.platform);
    },
    // 获取推广单元数据
    getCampaignUnit() {
      // Axios.post("api.php", {
      //   action: "ucAdPut",
      //   opt: "getAdgroupsList",
      //   campaign_id: "30428830"
      // })
      //   .then(res => {
      //     if (ERR_OK === res.ret) {
      //       this.importDate.unitlist = res.data;
      //       console.log(
      //         "单元this.importDate.unitlist",
      //         this.importDate.unitlist
      //       );
      //     }
      //   })
      //   .catch(err => {
      //     console.log("获取推广单元错误：" + err);
      //   });
      // 本地测试代码
      this.importDate.unitlist = unitList.data;
    },
    // 获取推广计划数据
    getCampaignPlan() {
      // Axios.post("api.php", {
      //   action: "ucAdPut",
      //   opt: "getCampaignsList"
      // })
      //   .then(res => {
      //     if (ERR_OK === res.ret) {
      //       this.importDate.planlist = res.data;
      //       console.log(
      //         "单元this.importDate.planlist",
      //         this.importDate.planlist
      //       );
      //     }
      //   })
      //   .catch(err => {
      //     console.log("获取推广计划错误：" + err);
      //   });
      // 本地测试代码
      this.importDate.planlist = planList.data;
    },
    // 获取定向设置数据
    getTargetingList() {
      // Axios.post("api.php", {
      //   action: "ucAdPut",
      //   opt: "getTargetingList"
      // }).then(res => {
      //   if (ERR_OK === res.ret) {
      //     this.targetingList = res.data;
      //     console.log("targetingList", this.targetingList);
      //   }
      // });
      // 本地测试代码
      this.targetingList = targetingList.data;
    },
    /**
     * 赋值函数
     * @augments tar data变量里面的自定义对象
     * @argument src 将要获取值的对象
     */
    _assignMethod(tar, src) {
      console.log("tar", tar, src);
      for (let k in tar) {
        if (src.hasOwnProperty(k)) {
          tar[k] = src[k];
        }
      }
      console.log("tar after", tar);
    },
    /**
     * 返回匹配的数组
     * @augments list 将要对比的数组集合
     * @argument name 将要对比的名称
     * @returns ret 返回匹配的对象集合
     */
    _getcurrList(list, type, name) {
      const ret = [];
      list.forEach(item => {
        if (item[type] === name) {
          ret.push(item);
        }
      });
      return ret[0];
    }
  }
};
</script>