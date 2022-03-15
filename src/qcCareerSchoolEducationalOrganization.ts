import type { EducationalOrganization, WithContext } from 'schema-dts';

import { getTelephoneNumber } from './functions';

export const qcCareerSchoolEducationalOrganization: WithContext<EducationalOrganization> = {
  '@context': 'https://schema.org',
  '@id': 'https://www.qccareerschool.com/#school',
  '@type': 'EducationalOrganization',
  'name': 'QC Career School',
  'url': 'https://www.qccareerschool.com/',
  'logo': 'https://www.qccareerschool.com/logo.svg',
  'email': 'info@qccareerschool.com',
  'foundingDate': '1985-01-01T00:00:00-05:00',
  'sameAs': 'https://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-career-school-in-ottawa-on-4175',
  'subOrganization': [
    { '@id': 'https://www.qcmakeupacademy.com/#school', '@type': 'EducationalOrganization', 'name': 'QC Makeup Academy', 'url': 'https://www.qcmakeupacademy.com/' },
    { '@id': 'https://www.qceventplanning.com/#school', '@type': 'EducationalOrganization', 'name': 'QC Event School', 'url': 'https://www.qceventplanning.com/' },
    { '@id': 'https://www.qcdesignschool.com/#school', '@type': 'EducationalOrganization', 'name': 'QC Design School', 'url': 'https://www.qcdesignschool.com/' },
    { '@id': 'https://www.qcpetstudies.com/#school', '@type': 'EducationalOrganization', 'name': 'QC Pet Studies', 'url': 'https://www.qcpetstudies.com/' },
    { '@id': 'https://www.qcwellnessstudies.com/#school', '@type': 'EducationalOrganization', 'name': 'QC Wellness Studies', 'url': 'https://www.qcwellnessstudies.com/' },
    { '@id': 'https://www.winghill.com/#school', '@type': 'EducationalOrganization', 'name': 'Winghill Writing School', 'url': 'https://www.winghill.com/' },
  ],
  'address': [
    {
      '@type': 'PostalAddress',
      'streetAddress': '38 McArthur Avenue',
      'addressLocality': 'Ottawa',
      'addressRegion': 'ON',
      'postalCode': 'K1L 6R2',
      'addressCountry': 'CA',
      'telephone': getTelephoneNumber('CA'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '07:30', 'closes': '21:00', 'dayOfWeek': [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '07:30', 'closes': '18:00', 'dayOfWeek': 'Friday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '12:30', 'closes': '18:30', 'dayOfWeek': 'Saturday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '17:00', 'closes': '22:00', 'dayOfWeek': 'Sunday' },
      ],
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': '1 Research Court, Suite 450',
      'addressLocality': 'Rockville',
      'addressRegion': 'MD',
      'postalCode': '20850',
      'addressCountry': 'US',
      'telephone': getTelephoneNumber('US'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '07:30', 'closes': '21:00', 'dayOfWeek': [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '07:30', 'closes': '18:00', 'dayOfWeek': 'Friday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '12:30', 'closes': '18:30', 'dayOfWeek': 'Saturday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '17:00', 'closes': '22:00', 'dayOfWeek': 'Sunday' },
      ],
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': '186 St. Albans Road, Suite 18',
      'addressLocality': 'Watford',
      'addressRegion': 'Hertfordshire',
      'postalCode': 'WD24 4AS',
      'addressCountry': 'GB',
      'telephone': getTelephoneNumber('GB'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '12:30', 'closes': '24:00', 'dayOfWeek': [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '12:30', 'closes': '23:00', 'dayOfWeek': 'Friday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '17:30', 'closes': '23:30', 'dayOfWeek': 'Saturday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '00:00', 'closes': '00:00', 'dayOfWeek': 'Sunday' },
      ],
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': '78 Williams Street, Suite 23',
      'addressLocality': 'Bethesda',
      'addressRegion': 'NSW',
      'postalCode': '2011',
      'addressCountry': 'AU',
      'telephone': getTelephoneNumber('AU'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '09:00', 'closes': '14:00', 'dayOfWeek': 'Monday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '06:00', 'closes': '14:00', 'dayOfWeek': [ 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '00:00', 'closes': '00:00', 'dayOfWeek': [ 'Saturday', 'Sunday' ] },
      ],
    },
  ],
};
