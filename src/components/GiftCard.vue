<script setup>
import { ref, reactive } from 'vue'

const submitted = ref(false)
const confirming = ref(false)

const form = reactive({
  name: '',
  amount: '',
  email: '',
  phone: '',
  description: '',
})

function handleSubmit() {
  confirming.value = true
}

function confirmSubmit() {
  confirming.value = false
  submitted.value = true
}

function cancelSubmit() {
  confirming.value = false
}
</script>

<template>
  <section class="giftcard-section">
    <div class="giftcard-img-wrap">
      <div class="giftcard-img-col">
        <img src="/Assets/delikatesser fra buffeten.png" alt="Delikatesser fra Rørvigs Fisk" />
        <img src="/Assets/Talerken foto med øl.png" alt="Tallerken med øl" />
      </div>
      <div class="giftcard-img-col">
        <div class="img-spacer"></div>
        <img src="/Assets/Røget makrel.jpg.png" alt="Røget makrel" />
        <div class="img-spacer"></div>
      </div>
    </div>

    <div class="giftcard-form-wrap">
      <div class="giftcard-card">
        <h2>Gavekort</h2>
        <p class="intro">
          Giv et gavekort til Rørvigs Fisk. Udfyld formularen nedenfor, så kontakter vi dig med betalingsinformation og afhentning.
        </p>

        <form v-if="!submitted" class="giftcard-form" @submit.prevent="handleSubmit">
          <div class="field">
            <label for="gc-name">Navn på køber</label>
            <input
              id="gc-name"
              v-model="form.name"
              type="text"
              placeholder="Dit fulde navn"
              required
            />
          </div>

          <div class="field">
            <label for="gc-amount">Beløb (kr.)</label>
            <input
              id="gc-amount"
              v-model="form.amount"
              type="number"
              min="1"
              placeholder="F.eks. 500"
              required
            />
          </div>

          <div class="field">
            <label for="gc-email">E-mail</label>
            <input
              id="gc-email"
              v-model="form.email"
              type="email"
              placeholder="din@email.dk"
              required
            />
          </div>

          <div class="field">
            <label for="gc-phone">Telefonnummer</label>
            <input
              id="gc-phone"
              v-model="form.phone"
              type="tel"
              placeholder="+45 12 34 56 78"
              required
            />
          </div>

          <div class="field">
            <label for="gc-description">Beskrivelse / besked <span class="optional">(valgfri)</span></label>
            <textarea
              id="gc-description"
              v-model="form.description"
              rows="4"
              placeholder="F.eks. til hvem gavekortet er, eller en særlig hilsen"
            ></textarea>
          </div>

          <div v-if="!confirming">
            <button type="submit" class="submit-btn">Bestil gavekort</button>
          </div>
          <div v-else class="confirm-box">
            <p class="confirm-text">Er du sikker på at du vil bestille et gavekort på <strong>{{ form.amount }} kr.</strong>?</p>
            <div class="confirm-actions">
              <button type="button" class="confirm-btn" @click="confirmSubmit">Ja, bestil</button>
              <button type="button" class="cancel-btn" @click="cancelSubmit">Annuller</button>
            </div>
          </div>
        </form>

        <div v-else class="confirmation">
          <div class="confirmation-icon">&#10003;</div>
          <h3>Tak, {{ form.name }}!</h3>
          <p>Vi har modtaget din bestilling på et gavekort til <strong>{{ form.amount }} kr.</strong></p>
          <p>Vi kontakter dig snarest på <strong>{{ form.email }}</strong> med betalingsinformation.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section layout ───────────────────────────────────────────────────────── */
.giftcard-section {
  display: flex;
  align-items: stretch;
  min-height: 540px;
}

.giftcard-img-wrap {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 1.25rem;
  padding: 3rem 1.5rem 3rem 3rem;
  background: #f7f5f2;
}

.giftcard-img-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.giftcard-img-col img {
  width: 100%;
  flex: 1;
  object-fit: cover;
  border-radius: 14px;
  display: block;
  min-height: 0;
}

.img-spacer {
  flex: 0.5;
}

.giftcard-form-wrap {
  flex: 0 0 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: #f7f5f2;
}

/* ── Card ─────────────────────────────────────────────────────────────────── */
.giftcard-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  padding: 2rem 2.5rem;
  max-width: 520px;
  width: 100%;
}

h2 {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
  color: #111;
}

.intro {
  font-size: 0.92rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.75rem;
}

.giftcard-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
  letter-spacing: 0.02em;
}

.optional {
  font-weight: 400;
  color: #888;
}

input,
textarea {
  font-family: system-ui, sans-serif;
  font-size: 0.95rem;
  color: #111;
  background: #f7f5f2;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0.6rem 0.85rem;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: #e06a00;
}

input::placeholder,
textarea::placeholder {
  color: #aaa;
}

.submit-btn {
  margin-top: 0.5rem;
  background: #000;
  color: #fff;
  font-family: system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;
}

.submit-btn:hover {
  background: #e06a00;
}

.confirm-box {
  margin-top: 0.5rem;
  background: #f7f5f2;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem 1.25rem;
}

.confirm-text {
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 0.85rem;
}

.confirm-actions {
  display: flex;
  gap: 0.75rem;
}

.confirm-btn {
  background: #000;
  color: #fff;
  font-family: system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s;
}

.confirm-btn:hover {
  background: #e06a00;
}

.cancel-btn {
  background: transparent;
  color: #555;
  font-family: system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.6rem 1.25rem;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}

.cancel-btn:hover {
  border-color: #999;
  color: #111;
}

.confirmation {
  text-align: center;
  padding: 1rem 0;
}

.confirmation-icon {
  font-size: 2.5rem;
  color: #e06a00;
  margin-bottom: 0.75rem;
}

.confirmation h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #111;
}

.confirmation p {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 0.4rem;
}

/* ── Mobile ───────────────────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .giftcard-section {
    flex-direction: column;
  }

  .giftcard-img-wrap {
    padding: 2rem 1.25rem;
    min-height: 300px;
  }

  .giftcard-form-wrap {
    flex: unset;
    width: 100%;
    padding: 2rem 1.25rem;
  }
}

@media (max-width: 600px) {
  .giftcard-card {
    padding: 1.5rem 1.25rem;
    border-radius: 0;
    box-shadow: none;
  }

  .submit-btn {
    align-self: stretch;
    text-align: center;
  }
}
</style>
