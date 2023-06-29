const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// cmd + . para transformar un fetch a un async y await
export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
