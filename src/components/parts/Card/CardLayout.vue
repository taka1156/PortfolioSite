<template>
  <div class="CardLayout">
    <transition name="card-fade">
      <article v-show="isVisible" class="contents" @click="jump(cardInfo.url)">
        <h2 class="contents__title">{{ cardInfo.name }}</h2>
        <figure>
          <img
            v-if="cardInfo.image != null"
            v-lazy="cardInfo.image"
            class="contents__img"
          />
          <figcaption>
            <p class="contents__text">
              {{ cardInfo.contents1 }}
            </p>
            <p class="contents__text">
              {{ cardInfo.contents2 }}
            </p>
          </figcaption>
        </figure>
      </article>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CardLayout',
  props: {
    cardInfo: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    if (this.$el.getBoundingClientRect().top < 220) this.isVisible = true;
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.isVisible) {
        const TOP = this.$el.getBoundingClientRect().top;
        this.isVisible = TOP < window.innerHeight;
      }
    },
    jump(url) {
      if (url.match(/http/)) {
        location.href = url;
      } else {
        this.$router.push(url);
      }
    }
  }
};
</script>

<style scoped>
.contents {
  width: 100%;
  height: 100%;
  margin: 2vh auto;
}

.contents__title {
  font-size: 1.75em;
  line-height: 0em;
}

.contents__img {
  height: 55%;
  width: 98%;
  vertical-align: bottom;
  transition: opacity 0.3s ease;
}

.contents__text {
  width: 98%;
  margin: 0 auto;
  text-align: left;
  word-wrap: break-word;
  border: solid 0.5px lightgray;
}

/* lazy-loadのスタイル */
[lazy='loading'] {
  opacity: 0;
}

[lazy='loaded'] {
  opacity: 1;
}

/* cardのアニメーション */
.card-fade-enter,
.card-fade-leave-to {
  opacity: 0;
  transform: translate3d(0, -60px, 0);
}

.card-fade-enter-active,
.card-fade-leave-active {
  transition: 1s;
}
</style>
