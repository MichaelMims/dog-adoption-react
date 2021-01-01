import React, { useEffect, useState } from 'react';
import { Pet, ListProp, PetProp } from './utils/utils'
import List from './components/list/List'
import Loading from './components/utils/Loading'
import { getAllPets } from './sites/sites'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import mongoose from 'mongoose'
import axios from 'axios';

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

  // useEffect(() => {

  //   setLoading(true)
  //   axios
  //     .get('/pets')
  //     .then((res: any) => {
  //       setAdoptablePets(res.data.pets)
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })

  // }, [])

  return (
    <Application>
      { loading ?
      <Loading message="Loading adorable adoptable puppies"/> 
          : 
          <List pets={adoptablePets}/>
          
      }

    </Application>
  );
}

export default App;
