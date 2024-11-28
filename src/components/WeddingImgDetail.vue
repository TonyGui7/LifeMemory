<template>
  <div class="image-detail">
    <img :src="fullImage" class="full-image" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ImageDetail',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState(['imageLinks']),
    image() {
      return this.imageLinks.find((img) => img.id === this.id) || {};
    },
    fullImage() {
      return this.image.fullImage;
    },
  },
};
</script>

<style scoped>
.image-detail {
  text-align: center;
}

.full-image {
  max-width: 90%;
  max-height: 90vh;
  margin: 20px;
}
</style>
