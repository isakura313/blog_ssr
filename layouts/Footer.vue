<template>
  <span> {{ yearNow }} copyright all rights reserved </span>
</template>

<script>
export default {
  computed: {
    yearNow () {
      return new Date().getFullYear()
    }
  }
}
</script>
