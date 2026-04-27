<script setup>
import GiftCard from '@/components/GiftCard.vue';
import HoursCard from '@/components/HoursCard.vue'

// Delikatesser - tilføj /Assets/<filnavn> når billeder er klar
const DELI_GROUPS = [
  {
    label: 'Røget fisk',
    items: [
      {
        name: 'Røget Sild',
        img: '/Assets/Røget makrel.jpg.png',
        description: 'Langsomtrøget over bøgesmuld. En klassisk dansk delikatesse med en rig, dyb smag.',
      },
      {
        name: 'Røget Makrel',
        img: null,
        description: 'Fed og smagfuld makrel røget til perfektion i vores eget røgeri, efter de traditionelle principper.',
      },
      {
        name: 'Røget Laks',
        img: null,
        description: 'Silkeblød og mild med en delikat røget aroma. Perfekt på rugbrød eller til forret. Fås både Varmrøget som stykke eller koldrøget som skiver',
      },
      {
        name: 'Røget Ål',
        img: null,
        description: 'En silkeblød ål som smelter på tungen, ligesom i gamle dage.',
      },
    ],
  },
  {
    label: 'Salater',
    items: [
      {
        name: 'Rejesalat',
        img: null,
        description: 'Hjemmelavet med friske Nordsørejer, rørt med nænsom hånd og gode råvarer.',
      },
      {
        name: 'Laksesalat',
        img: null,
        description: 'Cremet og frisk med store stykker laks æbler og toppet med citron og dild. Vores egen opskrift siden dag et.',
      },
      {
        name: 'Tunsalat',
        img: null,
        description: 'En cremet tunsalat, lavet på mayonaise med hvidløg, foråsløg og soltørrede tomater, den idele salat til det lækre ristede brød en sommeraften i solen',
      },
      {
        name: 'Krabbesalat',
        img: null,
        description: 'Mild og delikat salat lavet på surimi og rørt med kærlighed.',
      },
    ],
  },
  {
    label: 'Fiskefrikadeller og mere',
    items: [
      {
        name: 'Fiskefrikadeller',
        img: null,
        description: 'Stegte fiskefrikadeller formet og stegt i hånden, og lavet på samme opskrift de sidste 30år',
      },
      {
        name: 'Fiskesuppe',
        img: null,
        description: 'En cremet fiskesuppe froset og klar til at tage med hjem enten som hovedret eller som spisligt køleelement til din friske fisk',
      },
      {
        name: 'Lynstegt tun',
        img: null,
        description: 'En lækker tun stegt i sesam olie, med en flot stegeskorpe og det rødeste kød, perfekt med tangsalat og en sesam dressing',
      },
    ],
  },
]

// Faste fisk - tilføj /Assets/<filnavn> når billeder er klar
const FISH = [
  {
    name: 'Torsk',
    img: null,
    description: 'Den klassiske hvide fisk fra Kattegat og Skagerrak. Saftig, mild og alsidig på tallerkenen.',
  },
  {
    name: 'Laks',
    img: null,
    description: 'Fedtmarmoreret og smagfuld. Vi fører frisk laks hele året, perfekt til grillning, stegning eller gravad.',
  },
  {
    name: 'Makrel',
    img: '/Assets/Makrel.jpg.png',
    description: 'Sølvblankt og næringsrigt. Makrelen er i sæson fra forsommer til efterår og smager bedst helt frisk.',
  },
  {
    name: 'Rødspætte',
    img: null,
    description: 'Den flade favorit fra de indre danske farvande. Fast hvidt kød med en let, delikat smag.',
  },
  {
    name: 'Sild',
    img: null,
    description: 'En dansk klassiker. Vi fører frisk sild til stegning og marinering samt vores egen krydret marinerede sild.',
  },
  {
    name: 'Rejer',
    img: null,
    description: 'Nordsørejer kogt i havvand direkte fra fiskeriet. Søde, saftige og klar til at pille.',
  },
  {
    name: 'Havørred',
    img: null,
    description: 'Den vilde kystfisk med lyserødt, fast kød og en ren, nøddeagtig smag. En ægte sæsonhøjdepunkt.',
  },
]

</script>

<template>
  <section class="hero">
    <div class="hero-overlay">
      <h1>Fiskebutikken</h1>
      <p class="tagline">Frisk fisk &amp; røgede specialiteter – direkte fra havet</p>
    </div>

    <HoursCard branch="fiskebutikken" />
  </section>

  <main class="page-layout">
    <div class="content-section">
      <div class="text-block">
        <h2>Frisk fisk og nyrøget specialiteter direkte fra røgovnen</h2>
        <p>Velkommen til vores fiskebutik på Rørvig Havn! Her finder du et stort udvalg af <strong>friskfanget fisk, skaldyr og hjemmelavede salater og delikatesser</strong>, nøje udvalgt til dig, der sætter pris på kvalitet og ægte smag.</p>
        <p>Vores dygtige team står klar til at vejlede dig – uanset om du leder efter dagens bedste fangst, lækre råvarer eller specialiteter til middagsbordet. Kom forbi og oplev smagen af havet!</p>
        <blockquote>"Vi rør ikke vores salater på maskine og bånd – men med kærlighed og nænsom hånd."</blockquote> 
      </div>
      <div class="portrait">
        <img src="/Assets/Andreas.jpg.png" alt="Andreas på Rørvig Havn" />
      </div>
    </div>

    <!-- =============================================
         UGENS TILBUD — opdater <td> hver uge
         ============================================= -->
    <div class="discounts-card">
      <h3>Ugens tilbud</h3>
      <table class="discount-table">
        <tbody>
          <tr>
            <th>Man</th>
            <td>Røget laks – 20% rabat</td>
          </tr>
          <tr>
            <th>Tirs</th>
            <td>Torsk – 2 for 1</td>
          </tr>
          <tr>
            <th>Ons</th>
            <td>Rejer – 15% rabat</td>
          </tr>
          <tr>
            <th>Tors</th>
            <td>Hornfisk – dagens pris</td>
          </tr>
          <tr>
            <th>Fre</th>
            <td>Fiskefrikadeller – køb 6, betal for 4</td>
          </tr>
          <tr>
            <th>Lør</th>
            <td>Blåmuslinger – halvt pris</td>
          </tr>
          <tr>
            <th>Søn</th>
            <td>Røget makrel – 25% rabat</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>

  <!-- ── Fiskene vi altid har ─────────────────────────────────────────────── -->
  <section class="fish-collage">
    <h2 class="collage-heading">Fiskene vi altid har</h2>
    <p class="collage-sub">Friske fisk du finder hos os hele sæsonen</p>
    <div class="fish-grid">
      <article v-for="fish in FISH" :key="fish.name" class="fish-card">
        <div class="fish-img-wrap">
          <img v-if="fish.img" :src="fish.img" :alt="fish.name" class="fish-img" />
          <div v-else class="fish-img-placeholder">
            <span>{{ fish.name }}</span>
          </div>
        </div>
        <div class="fish-card-body">
          <h3 class="fish-name">{{ fish.name }}</h3>
          <p class="fish-desc">{{ fish.description }}</p>
        </div>
      </article>
    </div>
  </section>

  <!-- Delikatesser fra butikken -->
  <section class="deli-section">
    <h2 class="deli-heading">Delikatesser fra butikken</h2>
    <p class="deli-sub">Hjemmelavet med omhu og klar til at tage med hjem</p>
    <div v-for="group in DELI_GROUPS" :key="group.label" class="deli-group">
      <h3 class="group-label">{{ group.label }}</h3>
      <div class="deli-grid">
        <article v-for="item in group.items" :key="item.name" class="deli-card">
          <div class="deli-img-wrap">
            <img v-if="item.img" :src="item.img" :alt="item.name" class="deli-img" />
            <div v-else class="deli-img-placeholder">
              <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="deli-card-body">
            <h4 class="deli-name">{{ item.name }}</h4>
            <p class="deli-desc">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
    <GiftCard />
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

.link-line {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1.25rem !important;
}

.cta-btn {
  display: inline-block;
  background: #e06a00;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.65em 1.4em;
  border-radius: 6px;
  text-decoration: none;
}

.cta-btn:hover {
  background: #c45d00;
}

.portrait {
  flex: 0 0 260px;
}

.portrait img {
  width: 100%;
  border-radius: 8px;
  display: block;
  object-fit: cover;
  aspect-ratio: 3 / 4;
}

/* Discounts card */
.discounts-card {
  flex: 0 0 260px;
  aspect-ratio: 3 / 4;
  overflow: auto;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  background: #fafafa;
}

.discounts-card h3 {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 0.6rem;
}

.discount-table {
  width: 100%;
  border-collapse: collapse;
}

.discount-table th,
.discount-table td {
  padding: 0.3rem 0;
  text-align: left;
  font-size: 0.8rem;
  border-bottom: 1px solid #ebebeb;
  vertical-align: top;
}

.discount-table th {
  width: 36px;
  font-weight: 700;
  color: #111;
  white-space: nowrap;
  padding-right: 0.5rem;
}

.discount-table td {
  color: #444;
}

.discount-table tr:last-child th,
.discount-table tr:last-child td {
  border-bottom: none;
}

/* Mobile */
@media (max-width: 700px) {
  .hero {
    height: 300px;
  }

  .page-layout {
    flex-direction: column;
  }

  .discounts-card {
    order: -1;
    width: 100%;
    aspect-ratio: unset;
  }

  .content-section {
    flex-direction: column;
  }

  .portrait {
    flex: 0 0 auto;
    width: 100%;
  }
}

/* ── Fish collage ─────────────────────────────────────────────────────────── */
.fish-collage {
  padding: 3rem 1.5rem 4rem;
  background: #f7f5f2;
  border-top: 1px solid #e8e4de;
}

.collage-heading {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.4rem;
}

.collage-sub {
  text-align: center;
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 2.25rem;
}

.fish-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
}

.fish-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  transition: transform 0.18s, box-shadow 0.18s;
}

.fish-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

.fish-img-wrap {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #e8e4de;
}

.fish-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.fish-img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d6ede8 0%, #b8d9d3 100%);
  color: #4a7e78;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.fish-card-body {
  padding: 0.9rem 1rem 1.1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.fish-name {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: #111;
}

.fish-desc {
  font-size: 0.82rem;
  color: #555;
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 900px) {
  .fish-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .fish-grid {
    grid-template-columns: 1fr;
  }
}

/* Delikatesser section */
.deli-section {
  padding: 3rem 1.5rem 4rem;
  background: #1a2e2b;
}

.deli-heading {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  color: #fff;
  margin-bottom: 0.4rem;
}

.deli-sub {
  text-align: center;
  color: #9bbfba;
  font-size: 0.95rem;
  margin-bottom: 2.5rem;
}

.deli-group {
  max-width: 1100px;
  margin: 0 auto 2.5rem;
}

.deli-group:last-child {
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

.deli-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.deli-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: transform 0.18s, box-shadow 0.18s;
}

.deli-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.deli-img-wrap {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #2e4a45;
}

.deli-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.deli-img-placeholder {
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
}

.deli-card-body {
  padding: 0.9rem 1rem 1.1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.deli-name {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: #111;
}

.deli-desc {
  font-size: 0.82rem;
  color: #555;
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 900px) {
  .deli-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .deli-grid {
    grid-template-columns: 1fr;
  }
}
</style>
