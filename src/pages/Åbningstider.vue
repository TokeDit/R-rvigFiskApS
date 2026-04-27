<script setup>
import { computed } from 'vue'
import { SCHEDULE } from '@/data/schedule.js'
import { currentWeek, weekRangeLabel } from '@/composables/useWeek.js'

const currentSchedule = computed(() => {
  const w = currentWeek.value
  return SCHEDULE.find(s => w >= s.from && w <= s.to) ?? null
})
</script>

<template>
  <main class="opening-hours">

    <!-- CURRENT WEEK CARD -->
    <div v-if="currentSchedule" class="cw-card">
      <div class="cw-header">
        <div class="cw-title">
          <span class="cw-badge">Denne uge</span>
          <span class="cw-weeknum">Uge {{ currentWeek }}</span>
          <span v-if="currentSchedule.label" class="cw-special">{{ currentSchedule.label }}</span>
        </div>
        <span class="cw-dates">{{ weekRangeLabel }}</span>
      </div>
      <div class="cw-branches">
        <div class="cw-branch">
          <h3>Fiskebutikken &amp; Røgeriet</h3>
          <template v-if="currentSchedule.fiskebutikken?.length">
            <div v-for="(row, i) in currentSchedule.fiskebutikken" :key="i"
                 :class="['cw-row', { 'cw-event-row': row.event }]">
              <span class="cw-day">{{ row.day }}</span>
              <span v-if="Array.isArray(row.hours)" class="cw-hours-stack">
                <span v-for="h in row.hours" :key="h">{{ h }}</span>
              </span>
              <span v-else class="cw-hours">{{ row.hours }}</span>
              <p v-if="row.note" class="cw-note">{{ row.note }}</p>
            </div>
          </template>
          <p v-else class="cw-closed">Lukket denne uge</p>
        </div>
        <div class="cw-branch">
          <h3>Bistroen</h3>
          <p class="cw-sub-note">Køkkenet lukker 15 min. før</p>
          <template v-if="currentSchedule.bistro?.length">
            <div v-for="(row, i) in currentSchedule.bistro" :key="i"
                 :class="['cw-row', { 'cw-event-row': row.event }]">
              <span class="cw-day">{{ row.day }}</span>
              <span v-if="Array.isArray(row.hours)" class="cw-hours-stack">
                <span v-for="h in row.hours" :key="h">{{ h }}</span>
              </span>
              <span v-else class="cw-hours">{{ row.hours }}</span>
              <p v-if="row.note" class="cw-note">{{ row.note }}</p>
            </div>
          </template>
          <p v-else class="cw-closed">Lukket denne uge</p>
        </div>
        <div class="cw-branch">
          <h3>Restauranten</h3>
          <template v-if="currentSchedule.restaurant?.length">
            <div v-for="(row, i) in currentSchedule.restaurant" :key="i"
                 :class="['cw-row', { 'cw-event-row': row.event }]">
              <span class="cw-day">{{ row.day }}</span>
              <span v-if="Array.isArray(row.hours)" class="cw-hours-stack">
                <span v-for="h in row.hours" :key="h">{{ h }}</span>
              </span>
              <span v-else class="cw-hours">{{ row.hours }}</span>
              <p v-if="row.note" class="cw-note">{{ row.note }}</p>
            </div>
          </template>
          <p v-else class="cw-closed">Lukket denne uge</p>
        </div>
      </div>
    </div>
    <div v-else class="cw-card cw-offseason">
      <p>Sæsonen er ikke åben denne uge.</p>
    </div>

    <h1>Åbningstider 2026</h1>

    <div class="branches">

      <!-- FISKEBUTIKKEN OG RØGERIET -->
      <section class="branch">
        <h2>Fiskebutikken &amp; Røgeriet</h2>

        <div class="month">
          <h3>Marts</h3>
          <div class="week">
            <span class="label">Uge 12</span>
            <ul>
              <li><span class="day">Fredag 20/3</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndag</span><span class="hours">10.00–14.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 13</span>
            <ul>
              <li><span class="day">Fredag</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndag</span><span class="hours">10.00–14.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 14</span>
            <ul>
              <li><span class="day">Mandag</span><span class="hours">10.00–17.00</span></li>
              <li><span class="day">Tirsdag</span><span class="hours">10.00–17.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>April</h3>
          <div class="week">
            <span class="label">Uge 14</span>
            <ul>
              <li><span class="day">Onsdag</span><span class="hours">10.00–18.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label highlight">Påsken</span>
            <ul>
              <li><span class="day">Skærtorsdag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Langfredag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Lørdag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Påskedag</span><span class="hours">09.00–15.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 15</span>
            <ul>
              <li><span class="day">2. Påskedag</span><span class="hours">10.00–14.00</span></li>
              <li><span class="day">Fredag</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndag</span><span class="hours">10.00–14.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 16 &amp; 17</span>
            <ul>
              <li><span class="day">Fredag</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndag</span><span class="hours">10.00–14.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>Maj</h3>
          <div class="week">
            <span class="label">Åben alle dage</span>
            <ul>
              <li><span class="day">Man–Tors</span><span class="hours">10.00–17.00</span></li>
              <li><span class="day">Fredage</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdage</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndage</span><span class="hours">10.00–14.00</span></li>
              <li><span class="day">Kristi Himmelfartsdag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Pinsedag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">2. Pinsedag</span><span class="hours">10.00–14.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>Juni</h3>
          <div class="week">
            <span class="label">Uge 23 &amp; 24</span>
            <ul>
              <li><span class="day">Man–Tors</span><span class="hours">10.00–17.00</span></li>
              <li><span class="day">Fredage</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdage</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndage</span><span class="hours">10.00–14.00</span></li>
              <li><span class="day">Grundlovsdag</span><span class="hours">10.00–18.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 25, 26 &amp; 27</span>
            <ul>
              <li><span class="day">Man–Fre</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdage</span><span class="hours">09.00–16.00</span></li>
              <li><span class="day">Søndage</span><span class="hours">10.00–15.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>Juli / August</h3>
          <div class="week">
            <span class="label">Uge 27–33</span>
            <ul>
              <li><span class="day">Man–Fre</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdage</span><span class="hours">09.00–16.00</span></li>
              <li><span class="day">Søndage</span><span class="hours">10.00–15.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 34 &amp; 35</span>
            <ul>
              <li><span class="day">Man–Tors</span><span class="hours">10.00–17.00</span></li>
              <li><span class="day">Fredage</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdage</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndage</span><span class="hours">10.00–14.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>September</h3>
          <div class="week">
            <span class="label">Uge 36</span>
            <ul>
              <li><span class="day">Man–Tors</span><span class="hours">10.00–17.00</span></li>
              <li><span class="day">Fredag</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndag</span><span class="hours">10.00–14.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 37, 38 &amp; 39</span>
            <ul>
              <li><span class="day">Fredage</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdage</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndage</span><span class="hours">10.00–14.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>Oktober</h3>
          <div class="week">
            <span class="label">Uge 40 &amp; 41</span>
            <ul>
              <li><span class="day">Fredag</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndag</span><span class="hours">10.00–14.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label highlight">Efterårsferie – Uge 42</span>
            <ul>
              <li><span class="day">Man–Tors</span><span class="hours">10.00–17.00</span></li>
              <li><span class="day">Fredag</span><span class="hours">10.00–18.00</span></li>
              <li><span class="day">Lørdag</span><span class="hours">09.00–15.00</span></li>
              <li><span class="day">Søndag</span><span class="hours">08.00–14.00</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- BISTROEN -->
      <section class="branch">
        <h2>Bistroen</h2>
        <p class="note">Vi forbeholder os retten til at lukke før grundet vejret. Køkkenet lukker 15 min. før lukketid.</p>

        <div class="month">
          <h3>Marts</h3>
          <div class="week">
            <span class="label">Uge 12</span>
            <ul>
              <li><span class="day">Fredag 20/3</span><span class="hours">11.00–19.00</span></li>
              <li><span class="day">Lørdag &amp; Søndag</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 13</span>
            <ul>
              <li><span class="day">Fre–Søn</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 14</span>
            <ul>
              <li><span class="day">Mandag &amp; Tirsdag</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>April</h3>
          <div class="week">
            <span class="label highlight">Påsken – Uge 14</span>
            <ul>
              <li><span class="day">Onsdag</span><span class="hours">11.00–20.00</span></li>
              <li><span class="day">Skærtorsdag</span><span class="hours">11.00–20.00</span></li>
              <li><span class="day">Langfredag</span><span class="hours">11.00–20.00</span></li>
              <li><span class="day">Lørdag</span><span class="hours">11.00–20.00</span></li>
              <li><span class="day">Påskedag</span><span class="hours">11.00–20.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 15</span>
            <ul>
              <li><span class="day">2. Påskedag</span><span class="hours">11.00–19.00</span></li>
              <li><span class="day">Fre–Søn</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 16 &amp; 17</span>
            <ul>
              <li><span class="day">Fre–Søn</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>Maj</h3>
          <div class="week">
            <span class="label">1–12 maj</span>
            <ul>
              <li><span class="day">Dagligt</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">13 maj</span>
            <ul>
              <li><span class="day">Onsdag</span><span class="hours">11.00–20.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label highlight">Kristi Himmelfartsdag 14/5</span>
            <ul>
              <li><span class="day">Torsdag</span><span class="hours">11.00–21.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">15–16 maj</span>
            <ul>
              <li><span class="day">Fre &amp; Lør</span><span class="hours">11.00–21.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">17–21 maj</span>
            <ul>
              <li><span class="day">Søn–Tors</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label highlight">Pinsen 22–24 maj</span>
            <ul>
              <li><span class="day">Fre–Søn</span><span class="hours">11.00–21.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">2. Pinsedag 25/5</span>
            <ul>
              <li><span class="day">Mandag</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">26–31 maj</span>
            <ul>
              <li><span class="day">Dagligt</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>Juni / Juli</h3>
          <div class="week">
            <span class="label">1–14 juni</span>
            <ul>
              <li><span class="day">Dagligt</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 25–31</span>
            <ul>
              <li><span class="day">Dagligt</span><span class="hours">11.00–22.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>August</h3>
          <div class="week">
            <span class="label">Uge 32–33</span>
            <ul>
              <li><span class="day">Dagligt</span><span class="hours">11.00–20.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 34–35</span>
            <ul>
              <li><span class="day">Dagligt</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>September</h3>
          <div class="week">
            <span class="label">Uge 36</span>
            <ul>
              <li><span class="day">Dagligt</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">Uge 37–39</span>
            <ul>
              <li><span class="day">Fre–Søn</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>Oktober</h3>
          <div class="week">
            <span class="label">Uge 40–41</span>
            <ul>
              <li><span class="day">Fre–Søn</span><span class="hours">11.00–19.00</span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label highlight">Efterårsferie – Uge 42</span>
            <ul>
              <li><span class="day">Man–Lør</span><span class="hours">11.00–19.00</span></li>
              <li><span class="day">Søndag</span><span class="hours">11.00–14.00</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- RESTAURANTEN -->
      <section class="branch">
        <h2>Restauranten</h2>

        <div class="month">
          <h3>April</h3>
          <div class="week">
            <span class="label highlight">Påsken</span>
            <ul>
              <li><span class="day">Skærtorsdag 2/4</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Langfredag 3/4</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Påske lørdag 4/4</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Påskedag 5/4</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">2. Påskedag 6/4</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
            </ul>
          </div>
          <div class="week event">
            <span class="label highlight">Skaldyrsaften 10/4 kl. 18.00</span>
            <p class="booking">Billetter: <a href="tel:25362499">25 36 24 99</a> eller <a href="mailto:Rikke@roervig-fisk.dk">Rikke@roervig-fisk.dk</a></p>
          </div>
          <div class="week">
            <span class="label">17–26 april</span>
            <ul>
              <li><span class="day">Fredag 17/4</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdag 18/4</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndag 19/4</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
              <li><span class="day">Fredag 24/4</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdag 25/4</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndag 26/4</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>Maj</h3>
          <div class="week">
            <span class="label">1–10 maj</span>
            <ul>
              <li><span class="day">Fredag 1/5</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdag 2/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndag 3/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
              <li><span class="day">Fredag 8/5</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdag 9/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndag 10/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label highlight">Kristi Himmelfartsdag 14/5</span>
            <ul>
              <li><span class="day">Torsdag 14/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Fredag 15/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdag 16/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndag 17/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label highlight">Pinsen</span>
            <ul>
              <li><span class="day">Fredag 22/5</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdag 23/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–22.00</span></span></li>
              <li><span class="day">Pinsedag 24/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">2. Pinsedag 25/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">29–31 maj</span>
            <ul>
              <li><span class="day">Fredag 29/5</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdag 30/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndag 31/5</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>Juni</h3>
          <div class="week">
            <span class="label highlight">Grundlovsdag 5/6</span>
            <ul>
              <li><span class="day">Fredag</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">5–28 juni</span>
            <ul>
              <li><span class="day">Fredage</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdage</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndage</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>Juni / Juli / August</h3>
          <div class="week">
            <span class="label">29 juni – 16 aug</span>
            <ul>
              <li><span class="day">Dagligt</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
            </ul>
          </div>
          <div class="week">
            <span class="label">21–30 aug</span>
            <ul>
              <li><span class="day">Fredag 21/8</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdag 22/8</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndag 23/8</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
              <li><span class="day">Fredag 28/8</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdag 29/8</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndag 30/8</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
            </ul>
          </div>
        </div>

        <div class="month">
          <h3>September</h3>
          <div class="week">
            <span class="label">4–13 sep</span>
            <ul>
              <li><span class="day">Fredag 4/9</span><span class="hours-multi"><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Lørdag 5/9</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndag 6/9</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
              <li><span class="day">Lørdag 12/9</span><span class="hours-multi"><span>Frokost 12.00–16.00</span><span>Aften 18.00–21.00</span></span></li>
              <li><span class="day">Søndag 13/9</span><span class="hours-multi"><span>Frokost 12.00–16.00</span></span></li>
            </ul>
          </div>
          <div class="week event">
            <span class="label highlight">Skaldyrsaften 11/9 kl. 18.00</span>
            <p class="booking">Billetter skal bestilles forud: <a href="mailto:Rikke@roervig-fisk.dk">Rikke@roervig-fisk.dk</a></p>
          </div>
        </div>

        <div class="month">
          <h3>Oktober</h3>
          <div class="week event">
            <span class="label highlight">Ålegilde fredag 2/10 kl. 18.00</span>
            <p class="booking">Billetter: <a href="tel:25362499">25 36 24 99</a> eller <a href="mailto:Rikke@roervig-fisk.dk">Rikke@roervig-fisk.dk</a></p>
          </div>
        </div>
      </section>

    </div>
  </main>
</template>

<style scoped>
.opening-hours {
  padding: 3rem 1.5rem 4rem;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  letter-spacing: 0.04em;
}

/* ---- Current Week Card ---- */
.cw-card {
  background: #fff;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 1.5rem 2rem;
  margin-bottom: 3rem;
}

.cw-offseason {
  color: #666;
  font-size: 0.95rem;
}

.cw-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e8e8e8;
}

.cw-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.cw-badge {
  background: #000;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 3px;
}

.cw-weeknum {
  font-size: 1.1rem;
  font-weight: 700;
}

.cw-special {
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: #555;
  padding: 0.15rem 0.5rem;
  border-radius: 3px;
}

.cw-dates {
  font-size: 0.88rem;
  color: #666;
}

.cw-branches {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.cw-branch h3 {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #888;
  margin-bottom: 0.6rem;
}

.cw-sub-note {
  font-size: 0.72rem;
  color: #aaa;
  margin-bottom: 0.5rem;
  margin-top: -0.4rem;
}

.cw-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  padding: 0.22rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.88rem;
  flex-wrap: wrap;
}

.cw-event-row {
  background: #fafaf8;
  border-left: 3px solid #000;
  padding-left: 0.5rem;
  border-bottom: none;
  margin: 0.25rem 0;
  border-radius: 0 3px 3px 0;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.1rem;
}

.cw-day {
  color: #333;
  flex-shrink: 0;
}

.cw-hours {
  font-weight: 600;
  color: #000;
  white-space: nowrap;
}

.cw-hours-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.05rem;
}

.cw-hours-stack span {
  font-size: 0.8rem;
  font-weight: 600;
  color: #000;
  white-space: nowrap;
}

.cw-note {
  font-size: 0.72rem;
  color: #555;
  margin: 0;
  width: 100%;
}

.cw-closed {
  font-size: 0.85rem;
  color: #aaa;
  margin: 0;
}

@media (max-width: 700px) {
  .cw-branches {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* ---- Full Season Schedule ---- */
.branches {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  align-items: start;
}

.branch h2 {
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom: 2px solid #000;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.note {
  font-size: 0.78rem;
  color: #666;
  margin-bottom: 1.25rem;
  line-height: 1.4;
}

.month {
  margin-bottom: 1.5rem;
}

.month h3 {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #888;
  margin-bottom: 0.75rem;
}

.week {
  margin-bottom: 0.9rem;
}

.label {
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 0.3rem;
}

.label.highlight {
  color: #000;
  background: #f0ede8;
  padding: 0.15rem 0.4rem;
  border-radius: 3px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.88rem;
}

.day {
  color: #333;
  flex-shrink: 0;
}

.hours {
  font-weight: 600;
  color: #000;
  white-space: nowrap;
}

.hours-multi {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
}

.hours-multi span {
  font-size: 0.8rem;
  font-weight: 600;
  color: #000;
  white-space: nowrap;
}

.event {
  background: #fafaf8;
  border-left: 3px solid #000;
  padding: 0.5rem 0.6rem;
  border-radius: 0 4px 4px 0;
}

.booking {
  font-size: 0.78rem;
  color: #555;
  margin-top: 0.25rem;
}

.booking a {
  color: #000;
  text-decoration: underline;
}

@media (max-width: 960px) {
  .branches {
    grid-template-columns: 1fr;
  }
}
</style>
