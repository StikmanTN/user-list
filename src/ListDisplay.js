import React from 'react'
import image from "./utilisateur.png"

export default function ListDisplay({listOfUSer}) {
  return (
    <div>{listOfUSer.map((currentUser) => (
        <div className='row user' key={currentUser.id}>
                 <div className='col-4'>
                   <img className='row' width= "200" height="200" src={image} alt='no connection'/>
                   <h3 className='row'>{currentUser.name}</h3>
                    </div>
                 
                 <div className='col-8 info'>
                 <p className='row'>{currentUser.username}</p>
                <p className='row'>{currentUser.phone}</p>
                <p className='row'>{currentUser.website}</p>
                <p className='row'>{currentUser.email}</p>  
                    </div>
        </div>
    ))}</div>
  )
}
{/* <div className='col-8 user'>
                <p className='row'>{currentUser.name}</p>
                <p className='row'>{currentUser.username}</p>
                <p className='row'>{currentUser.phone}</p>
                <p className='row'>{currentUser.website}</p>
                <p className='row'>{currentUser.email}</p>                
            </div> */}