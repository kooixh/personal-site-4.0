import React from 'react'
import './app.scss'
import Main from '@app/components/main'
import SimpleReactLightbox from 'simple-react-lightbox'

function App() {
  return (
    <div className='App'>
      <SimpleReactLightbox>
        <Main />
      </SimpleReactLightbox>
    </div>
  )
}

export default App
