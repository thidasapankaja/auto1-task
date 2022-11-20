export const capitalizeFirstLetter = (string: string) => {
  const lowerWord = string.toLowerCase()

  return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1)
}
