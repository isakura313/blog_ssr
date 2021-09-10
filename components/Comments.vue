<template>
  <div class="comments">
    <div
      :style="{ backgroundImage: 'url(' + commentsImg + ')' }"
      class="comments__img"
    />
    <div class="comments__text">
      <span class="comments__nickname">
        {{ userNickName }}
      </span>
      <p class="comments__content">
        {{ userComment }}
      </p>
    </div>
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
.comments{
  display: grid;
  grid-template-columns: 56px 300px ;
}
.comments__img{
  width: 36px;
  height: 36px;
  border-style: contain;
  background-position: center center;
}
.comments__nickname{
  font-family: Manrope;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.5px;
}
.comments__content{
  font-family: Manrope;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: rgba(60, 60, 67, 0.6);

}
</style>
