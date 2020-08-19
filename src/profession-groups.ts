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
      'personal stylist',
      'fashion merchandiser',
      'editorial stylist',
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
      'travel consultant',
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
  { name: 'Winghill Writing School', professions: [ 'screenwriter' ] },
  { name: 'QC Wellness Studies', professions: [ 'sleep consultant' ] },
];
