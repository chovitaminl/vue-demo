<template>
  <div class="website-wrapper">
    <blog-header></blog-header>
    <div class="container">
      <div class="article-wrapper">
        <ul class="post-list">
          <li class="post" v-for="post in postData" :key="post.id">
            tab
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../style/base/_base";
  @import "../style/base/_color";
  @import "../style/base/_mixin";

  .website-wrapper {
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto $footer-height;
    .container {
      min-height: inherit;
      height: inherit;
      .article-wrapper {
        .post-list {
          .post {
            display: flex;
            position: relative;
            padding: $post-item-padding;
            height: $post-item-height;
            line-height: $post-item-height;
            @include border-bottom($post-item-border-color);
            .avatar, .title, .desc-wrapper, public, .count-wrapper {
              display: inline-block;
              vertical-align: top;
            }
            .desc-wrapper {
              flex: 0 0 $post-count-width;
              margin: 0 3px;
              width: $post-count-width;
              text-align: justify;
              font-size: 0;
              color: $post-count-color;
              overflow: hidden;
              @media screen and (max-width: 600px) {
                & {
                  flex: 0 0 auto;
                  width: auto;
                }
              }
              .count-wrapper {
                width: $post-count-width - $post-item-height;
                text-align: center;
                @media screen and (max-width: 600px) {
                  & {
                    display: none;
                  }
                }
                .reply-count, .visitor-count, .line {
                  font-size: $post-count-font-size;
                }
              }
              .avatar {
                width: $post-item-height;
              }

            }

            .title {
              flex: 1;
              height: $post-item-height;
              line-height: $post-item-height;
              .content {
                padding: 0 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: $default-font-size;
                color: $text-color;
              }
              .tab {
                display: inline-block;
                width: 32px;
                height: 18px;
                line-height: 18px;
                text-align: center;
                font-size: 12px;
                &.default {
                  background-color: $post-tab-default-background;
                  color: $post-tab-default-color;
                }
                &.highlight {
                  background-color: $post-tab-highlight-background;
                  color: $post-tab-highlight-color;
                }
              }
            }
            .public {
              flex: 0 0 auto;
              width: auto;
              text-align: right;
              font-size: $post-count-font-size;
              color: $post-count-color;
            }
          }
        }
      }
    }

  }

</style>

<script>
  import header from '../components/header';

  export default {
    created() {
      this.getPostData();

    },
    components: {
      blogHeader: header
    },
    data() {
      return {
        postData: []
      };
    },
    watch: {
      postData() {

      }
    },
    methods: {
      getPostData() {
        this.$api.get('topics', null, (r) => {
          console.log(r.data);
          this.postData = r.data;
          console.log('vv',this.$router.params);
        });
      },
      tabLightHeight(good, top, tab) {
        let style = '';
        if (good || top) {
          style = 'highlight';
        } else {
          style = 'default';
        }
        return style;
      },
      tabText(good, top, tab) {
        return top ? '顶置' : good ? '精华' : tab === 'ask' ? '问答' : '分享';
      }
    }
  };
</script>
