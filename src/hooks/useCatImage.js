import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // recuperar imagen con la primera palabra de la cita
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1).join(' ')
    // const firstWord = fact.split(' ', 3) 3 primeras palabras usando el split
    // const firstWord = fact.split(' ').slice(0, 3).join(' ') las 3 primeras palabras
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
} // devolver { imageUrl }
