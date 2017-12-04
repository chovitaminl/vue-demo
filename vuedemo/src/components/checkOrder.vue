<template>
  <div>
    <check-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态
      <div class="button" @on-close="checkStatus">
        支付成功
      </div>
      <div class="button" @on-close="checkStatus">
        支付失败
      </div>
    </check-dialog>
    <check-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </check-dialog>
    <check-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </check-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
  import Dialog from '../components/dialog.vue'
  export default {
    components:{
      CheckDialog:Dialog
    },
    props:{
      isShowCheckDialog:{
        type:Boolean,
        default:false
      },
      orderId:[String,Number]
    },
    data(){
      return{
        isShowSuccessDialog:false,
        isShowFailDialog:false,
      }
    },
    methods:{
      checkStatus(){
        this.$http.post('/api/checkOrder',{orderId:this.orderId}).then((res)=>{
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        },(err)=>{
          this.isShowFailDialog = true
          this.$emit('on-close-check-dialog')
        })
      },
      toOrderList(){
        this.$router.push({path:'/orderList'})
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
