import React from 'react'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'

export default function Cart() {
  const cartobj = useSelector(store=>store.cartReducer)
  const dispatch = useDispatch()

const tablebody= cartobj.cartitems.map((item)=>{
    return <tr>
                      <td>{item.itemName}</td>
                      <td>{item.itemPrice}</td>
      <td> <button className='btn btn-danger' onClick={()=>{dispatch({type:'DELETE_ITEM_FROM_CART', payload:item})}}>DELETE</button> </td>
               </tr>
})

  return (
      <div className='row justify-content-center'>
      <table className='table table-dark table-bordered col-md-8 mt-5'>

            <thead>
                    <tr>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Action</th>
                    </tr>
            </thead>
            <tbody>
                {tablebody}
            </tbody>

      </table>
      </div>
  )
}
