<template>
  <nav class="navbar">
    <RouterLink to="/" class="navbar-brand">
      <img src="/Assets/RørvigFiskLogo.jpg" alt="Rørvigs Fisk logo" class="logo" />
    </RouterLink>

    <button class="burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" :class="{ open: menuOpen }">
      <li><RouterLink to="/fiskebutikken">Fiskebutikken</RouterLink></li>
      <li><RouterLink to="/restauranten">Restauranten</RouterLink></li>
      <li><RouterLink to="/bistroen">Bistroen</RouterLink></li>
      <li><RouterLink to="/baren">Baren</RouterLink></li>
      <li><RouterLink to="/åbningstider">Åbningstider</RouterLink></li>
      <li><RouterLink to="/om-os">Om os</RouterLink></li>
      <li><RouterLink to="/arrangementer">Arrangementer / Events</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  background-color: #000;
  padding: 0 1.5rem;
  height: 96px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 6px 30px 4px rgba(255, 100, 20, 0.65);
}

.navbar-brand .logo {
  height: 90px;
  width: auto;
  display: block;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0 0 0 auto;
  padding: 0;
  gap: 1.75rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: rgb(255, 100, 20, 0.65);
}

.nav-links a.router-link-active {
  color: rgb(255, 100, 20);
  border-bottom: 2px solid rgb(255, 100, 20);
  padding-bottom: 2px;
}

/* Burger button — hidden on desktop */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 0;
}c

.burger span {
  display: block;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

.burger.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile */
@media (max-width: 900px) {
  .burger {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    background: #000;
    padding: 1rem 2rem 1.5rem;
    gap: 1.25rem;
    margin: 0;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>
