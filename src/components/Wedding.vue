<template>
  <div class="wedding-hero">
    <nav class="navbar">
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Couple</a></li>
        <li><a href="#">Story</a></li>
        <li><router-link to="weddingAlbum">Gallery</router-link></li>
      </ul>
    </nav>
    <div class="wedding-title">
      <h1>We are getting married</h1>
    </div>

    <div class="hero-content">
      <h2>桂志宏 & 徐元元</h2>
      <p>天禧宴会中心/孝感/湖北</p>
      <p>16 March 2025</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeddingHero'
}
</script>

<style scoped>
.wedding-hero {
  background-image: url('http://10.30.24.141:9697/weddingRes/DSC09886.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
}

.navbar {
  width: 100%;
  padding: 10px 0;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
}

.nav-links {
  list-style-type: none;
  display: flex;
  gap: 15px;
  margin-right: 20px;
}

.nav-links li a {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.wedding-title {
  position: absolute;
  top: 60px;
}
.wedding-title h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'NoteScript_SemiBold';
}

.hero-content {
  position: absolute;
  bottom: 20px;
}
.hero-content h2 {
  font-size: 72px;
  margin-bottom: 16px;
  font-family: 'HanYi2';
  color: red; /* 设置字体颜色为红色 */
}

.hero-content p {
  font-size: 24px;
  margin-top: 4px;
  font-family: 'XiangJiao2';
  font-weight: bold; /* 加粗字体 */
  color: black;
  font-style: italic;
}

/* 横屏模式下的样式 */
@media (orientation: landscape) {
  .wedding-hero {
    flex-direction: row;
  }

  .navbar {
    order: 1;
    margin-left: 20px;
  }

  .hero-content {
    order: 2;
    margin-right: 20px;
  }
}

/* 竖屏模式下的样式 */
@media (orientation: portrait) {
  .wedding-hero {
    flex-direction: column;
  }

  .navbar {
    margin-top: 10px;
  }

.wedding-title {
  position: absolute;
  top: 100px;
}
.wedding-title h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}
  .hero-content {
    margin-top: 30px;
  }
  .hero-content h2 {
    font-size: 36px;
    margin-bottom: 16px;
  }
}

</style>
