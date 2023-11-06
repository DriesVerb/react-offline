import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { fire, plant, reset, water } from '../../store/slices/pokemonSlice'
import { Button } from '../../elements/button/button'
import RandomPokBtn from '../../components/randomPokBtn/randomPokBtn'

function PokemonStart() {
  const starter = useAppSelector((state) => state.picker.starterPok)
  const dispatch = useAppDispatch()

  const choosePlant = () => dispatch(plant())
  const chooseFire = () => dispatch(fire())
  const chooseWater = () => dispatch(water())
  const chooseReset = () => dispatch(reset())

  return (
    <div>
      <h2>{starter}</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button label="Bulbaaur" onClick={choosePlant} buttonText="Bulbasaur" />
        <Button
          label="Charmander"
          onClick={chooseFire}
          buttonText="Charmander"
        />
        <Button label="Squirtle" onClick={chooseWater} buttonText="Squirtle" />
        <Button label="Reset" onClick={chooseReset} buttonText="Reset" />
        <RandomPokBtn />
      </div>
    </div>
  )
}

export default PokemonStart
