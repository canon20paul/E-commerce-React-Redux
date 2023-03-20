import React,{useState} from 'react'
import { useDispatch } from 'react-redux' 


export default function Additems() {
  const[itemname, setitemname]=useState('')
  const[itemprice, setitemprice]=useState('')
  const [itemimage, setitemimage] = useState('')
  const dispatch = useDispatch()

  function additem(){
    var item={
      itemName: itemname,
      itemPrice: itemprice,
      itemImage: itemimage
    }
    dispatch({type:'ADD_ITEM', payload:item})
  }
  return (
    <div className='row  mt-50 justify-content-center'>
      <div className='col-md-6 mt-50'>
                    <input type="text" className='form-control' placeholder='item Name' value={itemname} onChange={(e)=>{
                      setitemname(e.target.value)
                    }}/>
        <input type="text" className='form-control' placeholder='item Price' value={itemprice} onChange={(e) => {
          setitemprice(e.target.value)}} />
        <input type="text" className='form-control' placeholder='item Image' value={itemimage} onChange={(e) => {
          setitemimage(e.target.value)
        }} />
                    <button className='btn btn-success' onClick={additem}>ADD ITEM</button>
            </div>
       </div>
  )
}
