<!-- Please remove this file from your project -->
<template>
  <div class="article">
    <img :src="articleImg">
    <h3 class="article__header" v-text="header" />
    <p class="article__content" v-text="content" />
    <div class="edit_wrapper">
      <div class="article__comments" />
      {{ commentsCount }}
      <div class="article__edit" />
    </div>
  </div>
</template>

<script>

export default {
  filters: {
    filterText () {
      return this.content
    }
  },
  props: {
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
  }
}
</script>

<style  lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Manrope:wght@300;400;500;700&display=swap');
$logo_font: 'Inter', sans-serif;
$main_font: 'Manrope', sans-serif;
$main__red: #FF008A;
$background_light_grey: #E5E5E5;
.article {
  width: 32%;
}
.article__img{
  width: 100%;
  height: 200px;
}
.article__header{
  font-family: $main_font;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.2;
}
.article__content{
  font-family: $main_font;
  font-weight: 500;
  line-height: 1.1;
}
.edit_wrapper{
  display:flex;
}
</style>
