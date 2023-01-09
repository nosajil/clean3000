import React from 'react'
import Avis from './Avis'

const ListPassage = (array) => {
    const ListAvis = array.map(item => {
        return(
            <Avis 
            key={item.id}
            />
        )
    })


  return (
    <div>
        <h2>Liste des passages</h2>
        {ListAvis}
    </div>
  )
}

export default ListPassage