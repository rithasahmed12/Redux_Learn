import { useState } from 'react'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { ordered,restocked } from './icecreamSlice'

const IcecreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIcecreams = useAppSelector((state)=> state.icecream.numOfIcecreams)
    const dispatch = useAppDispatch()
    return (
    <div>
        <h2>Number of Ice creams -{numOfIcecreams}</h2>
        <button onClick={()=> dispatch(ordered())} >Order Ice creams</button>
        <input type="number" 
         value={value}
         onChange={(e)=> setValue(Number(e.target.value))}   
        />
        <button onClick={()=> dispatch(restocked(value))}>Restock Ice creams</button>
    </div>
  )
}

export default IcecreamView