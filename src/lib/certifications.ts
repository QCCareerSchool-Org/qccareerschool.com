type CertificationData = {
  code: string;
  courses: string[];
  title: string;
  url: string;
  oldCdn?: true;
};

const certificationData: CertificationData[] = [
  // makeup
  {
    code: 'MIMP',
    courses: [ 'MM', 'CM', 'MZ' ],
    title: 'Master International Makeup Professional™',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/master-makeup-artistry/',
  },
  {
    code: 'CIMP',
    courses: [ 'MA' ],
    title: 'Certified International Makeup Professional™',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/makeup-artistry/',
  },
  {
    code: 'PMWG',
    courses: [ 'MW' ],
    title: 'Pro Makeup Workshop Graduate',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/pro-makeup-workshop/',
  },
  {
    code: 'ABM',
    courses: [ 'AB' ],
    title: 'Specialization in Airbrush Makeup',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/airbrush-makeup-workshop/',
  },
  {
    code: 'CISP',
    courses: [ 'PF' ],
    title: 'Certified International Styling Professional',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/fashion-styling/',
  },
  {
    code: 'GBE',
    courses: [ 'GB' ],
    title: 'Specialization in Global Beauty',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/global-beauty-workshop/',
  },
  {
    code: 'HSE',
    courses: [ 'HS' ],
    title: 'Hair Styling Essentials Graduate',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/hair-styling-essentials/',
  },
  {
    code: 'ISC',
    courses: [ 'SK' ],
    title: 'International Skincare Consultant™',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/skincare-course/',
  },
  {
    code: 'ISMP',
    courses: [ 'SF' ],
    title: 'Hair Styling Essentials Graduate',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/hair-styling-essentials/',
  },
  {
    code: 'PDG',
    courses: [ 'PW' ],
    title: 'Portfolio Development Graduate',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/portfolio-development/',
  },
  {
    code: 'VMCG',
    courses: [ 'VM' ],
    title: 'Virtual Makeup Consultation Graduate',
    url: 'https://www.qcmakeupacademy.com/online-makeup-courses/virtual-makeup-consultation-course/',
  },
  // event
  {
    code: 'IEWP',
    courses: [ 'EP' ],
    title: 'International Event & Wedding Planning Professional™',
    url: 'https://www.qceventplanning.com/online-event-courses/event-and-wedding-planning/',
  },
  {
    code: 'IWPP',
    courses: [ 'WP' ],
    title: 'International Wedding Planning Professional™',
    url: 'https://www.qceventplanning.com/online-event-courses/wedding-planning/',
  },
  {
    code: 'ICPP',
    courses: [ 'CP' ],
    title: 'International Corporate Event Planning Professional™',
    url: 'https://www.qceventplanning.com/online-event-courses/corporate-event-planning/',
  },
  {
    code: 'IEDP',
    courses: [ 'ED' ],
    title: 'International Event Decor Professional™',
    url: 'https://www.qceventplanning.com/online-event-courses/event-decor/',
  },
  {
    code: 'IEPP',
    courses: [ 'CE' ],
    title: 'International Event Planning Professional™',
    url: 'https://www.qceventplanning.com/online-event-courses/event-planning/',
  },
  {
    code: 'IFLP',
    courses: [ 'FL' ],
    title: 'International Festival and Live Events Professional™',
    url: 'https://www.qceventplanning.com/online-event-courses/festivals-and-live-events/',
  },
  // design
  {
    code: 'IDDP',
    courses: [ 'A', 'MI' ],
    title: 'International Design & Decorating Professional™',
    url: 'https://www.qcdesignschool.com/online-courses/interior-decorating/',
  },
  {
    code: 'ISRP',
    courses: [ 'T', 'M' ],
    title: 'International Staging and Redesign Professional™',
    url: 'https://www.qcdesignschool.com/online-courses/home-staging/',
  },
  {
    code: 'AFDP',
    courses: [ 'J' ],
    title: 'Advanced Feng Shui Design Professional™',
    url: 'https://www.qcdesignschool.com/online-courses/feng-shui/',
  },
  {
    code: 'AIOP',
    courses: [ 'PO' ],
    title: 'Advanced International Organizing Professional™',
    url: 'https://www.qcdesignschool.com/online-courses/professional-organizing/',
  },
  {
    code: 'ICCP',
    courses: [ 'CC' ],
    title: 'International Color Consulting Professional™',
    url: 'https://www.qcdesignschool.com/online-courses/color-consultant/',
  },
  // old event
  {
    code: 'LWS',
    courses: [ 'LW' ],
    title: 'Luxury Wedding & Event Specialist',
    url: 'https://www.qceventplanning.com/online-event-courses/luxury-wedding-and-event-planning-specialization/',
    oldCdn: true,
  },
  {
    code: 'DWS',
    courses: [ 'DW' ],
    title: 'Destination Wedding Specialist',
    url: 'https://www.qceventplanning.com/online-event-courses/destination-wedding-planning-specialization/',
    oldCdn: true,
  },
  {
    code: 'AYB',
    courses: [ 'EB' ],
    title: 'Accelerate Your Business',
    url: 'https://www.qceventplanning.com/online-event-courses/accelerate-your-business/',
    oldCdn: true,
  },
  // old design
  {
    code: 'IRP',
    courses: [ 'X' ],
    title: 'International Redesign Professional™',
    url: 'https://www.qcdesignschool.com/online-courses/',
    oldCdn: true,
  },
  {
    code: 'PCC',
    courses: [ 'CW' ],
    title: 'Professional Color Consultant™',
    url: 'https://www.qcdesignschool.com/online-courses/',
    oldCdn: true,
  },
];

export const getCertificationData = (courseCode: string): CertificationData | undefined => certificationData.find(d => d.courses.includes(courseCode));
