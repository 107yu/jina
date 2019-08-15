<template>
  <div class="wrap">
    <div class="head">
      <div class="img"></div>
      <scroll-view scroll-x>
        <div class="nav">
          <p
            v-for="(item,index) in navData"
            :class="index===ind?'active':null"
            :key="index"
            @click="tab(index)"
          >{{item.title}}</p>
        </div>
      </scroll-view>
    </div>
    <section>
      <div class="hot">
        <p>爆款专区 惊喜特卖</p>
      </div>
      <div class="top_count">
        <div class="small_count">
          <specialItem />
        </div>
        <div class="small_count">
          <specialItem />
        </div>
        <div class="small_count">
          <specialItem />
        </div>
      </div>
      <div class="hot">
        <p>爆款专区 惊喜特卖</p>
      </div>
      <div class="center_count">
        <div class="small_count">
          <specialItem />
        </div>
        <div class="small_count">
          <specialItem />
        </div>
        <div class="small_count">
          <specialItem />
        </div>
      </div>
      <div class="hot">
        <p>爆款专区 惊喜特卖</p>
      </div>
      <div class="center_down">
        <div class="small_count">
          <specialItem />
        </div>
        <div class="small_count">
          <specialItem />
        </div>
        <div class="small_count">
          <specialItem />
        </div>
        <div class="small_count">
          <specialItem />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      navData: state => state.special.navData,
      ind: state => state.special.ind
    })
  },
  methods: {
    ...mapMutations({
      tabNav: "special/tabNav"
    }),
    tab(index) {
      this.tabNav({ index });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  .head {
    .img {
      width: 100%;
      height: 300rpx;
      background-image: linear-gradient(to right, #26c5fd, #fc5d7b);
    }
    .nav {
      width: 100%;
      height: 80rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 30rpx;
      color: #666;
      padding: 0 20rpx;
      p {
        height: 80rpx;
        line-height: 80rpx;
        display: inline-block;
      }
      .active {
        color: #fc5d7b;
        border-bottom: 2rpx solid #fc5d7b;
      }
    }
  }
  section {
    background: #f3f7f7;
    .hot {
      width: 100%;
      height: 140rpx;
      text-align: center;
      line-height: 140rpx;
    }
    /*第一个*/
    .top_count {
      display: flex;
      flex-wrap: wrap;
      .small_count {
        width: 48.5%;
        background: #fff;
        border-radius: 5px;
        margin-left: 8rpx;
        margin-top: 8rpx;
        dl {
          padding: 10px 10px;
          dt {
            .small_img {
              width: 300rpx;
              height: 400rpx;
              background-image: linear-gradient(to right, #26c5fd, #fc5d7b);
            }
          }
          dd {
            padding: 5px 0;
            h1 {
              font-size: 30rpx;
            }
            h2 {
              display: flex;
              align-items: center;
              margin-top: 30rpx;
              h3 {
                color: #fc5d7b;
                span {
                  font-size: 50rpx;
                }
              }
              h4 {
                color: #666;
                text-decoration: line-through;
                font-size: 25rpx;
                margin-left: 20rpx;
                margin-top: 20rpx;
              }
            }
          }
        }
      }
    }
    /*第二个*/
    .center_count {
      .small_count:first-child {
        margin-top: 0rpx;
      }
      .small_count {
        background: #fff;
        margin-top: 20rpx;
        dl {
          display: flex;
          padding: 10px 10px;
          dt {
            .small_img {
              width: 200rpx;
              height: 250rpx;
              background-image: linear-gradient(to right, #26c5fd, #fc5d7b);
            }
          }
          dd {
            padding: 0 10px;
            h1 {
              font-size: 30rpx;
            }
            h2 {
              display: flex;
              align-items: center;
              margin-top: 100rpx;
              h3 {
                color: #fc5d7b;
                span {
                  font-size: 50rpx;
                }
              }
              h4 {
                color: #666;
                text-decoration: line-through;
                font-size: 25rpx;
                margin-left: 20rpx;
                margin-top: 20rpx;
              }
            }
          }
        }
      }
    }
    /*第三个*/
    .center_down {
      display: flex;
      flex-wrap: wrap;
      .small_count {
        width: 32.1%;
        background: #fff;
        border-radius: 5px;
        margin-left: 8rpx;
        margin-top: 8rpx;
        dl {
          padding: 10px 10px;
          dt {
            .small_img {
              width: 150rpx;
              height: 180rpx;
              background-image: linear-gradient(to right, #26c5fd, #fc5d7b);
            }
          }
          dd {
            padding: 5px 0;
            h1 {
              font-size: 25rpx;
            }
            h2 {
              margin-top: 25rpx;
              h3 {
                 color: #fc5d7b;
                font-size: 30rpx;
                span {
                  font-size: 35rpx;
                }
              }
              h4 {
                margin-left: -0rpx;
              }
            }
          }
        }
      }
    }
  }
}
</style>