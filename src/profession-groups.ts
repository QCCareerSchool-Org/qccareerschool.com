export interface ProfessionGroup {
  name: string;
  professions: string[];
}

export const professionGroups: ProfessionGroup[] = [
  {
    name: 'QC Makeup Academy',
    professions: [
      'makeup artist',
      'airbrush makeup artist',
      'special fx makeup artist',
      'hair stylist',
    ],
  },
  {
    name: 'QC Event School',
    professions: [
      'event planner',
      'wedding planner',
      'event decorator',
      'corporate event planner',
      'destination wedding planner',
      'luxury event and wedding planner',
    ],
  },
  {
    name: 'QC Design School',
    professions: [
      'interior decorator',
      'home stager',
      'interior redesigner',
      'green designer',
      'landscape designer',
      'feng shui consultant',
      'color consultant',
      'professional organizer',
    ],
  },
  { name: 'QC Travel School', professions: [ 'travel consultant' ] },
  { name: 'QC Style Academy', professions: [ 'personal stylist', 'fashion merchandiser', 'editorial stylist' ] },
  { name: 'Winghill Writing School', professions: [ 'screenwriter' ] },
  { name: 'QC Wellness Studies', professions: [ 'sleep consultant' ] },
];
