<template>
  <div class="photo-album">
    <div class="photo-row" v-for="(row, index) in imageRows" :key="index">
      <div class="photo-cell" v-for="(imageUrl, idx) in row" :key="idx">
        <img :src="imageUrl" class="photo-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'http://10.30.24.141:9697/weddingRes/WechatIMG264.jpeg',
        'http://10.30.24.141:9697/weddingRes/WechatIMG265.jpeg',
        'http://10.30.24.141:9697/weddingRes/WechatIMG266.jpeg',
        'http://10.30.24.141:9697/weddingRes/WechatIMG267.jpeg'
      ],
    };
  },
  computed: {
    imageRows() {
      const rows = [];
      for (let i = 0; i < this.images.length; i += 4) {
        rows.push(this.images.slice(i, i + 4));
      }
      return rows;
    },
  },
};
</script>

<style>
.photo-album {
  display: flex;
  flex-direction: column;
}

.photo-row {
  display: flex;
  justify-content: space-around;
}

.photo-cell {
  flex: 1;
  max-width: 25%; /* Adjust as needed */
  margin: 10px;
  box-sizing: border-box;
}

.photo-image {
  width: 100%;
  height: auto;
  display: block;
}
</style>
