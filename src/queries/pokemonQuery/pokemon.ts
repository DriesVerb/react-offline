import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/pokemon/'
const pokeNum = Math.floor(Math.random() * 150) + 1

export const fetchPokemons = async () => {
  const response = await axios.get(`${url}${pokeNum}`)
  return response.data
}
