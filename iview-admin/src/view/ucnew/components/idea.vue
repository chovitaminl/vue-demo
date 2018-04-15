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
.uc-idea {
  box-sizing: border-box;
}
.uc-idea-content {
  padding: 0 20px;
  .g-belong {
    .name {
      margin-right: 60px;
    }
  }
  .g-style {
    justify-content: flex-start;
    align-items: center;
    .item {
      margin-right: 60px;
    }
    .ivu-radio-group {
      .item {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
  }
}
.g-flex {
  display: flex;
}
.g-flex-lt {
  width: 700px;
  flex: 0 0 700px;
  border-right: 1px solid #eee;
  .template-3 {
    .g-flex {
      justify-content: space-between;
      .g-flex-item {
      }
    }
  }
}
.g-flex-rt {
  flex: 0 0 392px;
  width: 392px;
}
.g-src {
  padding-bottom: 20px;
  .tip {
    color: #969696;
    line-height: 24px;
  }
}
.btn-green {
  color: #19be6b;
  border-color: #19be6b !important;
}
// .ivu-icon-ios-cloud-upload:before {
//     color: #19be6b;
// }
// .ivu-radio-inner:after {
//     background-color: #19be6b;
// }
button.ivu-btn {
  margin: 0 10px;
  border-radius: 0;
}
.phone-preview {
  .bg-phone {
    padding: 85px 28px 0;
    width: 392px;
    height: 438.71px;
    background: url("./bg-phone.png") no-repeat center top;
    .title {
      margin-bottom: 10px;
      margin: 10px;
      font-size: 15px;
      max-height: 44px;
      overflow: hidden;
      line-height: 24px;
      font-weight: 400;
      color: #333;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
    .image {
      position: relative;
      width: 341px;
    }
    .desc {
      margin: 10px;
      .item {
        margin-right: 10px;
      }
    }
  }
  .phone-foot {
    height: 100px;
    overflow: hidden;
    width: 330px;
    background: url("./phone-foot.png") no-repeat top center;
    border: none;
    margin-top: 10px;
  }
}
</style>

<template>
  <div class="uc-idea">
    <div class="color-green border-bottom padding-tb-10">
      <Button slot="title" type="text" @click="handleGoBack" class="padding-left-0">
        <Icon type="chevron-left"></Icon>
        返回计划列表
      </Button>
    </div>

    <div class="uc-idea-content">
      <div class="border-bottom g-belong padding-lr-30 padding-tb-20">
        <span class="name color-grey">所属计划：{{campaignName}}</span>
        <span class="name color-grey">所属单元：{{adgroupName}}</span>
      </div>

      <div class="g-style g-flex border-bottom padding-lr-30 padding-tb-20">
        <h3 class="sub-title color-green item">创意样式</h3>
        <RadioGroup v-model="creativeSetting.creativeTemplate_id">
          <Radio :label="1" :class="{'btn-green': creativeSetting.creativeTemplate_id === 1}" class="item">信息流大图</Radio>
          <Radio :label="2" :class="{'btn-green': creativeSetting.creativeTemplate_id === 2}" class="item">信息流小图</Radio>
          <Radio :label="3" :class="{'btn-green': creativeSetting.creativeTemplate_id === 3}" class="item">信息流三图</Radio>
        </RadioGroup>
      </div>

      <div class="g-flex border-bottom">
        <div class="g-flex-lt">
          <div class="g-src border-bottom padding-lr-30">
            <h3 class="sub-title color-green padding-tb-20">创意样式</h3>
            <div v-if="creativeSetting.creativeTemplate_id === 1" class="template-1">
              <p class="tip">jpg/png格式,尺寸640*300，图片大小不能超过90kb</p>
              <Upload type="drag" action="">
                <div style="padding: 20px 0">
                  <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                  <p>点击或将文件拖住到此上传</p>
                </div>
              </Upload>
            </div>
            <div v-if="creativeSetting.creativeTemplate_id === 2" class="template-2">
              <p class="tip">jpg/png格式,尺寸140*105，图片大小不能超过20kb</p>
              <Upload type="drag" action="">
                <div style="padding: 20px 0">
                  <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                  <p>点击或将文件拖住到此上传</p>
                </div>
              </Upload>
            </div>
            <div v-if="creativeSetting.creativeTemplate_id === 3" class="template-3">
              <p class="tip">jpg/png格式,尺寸160*120，图片大小不能超过20kb</p>
              <div class="g-flex">
                <div class="g-flex-item">
                  <Upload type="drag" action="">
                    <div style="padding: 20px 0">
                      <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                      <p>点击或将文件拖住到此上传</p>
                    </div>
                  </Upload>
                </div>
                <div class="g-flex-item">
                  <Upload type="drag" action="">
                    <div style="padding: 20px 0">
                      <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                      <p>点击或将文件拖住到此上传</p>
                    </div>
                  </Upload>
                </div>
                <div class="g-flex-item">
                  <Upload type="drag" action="">
                    <div style="padding: 20px 0">
                      <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                      <p>点击或将文件拖住到此上传</p>
                    </div>
                  </Upload>
                </div>
              </div>
            </div>
          </div>

          <div class="g-content padding-lr-30">
            <h3 class="sub-title color-green padding-tb-20">创意文本及URL</h3>
            <Form ref="ideaSetting" :model="creativeSetting" :label-width="126" label-position="left">
              <FormItem label="标题">
                <Input @on-blur="handleTitle" v-model="creativeSetting.content.title" :maxlength="70" placeholder="标题" class="item-width"></Input>
                <p class="font-size-12 color-red">标题字符范围为10-70</p>
              </FormItem>
              <FormItem label="推广来源">
                <Input @on-blur="handleSource" v-model="creativeSetting.content.source" :maxlength="16" placeholder="推广来源" class="item-width"></Input>
                <p class="font-size-12 color-red">推广来源字符范围为1-16</p>
              </FormItem>
              <FormItem label="点击URL">
                <Input @on-blur="handleSchemeUrl" type="url" v-model="creativeSetting.content.scheme_url" :maxlength="10234" placeholder="点击URL" class="item-width"></Input>
                <p class="font-size-12 color-red">以http或https开头，长度不能大于1024个字符</p>
              </FormItem>
              <FormItem label="点击监测链接">
                <Input @on-blur="handleSchemeUrl" type="url" v-model="creativeSetting.clickMonitorUrl" :maxlength="1024" placeholder="点击监测链接" class="item-width"></Input>（可选）
                <p class="font-size-12 color-grey">请以http或https开头，长度不能大于1024个字符</p>
              </FormItem>
            </Form>
          </div>
        </div>
        <div class="phone-preview g-flex-rt padding-lr-30">
          <h3 class="sub-title color-green padding-tb-20">广告预览</h3>
          <div class="bg-phone">
            <div class="title">{{creativeSetting.content.title}}</div>
            <img src="https://e.uc.cn/hcfs/web/fs/inner/mediaimg/1/adstyle/adstyle_1_e0792957c270867cfa57de76a89c037a.jpg" alt="" class="image">
            <div class="desc">
              <Icon type="volume-high"></Icon>
              <span class="item">推广</span>
              <span class="item">刚刚</span>
              <span class="item">{{creativeSetting.content.source}}</span>
            </div>
            <div class="phone-foot"></div>
          </div>
        </div>
      </div>

    </div>
    <div class="padding-lr-30 padding-tb-20">
      <Button @click="handleSumbit" type="primary">确认</Button>
      <Button @click="handleGoBack" type="ghost">取消</Button>
    </div>
  </div>
</template>

<script>
import Axios from "@/api/index";
import unitbyid from "../simple/unitbyid";
import getCampaignNameList from "../simple/getCampaignNameList";
import creativeTemplates from "../simple/creativeTemplates";
const ERR_OK = 1;

export default {
  data() {
    return {
      isEdit: false, // 判断当前推广计划状态：true为编辑状态，false为新建状态
      campaignNameList: "", // 计划名称列表
      campaignName: "", // 当前计划名称
      adgroupName: "", // 当前单元名称
      creativeTemplates: [], // creativeTemplates
      // accountId: this.$route.query.account,
      // campaignId: this.$route.query.campaign_id,
      // adgroupId: this.$route.query.adgroup_id,
      creativeId: 0,
      accountId: this.$route.query.account,
      campaignId: "30433927",
      adgroupId: this.$route.query.adgroup_id,
      creativeSetting: {
        account_id: this.$route.query.account,
        adgroup_id: this.$route.query.adgroup_id,
        campaign_id: this.$route.query.campaign_id,
        videold: 0,
        creativeTemplate_id: 1,
        content: [],
        clickMonitorUrl: "", // 点击URL
        wildcardIds: "",
        content: {
          app_name: "", // APP名称
          title: "",
          source: "", // 推广来源
          pic1_img: "",
          pic2_img: "",
          pic3_img: "",
          scheme_url: "" // 直达链接
        }
      },
      isTitleErr: false,
      isSourceErr: false,
      isUrlErr: false
    };
  },
  methods: {
    // 获取字符长度
    getByteLen(str) {
      let len = 0;
      for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char.match(/[^\x00-\xff]/gi) !== null) {
          len += 2;
        } else {
          len += 1;
        }
      }
      return len;
    },
    handleSchemeUrl(blur) {
      const len = [1024];
      const reg = /^(http:\/\/|https:\/\/)/;
      let currStr = blur.target.value;
      let currLen = this.getByteLen(currStr);
      if (len[0] < currLen) {
        this.$Notice.warning({
          title: "温馨提示：",
          desc: "点击URL字符长度不能大于1024个字符"
        });
        this.isUrlErr = true;
      } else {
        this.isUrlErr = false;
      }
      if (reg.test(currStr)) {
        this.isUrlErr = false;
      } else {
        this.$Notice.warning({
          title: "温馨提示：",
          desc: "URL必须以http或https开头"
        });
        this.isUrlErr = true;
      }
    },
    handleSource(blur) {
      const len = [1, 16];
      let currStr = blur.target.value;
      let currLen = this.getByteLen(currStr);
      if (len[0] > currLen) {
        this.$Notice.warning({
          title: "温馨提示：",
          desc: "推广来源字符长度不能低于1个字符"
        });
        this.isSourceErr = true;
      } else if (len[1] < this.getByteLen(currStr)) {
        this.$Notice.warning({
          title: "温馨提示：",
          desc: "推广来源字符长度不能大于16个字符"
        });
        this.isSourceErr = true;
      } else {
        this.isSourceErr = false;
      }
    },
    handleTitle(blur) {
      const len = [10, 70];
      let currStr = blur.target.value;
      let currLen = this.getByteLen(currStr);
      if (len[0] > currLen) {
        this.$Notice.warning({
          title: "温馨提示：",
          desc: "标题字符长度不能低于10个字符"
        });
        this.isTitleErr = true;
      } else if (len[1] < this.getByteLen(currStr)) {
        this.$Notice.warning({
          title: "温馨提示：",
          desc: "标题字符长度不能大于70个字符"
        });
        this.isTitleErr = true;
      } else {
        this.isTitleErr = false;
      }
    },
    handlebtnStyle(id) {
      this.btnStatus = id;
    },
    // 获取单元名称列表
    getAdgroupNameList() {
      // Axios.post("api.php", {
      //   action: "ucAdPut",
      //   opt: "getAdgroupById",
      //   adgroup_id: this.adgroupId
      // })
      //   .then(res => {
      //     console.log("获取单元名称列表", res);
      //     if (ERR_OK === res.ret) {
      //       this.adgroupName = res.data[0].adgroup_name;
      //     }
      //   })
      //   .catch(err => {
      //     console.log("获取单元名称列表错误：" + err);
      //   });
      // 本地测试
      this.adgroupName = unitbyid.data[0].adgroup_name;
    },
    // 获取计划名称
    getCampaignName() {
      this.campaignNameList.forEach(campaign => {
        if (campaign.campaign_id === this.campaignId) {
          this.campaignName = campaign.campaign_name;
        }
      });
    },
    // 获取计划名称列表
    getCampaignNameList() {
      // Axios.post("api.php", {
      //   action: "ucAdPut",
      //   opt: "getCampaignNameList"
      // })
      //   .then(res => {
      //     console.log("获取计划名称列表", res);
      //     if (ERR_OK === res.ret) {
      //       this.campaignNameList = res.data;
      //     }
      //   })
      //   .catch(err => {
      //     console.log("获取计划名称列表错误：" + err);
      //   });
      // 本地测试
      this.campaignNameList = getCampaignNameList.data;
    },
    // 获取广告样式列表
    getCreativeTemplates() {
      // Axios.post("api.php", {
      //   action: "ucAdPut",
      //   opt: "getCreativeTemplates",
      //   adgroup_id: this.adgroupId
      // })
      //   .then(res => {
      //     if (ERR_OK === res.ret) {
      //       this.creativeTemplates = res.data;
      //       console.log(this.creativeTemplates, "creativeTemplates");
      //       this.$Message.success("获取广告样式列表数据更新成功");
      //     }
      //   })
      //   .catch(err => {
      //     console.log("获取广告样式列表错误：" + err);
      //   });
      // 本地测试
      this.creativeTemplates = creativeTemplates.data;
    },
    // 返回提交创意
    handleSumbit() {},
    // 返回上级路由
    handleGoBack() {
      this.$router.go(-1);
    },
    // 获取account信息
    getAccountInfo() {
      const query = this.$route.query;
      const params = this.$route.params;
      console.log("idea router query", query, params);
      this.adCustomPlan.account_id = query.account;
      if (
        typeof query === "object" &&
        query.account &&
        query.edit &&
        query.edit === "1"
      ) {
        if (params && params.account_id) {
          this.isEdit = true;
        } else {
          this.handleGoBack();
        }
      } else {
        this.isEdit = false;
      }
    }
  },
  mounted() {
    this.getCampaignName();
  },
  created() {
    this.getCampaignNameList();
    this.getAdgroupNameList();
    this.getCreativeTemplates();
  },
  components: {}
};
</script>