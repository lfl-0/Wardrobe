import BackTop from "@/components/content/backtop/BackTop.vue"

const backTopMixin = {
  data() {
    return {
      backTopShow: false
    }
  },
  methods: {
    backTopIsShow() {
      this.backTopShow = this.$refs.wrapper.scrollTop > 2000;
    },

    // 回到顶部
    backTop() {
      this.$refs.wrapper.scrollTo({
        top: 0,
        behavior: "instant"
      });
    }
  },
  components: {
    BackTop
  }
}

export { backTopMixin }