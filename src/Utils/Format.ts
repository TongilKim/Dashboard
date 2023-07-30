export const formatNumber = (number: number) => {
  const suffixes = ["", "k", "M", "B", "T", "Q"];
  let suffixIndex = 0;

  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000;
    suffixIndex++;
  }

  return number + suffixes[suffixIndex];
};

export default { formatNumber };
