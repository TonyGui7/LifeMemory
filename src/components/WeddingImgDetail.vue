<template>
  <div class="image-detail">
    <img :src="fullImage" class="full-image" />
  </div>
</template>

<script>
export default {
  name: 'ImageDetail',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
            images: [
              {id:1, fullImg: 'http://10.30.24.141:9697/weddingRes/WechatIMG264.jpeg'},
              {id:2, fullImg: 'http://10.30.24.141:9697/weddingRes/WechatIMG265.jpeg'},
              {id:3, fullImg: 'http://10.30.24.141:9697/weddingRes/WechatIMG266.jpeg'},
              {id:4, fullImg: 'http://10.30.24.141:9697/weddingRes/WechatIMG267.jpeg'}
            ],
    };
  },
  computed: {
    image() {
      return this.images.find((img) => img.id === this.id) || {};
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
