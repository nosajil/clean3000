import React from 'react'
import '../sass/Avis.scss'

export const Avis = ({item}) => {
  return (
    <div className='avis container'>
        <div className="info-avis">
            <div className="part part1">
                <h3 className='margin'>
                    Nom du client : {item.client}</h3>
                <p>Avis n°{item.id}</p>
            </div>
            <div className="part part2">
                <p className='margin'>
                    <span className='bold'>Date de l'intervention :</span>
                    {item.date}
                </p>
                <p><span className='bold'>Observations suite à l'intervention:</span> {item.comment}</p>
            </div>
        </div>
    </div>
  )
}

export default Avis