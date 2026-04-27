<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-left">
        <nav class="footer-links">
          <RouterLink to="/om-os">Om os</RouterLink>
          <RouterLink to="/åbningstider">Åbningstider</RouterLink>
          <RouterLink to="/arrangementer">Arrangementer</RouterLink>
        </nav>

        <div class="footer-formalia">
          <p>Rørvigs Fisk ApS</p>
          <p>Toldbodvej 81, 4581 Rørvig</p>
          <p>CVR: 40994416</p>
          <p>
            <a href="mailto:info@rørvigfisk.dk">info@rørvigfisk.dk</a>
          </p>
        </div>

        <p class="footer-copy">&copy; {{ year }} Rørvigs Fisk ApS. Alle rettigheder forbeholdes.</p>
      </div>

      <div class="footer-right">
        <RouterLink to="/">
          <img src="/Assets/RørvigFiskLogo.jpg" alt="Rørvigs Fisk logo" class="footer-logo" />
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  position: relative;
  z-index: 1;
  background-color: #000;
  box-shadow: 0 -6px 30px 4px rgba(255, 100, 20, 0.65);
  color: #ccc;
  padding: 2.5rem 1.5rem;
}

.footer-inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #ff6414;
}

.footer-formalia {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.85rem;
  color: #aaa;
}

.footer-formalia a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-formalia a:hover {
  color: #ff6414;
}

.footer-copy {
  font-size: 0.78rem;
  color: #666;
}

.footer-logo {
  height: 90px;
  width: auto;
  display: block;
  opacity: 0.9;
}

@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .footer-logo {
    height: 64px;
  }
}
</style>
