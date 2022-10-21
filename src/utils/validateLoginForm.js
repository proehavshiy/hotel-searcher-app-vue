export const disableCyrillicSymbols = (value) => {
  return !/[ЁёА-я]/g.test(value)
};