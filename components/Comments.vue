<template>
  <div class="comments">
    <div
      :style="{ backgroundImage: 'url(' + commentsImg + ')' }"
      class="comments__img"
    />
    <span class="comments__nickname">
      {{ userNickName }}
    </span>
    <p class="comments__content">
      {{ userComment }}
    </p>
  </div>
</template>

<script>

export default {
  props: {
    commentsImg: {
      type: String,
      required: false,
      default: () => '../avatar_face.svg'
    },
    userNickName: {
      type: String,
      required: false,
      default: () => 'чувак'
    },
    userComment: {
      type: String,
      required: false,
      default: () => 'Comment'
    }
  }

};
</script>

<style lang="scss">
.comments__img{
  width: 36px;
  height: 36px;
  border-style: contain;
  background-position: center center;
  background-image: url('');
}
</style>
