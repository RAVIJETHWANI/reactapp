import React from 'react'
import SearchForm from './HackerNewsForm'
import Stories from './HackerNewsStory'
import Buttons from './HackerNewsButton'
function App() {
  return (
      <>
        <SearchForm />
        <Buttons />
        <Stories />
      </>
  )
}

export default App