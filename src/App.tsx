import React, { useEffect, useState } from 'react';
import { Pet } from './utils/utils'
import List from './components/list/List'
import Loading from './components/utils/Loading'
import { getAllPets } from './sites/sites'
// import 'bootstrap/dist/css/bootstrap.min.css'

import styled from 'styled-components'

const Application = styled.div`
height:100%;
`

const Nav = styled.div`

`

const Title = styled.a`

`

const Footer = styled.div`
`
const FooterText = styled.p`
`

function App() {
  let emptyArray: Pet[] = []
  const [loading, setLoading] = useState(false)
  const [adoptablePets, setAdoptablePets] = useState(emptyArray)

  useEffect(() => {
    setLoading(true)
    getAllPets()
      .then((res: Pet[]) => {
        setAdoptablePets(res)
        setLoading(false)
      })
      .catch()
  }, [])

  return (
    <Application>
      { loading ?
      <Loading message="Loading adorable adoptable canines"/> 
          : 
          <List pets={adoptablePets}/>   
      }

    </Application>
  );
}

export default App;
