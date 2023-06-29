import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()
  // Lo mínimo necesario en el estado, mínima info necesaria

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  console.log(refreshFact)

  // recuperar cita
  useEffect(refreshFact, [])

  return {
    fact,
    refreshFact
  }
}
