<template>
  <div>
    <Loader v-show="$store.state.showLoader" />
    <div class="article_wrapper">
      <Article
        v-for="(article, index) in articles"
        :key="article.id"
        :id-of-article="article.id"
        :article-img="img"
        :header="article.title"
        :content="article.body"
        :comments-count="commentsCount[index]"
      />
    </div>
    <div class="wrap_pag">
      <Pagination
        :pag-length="10"
        @updatePage="updatePageNumber"
      />
    </div>
  </div>
</template>

<script>
import Article from '../components/Article.vue';
import Pagination from '../components/ Pagination.vue';
import Loader from '../components/Loader.vue';

export default {
  components: {
    Article,
    Pagination,
    Loader
  },
  data () {
    return {
      img: 'img_comp.png',
      articles: [],
      commentsCount: [],
      limitOnPage: 15,
      loaderToShow: false
    };
  },
  computed: {
    searchData: {
      get () {
        return this.$store.state.searchNow;
      }
    }
  },
  watch: {
    searchData () {
      this.getData(this.$store.state.paginationNumber);
    }
  },
  async mounted () {
    await this.getData(1);
  },
  methods: {
    updatePageNumber () {
      this.getData(this.$store.state.paginationNumber);
    },
    async getData (page) {
      this.$store.commit('updateShowLoader', true);
      this.$store.commit('updatePagination', page);
      this.loaderToShow = true;
      await this.$store.dispatch('getArticlesContent');
      this.articles = this.$store.state.articleInfo;
      await this.$store.dispatch('getCommentsCount', this.articles);
      this.commentsCount = this.$store.state.commentsCount;
      this.$store.commit('updateShowLoader', false);
    }
  }
};
</script>

<style scoped lang ="scss">
.article_wrapper{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 23px;
  margin: 46px 90px 136px 90px;
  grid-row-gap: 40px;
}
.wrap_pag {
  display: flex;
  justify-content: flex-end;
  margin-right: 90px;
}
@media screen and(max-width: 375px){
  .article_wrapper{
    grid-template-columns: 1fr;
     margin: 0px;
  }
}
</style>
