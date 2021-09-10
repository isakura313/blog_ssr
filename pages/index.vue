<template>
  <div>
    <Loader v-show="loaderToShow" />
    <div class="article_wrapper">
      <Article
        v-for="article in articles"
        :key="article.id"
        :id-of-article="article.id"
        :article-img="img"
        :header="article.title"
        :content="article.body"
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
      commentsCount: 0,
      limitOnPage: 15,
      loaderToShow: false
    };
  },
  mounted () {
    this.getData(1);
  },
  methods: {
    updatePageNumber () {
      this.getData(this.$store.state.paginationNumber);
    },
    async getData (page) {
      this.loaderToShow = true;
      const articles = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts?_embed=comments?_page=${page}&_limit=${this.limitOnPage}`);
      this.articles = articles;
      this.loaderToShow = false;
    }
  }

};
</script>

<style scoped lang ="scss">
.article_wrapper{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 23px;
  margin: 46px 90px 136px 90px;
  grid-row-gap: 40px;
}
.wrap_pag{
  display: flex;
  justify-content: flex-end;
  margin-right: 90px;
}
</style>
