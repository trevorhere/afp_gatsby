import React from "react"
import styled from 'styled-components'
import MyImg from './image'

const ClassCard = ({ ...props }) => (
    <Section >
        <div>
        test
        </div>
        <div>
            <Image  src={"field_work.png"}/>
        </div>
    </Section>
)
export default ClassCard

const Section = styled.div`
    display:flex;
    background-color:white;
    height: 500px;
`

const Image = styled(MyImg)`
    width: 500px!important;
    height: 500px!important;


`


