import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'

const CatCont = styled.div`
    width: 100%;
    height: auto
`
const CatButton = styled.button``

const Categories = () => {

    const [category, setCategory] = useState([])

       useEffect(() =>  {
           const catArray = []
        const catQuery = `*[_type == "categories"] | order(date desc){
            category
        }
        `
       sanityClient.fetch(catQuery).then(cat => {
        cat.forEach(cat => {
            catArray.push(cat)
        })
        setCategory(catArray)
    })
return}, [])
    console.log(category)
    return (
        <CatCont>
            {category.map(cat => {
               return <CatButton onClick={() => console.log(cat.category)}>{cat.category}</CatButton>
            })}
        </CatCont>
    )
}

export default Categories
