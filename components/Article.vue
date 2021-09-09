<!-- Please remove this file from your project -->
<template>
  <div class="article">
    <img :src="articleImg">
    <h3 class="article__header" v-text="header" />
    <p class="article__content">
      {{ content }}
    </p>
    <div class="edit_wrapper">
      <div class="article__comments">
        <img src="~/static/comment.svg" alt="comment, icon">
      </div>
      {{ commentsCount }}
      <div class="article__edit">
        <nuxt-link :to="editor/id">
          <img src="~/static/pen.svg" alt="comment, icon">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    idOfArticle: {
      type: String,
      required: true,
      default: () => '~/static/img_comp.png'
    },
    articleImg: {
      type: String,
      required: false,
      default: () => '~/static/img_comp.png'
    },
    header: {
      type: String,
      required: true,
      default: () => 'Дефолтная информация'
    },
    content: {
      type: String,
      required: true,
      default: () => 'Дефолтный контент'
    },
    commentsCount: {
      type: Number,
      required: false,
      default: () => 0
    }
  },
  computed: {
    textFilter () {
      return this.content;
      //   if (this.content.length > 52) {
      //     return value;
      //   } else {
      //     return this.content;
      //   }
    }
  }
};
</script>

<style  lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Manrope:wght@300;400;500;700&display=swap");
$logo_font: "Inter", sans-serif;
$main_font: "Manrope", sans-serif;
$main__red: #ff008a;
$background_light_grey: #e5e5e5;
.article {
  border: 1px solid #e2e2e2;
  padding: 20px 16px 12px 16px;
  position: relative;
}
.article__img {
  width: 100%;
  height: 200px;
}
.article__header {
  font-family: $main_font;
  font-size: 28px;
  font-weight: bold;
  line-height: 0.8;
}
.article__content {
  font-family: $main_font;
  font-weight: 500;
}
.edit_wrapper {
  display: grid;
  grid-template-columns: 34px 20px 56px;
  width: 140px;
  justify-content: space-around;
}
</style>
