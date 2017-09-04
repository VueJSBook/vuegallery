<template>
  <div>
    <a @click="emitImage(image)" v-for="image in images" href="#"><div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" :src="image.thumbnail" /></div></a>
  </div>
</template>

<script>
  export default {
    props: ['images'],
    methods: {
      emitImage: function (image) {
        this.$emit('emitImage', image)
      }
    }
  }
</script>

