<script setup>
import { computed } from 'vue'
import { SCHEDULE } from '@/data/schedule.js'
import { currentWeek, weekRangeLabel } from '@/composables/useWeek.js'

const props = defineProps({
  branch: { type: String, required: true },
  subNote: { type: String, default: null },
})

const currentSchedule = computed(() =>
  SCHEDULE.find(s => currentWeek.value >= s.from && currentWeek.value <= s.to) ?? null
)

const rows = computed(() => currentSchedule.value?.[props.branch] ?? null)
const label = computed(() => currentSchedule.value?.label ?? null)
</script>

<template>
  <div class="hours-card">
    <div class="card-header">
      <span class="badge">Denne uge</span>
      <span class="weeknum">Uge {{ currentWeek }}</span>
      <span v-if="label" class="special">{{ label }}</span>
    </div>
    <p class="date-range">{{ weekRangeLabel }}</p>

    <template v-if="rows?.length">
      <div
        v-for="(row, i) in rows"
        :key="i"
        :class="['row', { 'event-row': row.event }]"
      >
        <span class="day">{{ row.day }}</span>
        <span v-if="Array.isArray(row.hours)" class="hours-stack">
          <span v-for="h in row.hours" :key="h">{{ h }}</span>
        </span>
        <span v-else class="hours">{{ row.hours }}</span>
        <p v-if="row.note" class="row-note">{{ row.note }}</p>
      </div>
    </template>
    <p v-else class="closed">Lukket denne uge</p>

    <p v-if="subNote" class="sub-note">{{ subNote }}</p>
  </div>
</template>

<style scoped>
.hours-card {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 260px;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(4px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.3rem;
}

.badge {
  background: #000;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.2em 0.55em;
  border-radius: 4px;
}

.weeknum {
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
}

.special {
  font-size: 0.8rem;
  color: #c05a00;
  font-weight: 500;
}

.date-range {
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 0.9rem;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.875rem;
  padding: 0.3rem 0;
  border-top: 1px solid #ebebeb;
  flex-wrap: wrap;
}

.row:first-of-type {
  border-top: none;
}

.event-row .day {
  color: #c05a00;
  font-weight: 600;
}

.day {
  color: #444;
  flex-shrink: 0;
}

.hours {
  font-weight: 600;
  white-space: nowrap;
}

.hours-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
  font-weight: 600;
  font-size: 0.8rem;
}

.row-note {
  width: 100%;
  font-size: 0.75rem;
  color: #c05a00;
  margin: 0.1rem 0 0.3rem;
  font-style: italic;
}

.closed {
  font-size: 0.875rem;
  color: #888;
  font-style: italic;
}

.sub-note {
  font-size: 0.75rem;
  color: #aaa;
  margin-top: 0.6rem;
  font-style: italic;
}

@media (max-width: 700px) {
  .hours-card {
    position: static;
    width: 100%;
    border-radius: 0;
    backdrop-filter: none;
    background: #fafafa;
    border-top: 1px solid #e0e0e0;
  }
}
</style>
