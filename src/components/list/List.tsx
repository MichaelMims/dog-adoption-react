import react from 'react'
import { PetProp, ListProp } from '../../utils/utils'
import Loading from '../utils/Loading'
import styled from 'styled-components'

const Text = styled.span`
@media (max-width: 768px) {
    // font-size: 2em;
}
`

const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`
const ItemImage = styled.img`
width: 100%;
height: 20rem;
object-fit: fill; 
`
const ItemTitle = styled.h1`
color: black;
margin: 0px;
font-weight: bold;
`

const InfoTextHeading = styled.h3`
font-weight: bold;
margin: 0px;
`

const ItemDetailLink = styled.button`
text-decoration: none;

:hover {
    text-decoration: none;
    border: 1px dotted red;
}
`

const CardInfoBar = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin: 10px 0px;
`

const Info = styled.div`
`

const Card = styled.div`
font-family: 'Amatic SC', cursive;
width: 20rem;
padding: 1rem;
margin: 15px;
box-shadow: 10px 10px 50px 10px gray;
`

function ListItem({ pet }: PetProp) {
    return (
        <Card>
            <ImageContainer>
                <ItemImage src={pet.image} />
            </ImageContainer>
            <ItemTitle>{pet.name}</ItemTitle>
            <CardInfoBar>
                <Info>
                    <InfoTextHeading>Breed</InfoTextHeading>
                    <Text>{pet.breed}</Text>
                </Info>
                <Info>
                    <InfoTextHeading>Sex</InfoTextHeading>
                    <Text>{pet.sex}</Text>
                </Info>
                <Info>
                    <InfoTextHeading>Weight</InfoTextHeading>
                    <Text>{pet.weight}</Text>
                </Info>
            </CardInfoBar>
            <ItemDetailLink as="a" href={pet.url}>More Details</ItemDetailLink> 
        </Card>
    )
}

const Container = styled.div`
text-align: center;
margin: 0% 15%;
margin-bottom: 50px;
`

const Message = styled.h1`
font-family: 'Josefin Slab', serif;
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