<template>
  <div class="wrapper_editor">
    <div
      :style="{ backgroundImage: 'url(' + articleImg + ')' }"
      class="editor__img"
    />
    <h3 class="editor__h3">
      {{ headerOfArticle }}
    </h3>
    <client-only>
      <VueEditor
        v-model="textToEdit"
      />
    </client-only>
    <div class="editor_task">
      <div v-if="editNow">
        <div class="icon" />
        <p>Редактировать текст</p>
      </div>
      <div v-else>
        <button>Сохранить изменения</button>
        <button>Отменить</button>
      </div>
    </div>
    <Comments
      v-for="comments in commmentsData"
      :key="comments.id"
      :user-nick-name="comments.name"
      :user-comment="comments.body"
    />
  </div>
  <!-- </div> -->
</template>
<script>
import axios from 'axios';
import Comments from '../../components/Comments.vue';

export default {
  components: {
    Comments
  },
  data () {
    return {
      articleImg: '~/static/Article.png',
      headerOfArticle: '',
      textToEdit: '',
      editNow: false,
      commmentsData: []
    };
  },
  async mounted () {
    await this.getArticleData();
    await this.commentsData();
  },
  methods: {
    async getArticleData () {
      const dataArticle = await axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      });
      // console.log(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
      this.articleImg = '../Article.png';
      this.headerOfArticle = dataArticle.data.title;
      this.textToEdit = dataArticle.data.body;
    },
    async commentsData () {
      const commentsData = await axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`
      });
      this.commmentsData = commentsData.data;
    }
  }
};
</script>

<style lang="scss">
.wrapper_editor {
  margin: 0 90px;
}
.editor__img {
  height: 285px;
}
</style>
