import { useQuery } from '@tanstack/react-query'
import { Button } from '../../elements/button/button'
import { fetchPokemons } from '../../queries/pokemonQuery/pokemon'
import { useAppDispatch } from '../../store/hooks/hooks'

import { newPok } from '../../store/slices/pokemonSlice'
export default function RandomPokBtn() {
  const { data, isLoading } = useQuery({
    queryKey: ['ranPok'],
    queryFn: () => fetchPokemons(),
  })

  const dispatch = useAppDispatch()

  const onClick = () => dispatch(newPok(data?.name))

  if (isLoading) return <div>Loading</div>

  return (
    <>
      <Button label={data?.name} buttonText="same" onClick={onClick} />
    </>
  )
}
