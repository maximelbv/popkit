export const sortByDateCreation = <T extends { created: string }>(
  dates: T[]
): T[] => {
  return dates.sort((a, b) => b.created.localeCompare(a.created));
};
