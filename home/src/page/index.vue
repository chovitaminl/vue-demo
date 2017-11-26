<template>
  <div class="website-wrapper">
    <blog-header></blog-header>
    <div class="container">
      <div class="article-wrapper">
        <ul class="post-list">
          <li class="post" v-for="post in currentPostData" :key="post.id">
            <span class="desc-wrapper">
             <img class="avatar" :src="post.author.avatar_url"/>
              <span class="count-wrapper">
                <span class="reply-count" :title="'回复数'">{{post.reply_count}}</span>
                 <i class="line">/</i>
                <span class="visitor-count" :title="'访客数'">{{post.visit_count}}</span>
              </span>
            </span>
            <h2 class="title">
              <router-link :to="'/content/'+post.id" class="content" :title="post.title">
              <span class="tab"
                    :class="tabLightHeight(post.good, post.top, post.tab)">{{tabText(post.good, post.top, post.tab)}}</span>
                {{post.title}}
              </router-link>
            </h2>
            <span class="public" v-text="$utils.postTime(post.create_at)"></span>
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
  import _ from 'lodash';

  export default {
    created() {
      this.getPostData();

    },
    components: {
      blogHeader: header
    },
    data() {
      return {
        postData: [],
        currentPostData: []
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
          this.currentPostData = r.data;
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
      },
      changeTabData(tabParam) {
        let isQuery = !!tabParam ? true : false;
        let posts = [];
        if (isQuery) {
          _.map(this.postData, (data) => {
            if (data.good === true) {
              posts.push(data);
            } else if (data.tab === tabParam) {
              posts.push(data);
            }
          });
          this.currentPostData = posts;
        } else {
          this.currentPostData = this.postData;
        }
      }
    },
    watch: {
      '$route'(to, from) {
        let toQueryTab = to.query.tab;
        this.changeTabData(toQueryTab)
      }
    }
  };
</script>
