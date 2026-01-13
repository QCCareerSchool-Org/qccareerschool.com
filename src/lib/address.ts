const addresses = {
  ca: [ '38 McArthur Avenue', 'Ottawa ON K1L 6R2' ],
  us: [ '402 King Farm Blvd', 'Ste 125 #1148', 'Rockville, MD 20850' ],
  gb: [ 'Suite 18', '186 St. Albans Road', 'Watford WD24 4AS' ],
  au: [ 'Suite 23', '78 Williams Street', 'Sydney NSW 2011' ],
};

export const getAddress = (countryCode: string): string[] => {
  switch (countryCode) {
    case 'CA':
      return addresses.ca;
    case 'US':
      return addresses.us;
    case 'AU':
      return addresses.au;
    case 'KI': // Kiribati (AUD)
    case 'NR': // Nauru (AUD)
    case 'TV': // Tuvalu (AUD)
    case 'CX': // Christmas Island (AUD)
    case 'NF': // Norfolk Island (AUD)
    case 'CC': // Cocos (Keeling) Islands (AUD)
    case 'NZ':
    case 'CK': // Cook Islands (NZD)
    case 'PN': // Pitcairn Islands (NZD)
    case 'NU': // Niue (NZD)
    case 'TK': // Tokelau (NZD)
      return [ ...addresses.au, 'Australia' ];
    default:
      return [ ...addresses.ca, 'Canada' ];
  }
};
