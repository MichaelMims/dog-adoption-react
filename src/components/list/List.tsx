import react from 'react'
import { PetProp, ListProp } from '../../utils/utils'
import Loading from '../utils/Loading'
import styled from 'styled-components'

const Item = styled.div`
border: none !important;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
width: 15rem;
margin: 10px 15px;
padding: 10px;
`

const ItemImage = styled.img`
width: 10rem;
height: 10rem;
border-radius: 15px;
border: 3px groove #555;
`

const ItemBody = styled.div`
background: transparent !important;
padding: 0 0;
margin: 10px 10px;
text-align: left;
`
const ItemTitle = styled.h5`
color: #009;
`
const ItemText = styled.p`
margin: 5px 0px;
`

const ItemTextHeading = styled.span`
font-weight: bold;
`

const ItemDetailLink = styled.button`
text-decoration: none;

:hover {
    text-decoration: none;
    border: 1px dotted red;
}
`

function ListItem({ pet }: PetProp) {
    return (
        <Item>
            <ItemImage src={pet.image}>

            </ItemImage>
            <ItemBody>
                <ItemTitle>{pet.name}</ItemTitle>
                {pet.breed !== "N/A" ? <ItemText><ItemTextHeading>Breed: </ItemTextHeading>{pet.breed}</ItemText> : ""}
                <ItemText><ItemTextHeading>Agency: </ItemTextHeading>{pet.agency}</ItemText>
                {pet.sex !== "N/A" ? <ItemText><ItemTextHeading>Sex: </ItemTextHeading>{pet.sex}</ItemText> : ""}
                {pet.age !== "N/A" ? <ItemText><ItemTextHeading>Age: </ItemTextHeading>{pet.age}</ItemText> : ""}
                {pet.weight !== "N/A" ? <ItemText><ItemTextHeading>Weight: </ItemTextHeading>{pet.weight}</ItemText> : ""}
                {pet.url !== "N/A" ? <ItemDetailLink as="a" href={pet.url}>More Details</ItemDetailLink> : ""}
            </ItemBody>
        </Item>
    )
}

const Container = styled.div`
text-align: center;
margin: 0% 15%;
margin-bottom: 50px;
`

const Message = styled.h4`
font-family: 'Staatliches', cursive;
`

const ListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
border: none;
align-items: stretch;
justify-content: center;
`

function List({ pets }: ListProp) {
    const list = () => {
        return (
            <>
                {pets.map((pet, index) => {
                    return <ListItem key={index} pet={pet} />
                })}
            </>

        )
    }

    return (
        <Container>
            <Message>
                {pets.length} dog{pets.length !== 1 ? "s" : ""} available for adoption in Houston
            </Message>
            <ListContainer>
                {list()}
            </ListContainer>
        </Container>
    )
}

export default List;