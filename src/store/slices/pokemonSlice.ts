import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
  starterPok: string
}

const initialState: PokemonState = {
  starterPok: 'Pickachu',
}

export const pokemonSlice = createSlice({
  name: 'picker',
  initialState,
  reducers: {
    plant: (state) => {
      state.starterPok = 'Bulbasaur'
    },
    fire: (state) => {
      state.starterPok = 'Charmander'
    },
    water: (state) => {
      state.starterPok = 'Squirtle'
    },
    newPok: (state, action: PayloadAction<string>) => {
      state.starterPok = action.payload
    },
    reset: (state) => {
      state.starterPok = initialState.starterPok
    },
  },
})

export const { plant, fire, water, newPok, reset } = pokemonSlice.actions

export default pokemonSlice.reducer
