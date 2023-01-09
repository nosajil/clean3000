import React from 'react'

export const Avis = ({item}) => {
  return (
    <div className='avis'>
        <div className="info-avis">
            <h3>Nom du client : {item.client}</h3>
            <p>Date de l'intervention : {item.date}</p>
            <p>Observations suite à l'intervention: {item.comment}</p>
        </div>
    </div>
  )
}

export default Avis