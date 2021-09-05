<template>
  <div>
    <Header />
    <div class="article_wrapper">
      <Article
        v-for="article in articles"
        :key="article.id"
        :article-img="img"
        :header="article.title"
        :content="article.body"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Article from '../components/Article.vue'
import Header from '../layouts/Header.vue'
import Footer from '../layouts/Footer.vue'

export default {
  components: {
    Article,
    Header,
    Footer
  },
  data () {
    return {
      img: 'img_comp.png',
      articles: [],
      commentsCount: 0,
      limitOnPage: 15,
      pageNumber: 1
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const articles = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts?_embed=comments?_page=${this.pageNumber}&_limit=${this.limitOnPage}`)
      this.articles = articles
    }

  }
}
</script>

<style scoped lang ="scss">
.article_wrapper{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 23px;
}
</style>
