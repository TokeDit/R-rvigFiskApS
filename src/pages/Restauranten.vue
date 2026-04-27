<script setup>
import HoursCard from '@/components/HoursCard.vue'
</script>

<template>
  <section class="hero">
    <div class="hero-overlay">
      <h1>Restauranten</h1>
      <p class="tagline">Sæsonens bedste fra havet – serveret på Rørvig Havn</p>
    </div>

    <HoursCard branch="restaurant" />
  </section>

  <section class="editorial">
    <!-- Row 1: two photos side by side -->
    <div class="photo-pair">
      <div class="photo-slot">
        <img src="/Assets/Talerken foto med øl.png" alt="Tallerken med mad og øl" class="photo-fill" />
      </div>
      <div class="photo-slot">
        <img src="/Assets/HeleBygningen.png" alt="Restauranten på Rørvig Havn" class="photo-fill" />
      </div>
    </div>

    <!-- Row 2: text left, photo right -->
    <div class="feature-row">
      <div class="feature-text">
        <h2>Lækre delikatesser fra vores berømte skaldyrsbuffet</h2>
        <p>
          Vores skaldyrsbuffet byder på et udvalg af
          <strong>friske, hjemmelavede delikatesser</strong>,
          der fremhæver havets bedste smage. Smag vores cremede
          fiskesalater, marinerede rejer, delikate røgede specialiteter
          og andre håndlavede lækkerier – alt tilberedt med kærlighed
          og de bedste råvarer. En sand oplevelse for skaldyrsentusiaster!
        </p>
      </div>
      <div class="feature-photo">
        <img src="/Assets/delikatesser fra buffeten.png" alt="Delikatesser fra buffeten" class="photo-fill" />
      </div>
    </div>
  </section>

  <section class="buffet-section">
    <div class="buffet-inner">

      <div class="buffet-text">
        <h2>Vores skaldyrsbuffet</h2>
        <p>
          Buffeten byder på et rigt udvalg af havets bedste råvarer, alt tilberedt i huset med omhu og de bedste ingredienser.
          Find hjemmelavede fiskesalater, friske Nordsørejer, marinerede sild, røget laks og makrel fra vores eget røgeri,
          blåmuslinger dampet i hvidvin samt et udvalg af hjemmelavede tilbehør og brød til.
          En sand oplevelse for den, der elsker smagen af havet.
        </p>
      </div>

      <div class="buffet-gallery">
        <div class="gallery-slot"><span>Billede kommer snart</span></div>
        <div class="gallery-slot"><span>Billede kommer snart</span></div>
        <div class="gallery-slot"><span>Billede kommer snart</span></div>
        <div class="gallery-slot"><span>Billede kommer snart</span></div>
        <div class="gallery-slot"><span>Billede kommer snart</span></div>
        <div class="gallery-slot"><span>Billede kommer snart</span></div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Hero */
.hero {
  position: relative;
  width: 100%;
  height: 420px;
  background-image: url('/Assets/fiskevindue kenny.jpg');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  text-align: center;
  padding: 0 1rem;
}

.hero-overlay h1 {
  font-size: 2.75rem;
  letter-spacing: 0.04em;
}

.hero-overlay .tagline {
  margin-top: 0.6rem;
  font-size: 1.05rem;
  font-style: italic;
  opacity: 0.85;
}

/* ── Editorial section ──────────────────────────────── */
.editorial {
  background: #fff;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2.5rem;
}

.photo-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 0 4rem 2.5rem;
}

.photo-slot {
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: #d0ccc7;
  border-radius: 4px;
}

.photo-fill {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 3.5rem 4rem;
  border-top: 1px solid #e8e4e0;
}

.feature-text h2 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  color: #111;
  margin-bottom: 1.25rem;
}

.feature-text p {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.7;
}

.feature-photo {
  overflow: hidden;
  border-radius: 4px;
  aspect-ratio: 4 / 3;
  background: #d0ccc7;
}

/* ── Buffet section ─────────────────────────────────── */
.buffet-section {
  background: #1a2e2b;
  padding: 4rem 1.5rem;
}

.buffet-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.buffet-text {
  max-width: 680px;
  margin: 0 auto 3rem;
  text-align: center;
}

.buffet-text h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.buffet-text p {
  font-size: 0.95rem;
  color: #9bbfba;
  line-height: 1.75;
}

.buffet-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.gallery-slot {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 6px;
  background: linear-gradient(135deg, #2e4a45 0%, #1a2e2b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-slot span {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4a7e78;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Mobile */
@media (max-width: 700px) {
  .hero {
    height: 300px;
  }

  .photo-pair {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1.25rem 1.5rem;
  }

  .photo-slot {
    aspect-ratio: 16 / 9;
  }

  .feature-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1.25rem;
  }

  .feature-text h2 {
    font-size: 1.5rem;
  }

  .buffet-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .buffet-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
