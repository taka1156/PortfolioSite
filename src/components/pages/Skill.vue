<template>
  <div class="Skill">
    <div class="container">
      <h1>Skill</h1>
      <card-list :cards="skills" />
    </div>
  </div>
</template>

<script>
import CardList from '@/components/parts/Card/CardList';

export default {
  name: 'Skill',
  components: {
    'card-list': CardList
  },
  data() {
    return {
      skills: [
        {
          name: 'PHP',
          image: require('@/assets/plang_logo/php.svg'),
          contents1: '1~3ヶ月',
          contents2: 'VagrantでLAMPサーバーを構築し、簡単な掲示板を作りました。',
          url: './portfolio/php'
        },
        {
          name: 'Laravel',
          image: require('@/assets/plang_logo/laravel.svg'),
          contents1: '1~2ヶ月',
          contents2:
            'vueと連携した情報も多いので積極的に勉強しています。laradockなども触れています。',
          url: './portfolio/laravel'
        },
        {
          name: 'JavaScript(ES6)',
          image: require('@/assets/plang_logo/javascript.svg'),
          contents1: '5~6ヶ月',
          contents2:
            'Vue.jsやExpress.js、p5.jsを学ぶために基礎的なことをやりました。',
          url: './portfolio/javascript'
        },
        {
          name: 'Vue.js',
          image: require('@/assets/plang_logo/vue.svg'),
          contents1: '4~5ヶ月',
          contents2:
            'フロントエンドの知識に触れたり、アプリやwebページを作るために学んでいます。',
          url: './portfolio/vue.js'
        },
        {
          name: 'Electron',
          image: require('@/assets/plang_logo/electron.svg'),
          contents1: '3~4ヶ月',
          contents2:
            'フロントエンドの知識で、デスクトップアプリを作れるということで、興味を持ち学んでいます。',
          url: './portfolio/electron'
        },
        {
          name: 'Python',
          image: require('@/assets/plang_logo/python.svg'),
          contents1: '一年未満',
          contents2: '大学の講義で学び、botを作ったりもしました。',
          url: './portfolio/python'
        },
        {
          name: 'PostgreSQL',
          image: require('@/assets/plang_logo/postgresql.svg'),
          contents1: '6ヶ月',
          contents2: '大学の講義でDMLとDCLを中心にやりました。',
          url: './portfolio/postgresql'
        },
        {
          name: 'MySQL',
          image: require('@/assets/plang_logo/mysql.svg'),
          contents1: '5ヶ月',
          contents2: '独学で勉強していて、PHPとの連携も試してみました。',
          url: './portfolio/mysql'
        }
      ]
    };
  }
};
</script>
