import React, { useState } from 'react'
import '../sass/Form.scss'
import Avis from './Avis';
import { Button } from './Button';

const FormPage = () => {

    const [client, setClient] = useState("");
    const [date, setDate] = useState("");
    const [comment, setComment] = useState("");

    const [avis, setAvis] = useState([
        {
            id: Date.now(),
            client: "Test",
            date: "DD/MM/AAAA",
            comment: "Coucou, c'est Clean3000!",
        }
    ])

    const addPassage = () => {
        const newPassage = {
            id: Date.now(),
            client,
            date,
            comment,
        };

        const copyAvis = [...avis];
        copyAvis.push(newPassage);

        setAvis(copyAvis);
        setClient("")
    };

    const renderAvis = () => {
        const ListAvis = avis.map(item => {
            return(
                <Avis 
                key={item.id}
                item={item}
                />
            );
        });
        return(
            <div className="avis">
                <h2>Les avis de passage</h2>
                {ListAvis}
            </div>
        )
    }

  return (
    <div className='form-page-wrapper'>
        <div id='FormPage' className="flex-form">
            <div className="image-form-page">
                <img src={`${process.env.PUBLIC_URL}/img/nettoyagevitre.webp`} alt="logo-clean3000" />
            </div>
            <div className="form-wrapper">
                <h2>Avis de passage</h2>

                <label htmlFor="">Nom de l'entreprise/ou client :
                <input 
                type="text"
                className='input-form' 
                onChange={(e) => setClient(e.target.value)}
                value={client}
                />
                </label>
                

                <label htmlFor="">Notre technicien est intervenu pour l'entretien de la vitrerie le :
                <input 
                type="date"
                className='input-form' 
                onChange={(e) => setDate(e.target.value)}
                value={date}
                />
                </label>

                <label htmlFor="">Observations:
                <input 
                type="text"
                className='input-form' 
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                />
                </label>

                <div className="btn-wrapper">
                    <Button 
                        className='btn-form' 
                        action={() => addPassage()}>
                            Valider l'avis de passage
                    </Button>
                </div>
            </div>
        </div>
        <div className="liste-avis-wrapper">
            {renderAvis()}
        </div>
    </div>
  )
}

export default FormPage