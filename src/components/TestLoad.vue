<template>
  <div>
    <button @click="downloadZip">Download ZIP</button>
  </div>
</template>

<script>
export default {
  methods: {
    async downloadZip() {
      const url = 'wpjk://res.weplayapp.com/conf/62199B16-FF7D-4849-854D-D77EDAB4718F.png?game_type=1041&res_type=1&ori_scheme=https';

      try {
        const response = await this.fetchZip(url);
        if (response) {
          // Handle the downloaded ZIP file
          console.log('ZIP file downloaded:', response);
        } else {
          console.log('Failed to download ZIP file.');
        }
      } catch (error) {
        console.error('Error downloading ZIP file:', error);
      }
    },

    fetchZip(url) {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            resolve(null);
          }
        };

        xhr.onerror = () => {
          resolve(null);
        };

        xhr.onabort = () => {
          resolve(null);
        };

        xhr.send();
      });
    },
  },
};
</script>