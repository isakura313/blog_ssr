<template>
  <footer class="footer">
    <span class="footer__info"> {{ yearNow }} copyright all rights reserved </span>
  </footer>
</template>

<script>
export default {
  computed: {
    yearNow () {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped lang ='scss'>
.footer{
  display: flex;
  align-items: self;
  margin: 136px 0 39px 93px;
}
.footer__info{
  font-family: "Inter";
  font-weight: 400;
  font-weight: 16px;
}
@media screen and(max-width: 375px){
  .footer{
    margin: 80px 0px 20px 0px;
  }
}
</style>
