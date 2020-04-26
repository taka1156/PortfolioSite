<template>
  <div class="Portfolio">
    <div class="container">
      <h1>Portfolio</h1>
      <div v-if="tag !== 'all'" class="msg">
        ※{{ tag }}で表示を絞っています。
        <div class="msg__link" @click="resetPath()">全て表示</div>
      </div>
      <card-list v-if="isDisplay" :cards="tagFilter" />
      <div v-else>{{ tag }}を利用した製作物はまだありません。:(</div>
    </div>
  </div>
</template>

<script>
import CardList from '@/components/parts/Card/CardList';

export default {
  name: 'Portfolio',
  components: {
    'card-list': CardList
  },
  data() {
    return {
      portfolio: [
        {
          name: 'ポートフォリオサイト',
          image: require('@/assets/portfolio/portfolio.png'),
          contents1: 'Vue.js、BootStrap4',
          contents2:
            'このサイトです。googleのマテリアルアイコンやフォントを利用しています。',
          url: '#'
        },
        {
          name: 'ToDoサイト',
          image: require('@/assets/portfolio/todo.png'),
          contents1: 'Vue.js、BootStrap4、vuejs-datepicker、vue-js-modal',
          contents2: 'WebStorageを利用して予定を保存できるようにしています',
          url: 'https://taka1156.github.io/ToDo/'
        },
        {
          name: 'Qiita記事検索',
          image: require('@/assets/portfolio/search.png'),
          contents1: 'Vue.js、BootStrap4',
          contents2:
            'axiosを試すために作りました。Qiita APIからデータを取得し、goodでソートした結果を表示します。',
          url: 'https://taka1156.github.io/TryAxios/'
        },
        {
          name: 'チャットサイト',
          image: require('@/assets/portfolio/chat.png'),
          contents1: 'Vue.js、Vuetify、firebase、BootStrap4',
          contents2:
            'FireBaseのデータベースとログイン機能を使用。部屋やパスワードも付けてみました。',
          url: 'https://chatapp-f1e5d.firebaseapp.com'
        },
        {
          name: '神経衰弱',
          image: require('@/assets/portfolio/nervous.png'),
          contents1: 'Vue.js、Vuetify、BootStrap4',
          contents2:
            'プログラミング言語やDBのロゴを利用したミニゲームです。そろえると作成者、リファレンス等が表示されます。',
          url: 'https://taka1156.github.io/NervousBreakDown'
        },
        {
          name: 'P5.js学習ページ',
          image: require('@/assets/portfolio/p5js.png'),
          contents1: 'JavaScript、P5.js、P5.collide2D',
          contents2:
            'p5.jsとその他関連ライブラリの学習ページです。スマホの加速度や傾きとの連動も試しています',
          url: 'https://taka1156.github.io/p5.js-learning/'
        },
        {
          name: 'ブログサイト',
          image: require('@/assets/portfolio/blog.png'),
          contents1: 'Nuxt.js、Vue.js、BootStrap4、vue-p5',
          contents2:
            'Nuxt+Netlify+Contentsfulで作ったブログサイトです。P5.js(vue-p5)も使っています。',
          url: 'https://takablog-test.netlify.com/'
        },
        {
          name: 'マークダウンエディター',
          image: require('@/assets/portfolio/mdeditor.png'),
          contents1: 'electron、Vue.js、BootStrap4',
          contents2:
            'electron-vueで作ったデスクトップマークダウンエディターです。スライドモードもつけてみました。',
          url: 'https://github.com/taka1156/markdown-editor'
        },
        {
          name: 'ログイン処理サンプル',
          image: require('@/assets/portfolio/noimg.png'),
          contents1: 'PHP、Laravel、Vue.js、 PostgreSQL',
          contents2: 'VueとLaravelを利用して簡単なログイン処理を実装してみました。',
          url: 'https://github.com/taka1156/sample-auth'
        },
        {
          name: 'Qiita記事の吸い出し',
          image: require('@/assets/portfolio/noimg.png'),
          contents1: 'python、pyinstaller',
          contents2:
            'Qiitaで気になった記事を個人利用の範囲内でローカルに保持するため、作成(私的使用のための複製)',
          url: 'https://github.com/taka1156/QiitaMarkDown'
        }
      ]
    };
  },
  computed: {
    tag() {
      return this.$route.params.tag;
    },
    isDisplay() {
      return this.tagFilter.length !== 0;
    },
    tagFilter() {
      // 特に指定がない時
      if (this.tag === 'all') {
        return this.portfolio;
      }
      // 指定がある時
      return this.portfolio.filter(card => {
        return card.contents1.match(new RegExp(`${this.tag}`, 'gi'));
      });
    }
  },
  methods: {
    resetPath() {
      const CURRENT_PATH = this.$route.path;
      const RESET_PATH = CURRENT_PATH.replace(/portfolio\/.*/, 'portfolio/all');
      this.$router.push(RESET_PATH);
    }
  }
};
</script>

<style scoped>
.msg__link {
  color: blue;
}
</style>
