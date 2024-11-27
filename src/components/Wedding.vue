<template>
  <div class="wedding-hero">
    <nav class="navbar">
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Couple</a></li>
        <li><a href="#">Story</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Event</a></li>
        <li><a href="#">RSVP</a></li>
      </ul>
    </nav>

    <div class="hero-content">
      <h1>We are getting married</h1>
      <h2>桂志宏 & 徐元元</h2>
      <p>Tianxi, XiaoGan, Hubei</p>
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
  background-image: url('http://10.30.24.141:9697/weddinggallery/DSC09886.jpg');
  height: 500vh;
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

.logo {
  height: 50px;
  margin-left: 20px;
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

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 8px;
}

.hero-content h2 {
  font-size: 72px;
  margin-bottom: 16px;
  font-family: 'Brush Script MT', cursive;
}

.hero-content p {
  font-size: 24px;
  margin-top: 4px;
}
</style>
