import React from 'react'

export default function ShoppingCart({data}) {
  return (
    <div>
        <h4>List of Products : </h4>
        <ul>
            {data.map(e=>(
                <li className='row'>
                    <img src={e.image} className="col-3" width="100px" height="100px" />
                    <h3 className="col-5">{e.title}</h3>
                    <p className="col-4">{e.price}</p>
                </li>
            ))}

            Total : {data.reduce((rec , e )=>rec+e.price,0)}

            
        </ul>
    </div>
  )
}
