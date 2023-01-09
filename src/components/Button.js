import React from 'react';

export const Button = ({ className, action }) => {
    return (
        <button className={className} onClick={action}>
            Valider l'avis de passage
        </button>
    )
}