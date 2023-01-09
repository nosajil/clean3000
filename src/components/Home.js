import React from 'react'
import '../sass/Home.scss'

const Home = () => {
  return (
    <div className='main'>
        <div className="title-wrapper">
            <img src={`${process.env.PUBLIC_URL}/img/logo-clean3000-transparent.png`} alt="logo-clean3000" />
            <h2 className='title-main'>Des vitres clean pour entreprises et particuliers</h2>
            <div className="btn-wrapper">
                <a className='btn-home' href="#FormPage">Remplir l'avis de passage</a>
            </div>
        </div>
        <div className="bg-main">
            {/* <img src={`${process.env.PUBLIC_URL}/img/lavage-vitre-bg.png`} alt="clean3000-background" /> */}
        </div>
    </div>
  )
}

export default Home