export const formatDate = (d: Date): string => {
  const fieldLength = 2;
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(fieldLength, '0')}-${d.getDate().toString().padStart(fieldLength, '0')}`;
};
