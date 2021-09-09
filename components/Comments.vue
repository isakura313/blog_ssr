<template>
  <div class="comments" />
</template>

<script>

export default {
  props: {
    commentsImg: {
      type: String,
      required: false,
      default: () => '~/static/avatar_face.png'
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

</style>
