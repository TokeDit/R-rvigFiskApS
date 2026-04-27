<script setup>
import HoursCard from '@/components/HoursCard.vue'

const MENU_GROUPS = [
  {
    label: 'Smørrebrød & Toast',
    items: [
      { name: 'Rejer på rugbrød', img: null, description: 'Generøst lag af friske Nordsørejer på mørkt rugbrød med mayonnaise, citron og dild.' },
      { name: 'Røget laks toast', img: null, description: 'Ristet surdejsbrød med koldrøget laks, flødeost, kapers og rødløg.' },
      { name: 'Fiskefrikadelle', img: null, description: 'Hjemmelavet fiskefrikadelle på rugbrød med remoulade og syltede agurker.' },
    ],
  },
  {
    label: 'Varme Retter',
    items: [
      { name: 'Fiskesuppe', img: null, description: 'Cremet fiskesuppe med dagens fangst, grøntsager og ristet brød til.' },
      { name: 'Fiskeburger', img: null, description: 'Paneret torsk med hjemmelavet coleslaw, tomat og tartarsauce i brioche bolle.' },
      { name: 'Fiskepande', img: null, description: 'Sauterede stykker af dagens fisk med løg, kaperssmør og nye kartofler.' },
    ],
  },
  {
    label: 'Til den søde tand',
    items: [
      { name: 'Vaffel med is', img: null, description: 'Sprød vaffel serveret med en kugle vaniljeis og friske bær.' },
      { name: 'Kage fra køledisken', img: null, description: 'Spørg personalet om dagens hjemmebagte kage.' },
    ],
  },
]
</script>

<template>
  <section class="hero">
    <div class="hero-overlay">
      <h1>Bistroen</h1>
      <p class="tagline">Enkel mad fra havet – spis ude med udsigt til havnen</p>
    </div>

    <HoursCard branch="bistro" subNote="Køkkenet lukker 15 min. før" />
  </section>

  <main class="page-layout">
    <div class="content-section">
      <div class="text-block">
        <h2>Frisk fisk uden omsvøb</h2>
        <p>Bistroen er stedet, hvor du kan sætte dig ned med en tallerken frisk mad og nyde udsigten over Rørvig Havn. Vi laver enkel, ærlig bistromad med fokus på fisk og skaldyr fra vores eget røgeri og fiskebutik.</p>
        <p>Du kan spise inde eller ude på terrassen, og vi har altid en varieret menu klar fra åbning til lukning. Vi forbeholder os retten til at lukke tidligt i dårligt vejr.</p>
        <blockquote>"Godt selskab, frisk fisk og havudsigt."</blockquote>
      </div>
      <div class="info-card">
        <h3>Praktisk info</h3>
        <p>Ingen reservation nødvendig.</p>
        <p>Walk-in velkomment.</p>
        <p><strong>Tlf.</strong> 25 36 24 99</p>
        <p class="info-note">Vi forbeholder os retten til at lukke tidligt ved dårligt vejr.</p>
      </div>
    </div>
  </main>

  <section class="menu-section">
    <h2 class="menu-heading">Bistroens kort</h2>
    <p class="menu-sub">Enkelt og godt fra havnen</p>

    <div v-for="group in MENU_GROUPS" :key="group.label" class="menu-group">
      <h3 class="group-label">{{ group.label }}</h3>
      <div class="menu-grid">
        <article v-for="item in group.items" :key="item.name" class="menu-card">
          <div class="menu-img-wrap">
            <img v-if="item.img" :src="item.img" :alt="item.name" class="menu-img" />
            <div v-else class="menu-img-placeholder">
              <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="menu-card-body">
            <h4 class="menu-name">{{ item.name }}</h4>
            <p class="menu-desc">{{ item.description }}</p>
          </div>
        </article>
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
  background-image: url('/Assets/');
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

/* Page layout */
.page-layout {
  padding: 2.5rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.content-section {
  display: flex;
  flex: 1;
  gap: 2rem;
  align-items: flex-start;
}

.text-block {
  flex: 1;
}

.text-block h2 {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 1rem;
}

.text-block p {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.65;
  margin-bottom: 0.75rem;
}

.text-block blockquote {
  font-style: italic;
  border-left: 3px solid #e06a00;
  padding-left: 0.85rem;
  margin: 1rem 0;
  color: #444;
  font-size: 1.5rem;
  line-height: 1.6;
}

.info-card {
  flex: 0 0 260px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  background: #fafafa;
}

.info-card h3 {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 0.75rem;
}

.info-card p {
  font-size: 0.875rem;
  color: #444;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.info-note {
  font-size: 0.8rem !important;
  color: #888 !important;
  font-style: italic;
  margin-top: 0.75rem !important;
}

/* Menu section */
.menu-section {
  padding: 3rem 1.5rem 4rem;
  background: #1a2e2b;
}

.menu-heading {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  color: #fff;
  margin-bottom: 0.4rem;
}

.menu-sub {
  text-align: center;
  color: #9bbfba;
  font-size: 0.95rem;
  margin-bottom: 2.5rem;
}

.menu-group {
  max-width: 1100px;
  margin: 0 auto 2.5rem;
}

.menu-group:last-child {
  margin-bottom: 0;
}

.group-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #e06a00;
  margin-bottom: 1rem;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.menu-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: transform 0.18s, box-shadow 0.18s;
}

.menu-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.menu-img-wrap {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #2e4a45;
}

.menu-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.menu-img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2e4a45 0%, #1a2e2b 100%);
  color: #9bbfba;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem;
}

.menu-card-body {
  padding: 0.9rem 1rem 1.1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.menu-name {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: #111;
}

.menu-desc {
  font-size: 0.82rem;
  color: #555;
  line-height: 1.55;
  margin: 0;
}

/* Mobile */
@media (max-width: 700px) {
  .hero {
    height: 300px;
  }

  .page-layout {
    flex-direction: column;
  }

  .content-section {
    flex-direction: column;
  }

  .info-card {
    flex: 0 0 auto;
    width: 100%;
  }
}

@media (max-width: 900px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}
</style>
