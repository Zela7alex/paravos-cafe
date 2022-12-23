<template>
  <div>
    <div class="row">
      <div class="col-3">Categories</div>
      <div class="col-9">{{ pageContent }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['pages']),
    pageContent() {
      const page = this.pages.find((page) => page.slug == 'menu')

      if (page) {
        return page.content
      } else {
        return ''
      }
    },
  },
}
</script>

<style>
.row {
  margin-top: 5em;
}
</style>
