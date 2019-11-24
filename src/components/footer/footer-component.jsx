import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'

const FooterDesc = styled.p`
  position: relative;
  bottom: 0;
  font-size: 10px;
  width: 80%;
  margin-left: 10%;`

const Footer = () => {
  const [footer, setFooter] = useState([])


useEffect(() => {
const footerQuery = `*[_type == "footer"]`
sanityClient.fetch(footerQuery).then(footer => {
setFooter(footer)
  footer.forEach(footer => {
    setFooter(footer)
  })
})
return
}, [])

    return (
       
        <FooterDesc>{footer.companyInfo}</FooterDesc>
    )
}

export default Footer
