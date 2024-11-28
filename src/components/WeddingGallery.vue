<template>
  <div class="photo-album">
    <div class="photo-row" v-for="(row, index) in imageRows" :key="index">
      <div class="photo-cell" v-for="image in row" :key="image.id">
        <a :href="image.fullImg" target="_blank">
           <img :src="image.fullImg" class="photo-image" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['imageLinks']),
    imageRows() {
      const rows = [];
      for (let i = 0; i < this.imageLinks.length; i += 4) {
        rows.push(this.imageLinks.slice(i, i + 4));
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
