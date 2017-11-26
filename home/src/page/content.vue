<template>
  <div class="website-wrapper">
    <blog-header></blog-header>
    <div class="container">
      <article class="post-wrapper">
        <h2 class="post-title" :title="this.postData.title" v-text="this.postData.title"></h2>
        <div class="post-desc" v-if="this.postData.author">
          <span class="post-author">作者：{{this.postData.author.loginname}}</span>
          <span class="post-public" v-text="$utils.postTime(this.postData.create_at)"></span>
        </div>
        <p class="post-content" v-html="this.postData.content"></p>
      </article>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../style/base/_base";

  .website-wrapper {
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto $footer-height;
    .container {
      .post-wrapper {
        padding: 10px 5px;
        .post-title {
          margin: 40px 0 20px 0;
          transition: margin ease .5s;
          &:hover {
            margin-left: 10px;
          }
        }
        .post-desc {
          padding: 0 15px;
          .post-author {
          }
          .post-public {
            margin-left: 20px;
          }
        }
        img {
          max-width: 100%;
        }
      }
    }
  }
</style>

<script>
  import header from '../components/header';

  export default {
    components: {
      blogHeader: header
    },
    created() {
      this.getPostDate();
    },
    data() {
      return {
        postData: [],
        postId: this.$route.params.id,
      };
    },
    methods: {
      getPostDate() {
        this.$api.get('topic/' + this.postId, null, (res) => {
          this.postData = res.data;
          console.log(this.postData);
        });
      },
    }
  };
</script>
