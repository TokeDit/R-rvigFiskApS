export const SCHEDULE = [
  {
    from: 12, to: 12,
    fiskebutikken: [
      { day: 'Fredag 20. marts', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [
      { day: 'Fredag 20. marts', hours: '11.00–19.00' },
      { day: 'Lørdag & Søndag', hours: '11.00–19.00' },
    ],
    restaurant: null,
  },
  {
    from: 13, to: 13,
    fiskebutikken: [
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Fredag – Søndag', hours: '11.00–19.00' }],
    restaurant: null,
  },
  {
    from: 14, to: 14,
    label: 'Påsken',
    fiskebutikken: [
      { day: 'Mandag 30/3', hours: '10.00–17.00' },
      { day: 'Tirsdag 31/3', hours: '10.00–17.00' },
      { day: 'Onsdag 1/4', hours: '10.00–18.00' },
      { day: 'Skærtorsdag 2/4', hours: '09.00–15.00' },
      { day: 'Langfredag 3/4', hours: '09.00–15.00' },
      { day: 'Lørdag 4/4', hours: '09.00–15.00' },
      { day: 'Påskedag 5/4', hours: '09.00–15.00' },
    ],
    bistro: [
      { day: 'Mandag & Tirsdag', hours: '11.00–19.00' },
      { day: 'Onsdag – Påskedag', hours: '11.00–20.00' },
    ],
    restaurant: [
      { day: 'Skærtorsdag 2/4', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Langfredag 3/4', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Lørdag 4/4', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Påskedag 5/4', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
    ],
  },
  {
    from: 15, to: 15,
    fiskebutikken: [
      { day: '2. Påskedag 6/4', hours: '10.00–14.00' },
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [
      { day: '2. Påskedag 6/4', hours: '11.00–19.00' },
      { day: 'Fredag – Søndag', hours: '11.00–19.00' },
    ],
    restaurant: [
      { day: '2. Påskedag 6/4', hours: 'Frokost 12.00–16.00' },
      { day: 'Fredag 10/4', hours: 'Aften kl. 18.00', event: true, note: 'Skaldyrsaften · Billetter: 25 36 24 99 / Rikke@roervig-fisk.dk' },
    ],
  },
  {
    from: 16, to: 17,
    fiskebutikken: [
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Fredag – Søndag', hours: '11.00–19.00' }],
    restaurant: [
      { day: 'Fredag', hours: 'Aften 18.00–21.00' },
      { day: 'Lørdag', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Søndag', hours: 'Frokost 12.00–16.00' },
    ],
  },
  {
    from: 18, to: 19,
    fiskebutikken: [
      { day: 'Mandag – Torsdag', hours: '10.00–17.00' },
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Dagligt', hours: '11.00–19.00' }],
    restaurant: [
      { day: 'Fredag', hours: 'Aften 18.00–21.00' },
      { day: 'Lørdag', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Søndag', hours: 'Frokost 12.00–16.00' },
    ],
  },
  {
    from: 20, to: 20,
    label: 'Kristi Himmelfartsdag',
    fiskebutikken: [
      { day: 'Mandag – Onsdag', hours: '10.00–17.00' },
      { day: 'Kristi Himmelfartsdag 14/5', hours: '09.00–15.00' },
      { day: 'Fredag 15/5', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [
      { day: 'Mandag & Tirsdag', hours: '11.00–19.00' },
      { day: 'Onsdag 13/5', hours: '11.00–20.00' },
      { day: 'Kristi Himmelfartsdag 14/5', hours: '11.00–21.00' },
      { day: 'Fredag 15/5 & Lørdag 16/5', hours: '11.00–21.00' },
      { day: 'Søndag 17/5', hours: '11.00–19.00' },
    ],
    restaurant: [
      { day: 'Kristi Himmelfartsdag 14/5', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Fredag 15/5', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Lørdag 16/5', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Søndag 17/5', hours: 'Frokost 12.00–16.00' },
    ],
  },
  {
    from: 21, to: 21,
    label: 'Pinsen',
    fiskebutikken: [
      { day: 'Mandag – Torsdag', hours: '10.00–17.00' },
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Pinsedag 24/5', hours: '09.00–15.00' },
    ],
    bistro: [
      { day: 'Mandag – Torsdag', hours: '11.00–19.00' },
      { day: 'Pinsen Fredag – Søndag', hours: '11.00–21.00' },
    ],
    restaurant: [
      { day: 'Fredag 22/5', hours: 'Aften 18.00–21.00' },
      { day: 'Lørdag 23/5', hours: ['Frokost 12.00–16.00', 'Aften 18.00–22.00'] },
      { day: 'Pinsedag 24/5', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
    ],
  },
  {
    from: 22, to: 22,
    fiskebutikken: [
      { day: '2. Pinsedag 25/5', hours: '10.00–14.00' },
      { day: 'Tirsdag – Torsdag', hours: '10.00–17.00' },
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [
      { day: '2. Pinsedag 25/5', hours: '11.00–19.00' },
      { day: 'Tirsdag – Søndag', hours: '11.00–19.00' },
    ],
    restaurant: [
      { day: '2. Pinsedag 25/5', hours: 'Frokost 12.00–16.00' },
      { day: 'Fredag 29/5', hours: 'Aften 18.00–21.00' },
      { day: 'Lørdag 30/5', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Søndag 31/5', hours: 'Frokost 12.00–16.00' },
    ],
  },
  {
    from: 23, to: 23,
    label: 'Grundlovsdag 5. juni',
    fiskebutikken: [
      { day: 'Mandag – Torsdag', hours: '10.00–17.00' },
      { day: 'Grundlovsdag / Fredag 5/6', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Dagligt', hours: '11.00–19.00' }],
    restaurant: [
      { day: 'Grundlovsdag / Fredag 5/6', hours: 'Aften 18.00–21.00' },
      { day: 'Lørdag 6/6', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Søndag 7/6', hours: 'Frokost 12.00–16.00' },
    ],
  },
  {
    from: 24, to: 24,
    fiskebutikken: [
      { day: 'Mandag – Torsdag', hours: '10.00–17.00' },
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Dagligt', hours: '11.00–19.00' }],
    restaurant: [
      { day: 'Fredag', hours: 'Aften 18.00–21.00' },
      { day: 'Lørdag', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Søndag', hours: 'Frokost 12.00–16.00' },
    ],
  },
  {
    from: 25, to: 26,
    fiskebutikken: [
      { day: 'Mandag – Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–16.00' },
      { day: 'Søndag', hours: '10.00–15.00' },
    ],
    bistro: [{ day: 'Dagligt', hours: '11.00–22.00' }],
    restaurant: [
      { day: 'Fredag', hours: 'Aften 18.00–21.00' },
      { day: 'Lørdag', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Søndag', hours: 'Frokost 12.00–16.00' },
    ],
  },
  {
    from: 27, to: 31,
    fiskebutikken: [
      { day: 'Mandag – Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–16.00' },
      { day: 'Søndag', hours: '10.00–15.00' },
    ],
    bistro: [{ day: 'Dagligt', hours: '11.00–22.00' }],
    restaurant: [{ day: 'Dagligt', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] }],
  },
  {
    from: 32, to: 33,
    fiskebutikken: [
      { day: 'Mandag – Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–16.00' },
      { day: 'Søndag', hours: '10.00–15.00' },
    ],
    bistro: [{ day: 'Dagligt', hours: '11.00–20.00' }],
    restaurant: [{ day: 'Dagligt', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] }],
  },
  {
    from: 34, to: 35,
    fiskebutikken: [
      { day: 'Mandag – Torsdag', hours: '10.00–17.00' },
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Dagligt', hours: '11.00–19.00' }],
    restaurant: [
      { day: 'Fredag', hours: 'Aften 18.00–21.00' },
      { day: 'Lørdag', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Søndag', hours: 'Frokost 12.00–16.00' },
    ],
  },
  {
    from: 36, to: 36,
    fiskebutikken: [
      { day: 'Mandag – Torsdag', hours: '10.00–17.00' },
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Dagligt', hours: '11.00–19.00' }],
    restaurant: [
      { day: 'Fredag 4/9', hours: 'Aften 18.00–21.00' },
      { day: 'Lørdag 5/9', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Søndag 6/9', hours: 'Frokost 12.00–16.00' },
    ],
  },
  {
    from: 37, to: 37,
    fiskebutikken: [
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Fredag – Søndag', hours: '11.00–19.00' }],
    restaurant: [
      { day: 'Fredag 11/9', hours: 'Aften kl. 18.00', event: true, note: 'Skaldyrsaften · Bestilles forud: Rikke@roervig-fisk.dk' },
      { day: 'Lørdag 12/9', hours: ['Frokost 12.00–16.00', 'Aften 18.00–21.00'] },
      { day: 'Søndag 13/9', hours: 'Frokost 12.00–16.00' },
    ],
  },
  {
    from: 38, to: 39,
    fiskebutikken: [
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Fredag – Søndag', hours: '11.00–19.00' }],
    restaurant: null,
  },
  {
    from: 40, to: 40,
    fiskebutikken: [
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Fredag – Søndag', hours: '11.00–19.00' }],
    restaurant: [
      { day: 'Fredag 2/10', hours: 'Aften kl. 18.00', event: true, note: 'Ålegilde · Billetter: 25 36 24 99 / Rikke@roervig-fisk.dk' },
    ],
  },
  {
    from: 41, to: 41,
    fiskebutikken: [
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '10.00–14.00' },
    ],
    bistro: [{ day: 'Fredag – Søndag', hours: '11.00–19.00' }],
    restaurant: null,
  },
  {
    from: 42, to: 42,
    label: 'Efterårsferie',
    fiskebutikken: [
      { day: 'Mandag – Torsdag', hours: '10.00–17.00' },
      { day: 'Fredag', hours: '10.00–18.00' },
      { day: 'Lørdag', hours: '09.00–15.00' },
      { day: 'Søndag', hours: '08.00–14.00' },
    ],
    bistro: [
      { day: 'Mandag – Lørdag', hours: '11.00–19.00' },
      { day: 'Søndag', hours: '11.00–14.00' },
    ],
    restaurant: null,
  },
]
