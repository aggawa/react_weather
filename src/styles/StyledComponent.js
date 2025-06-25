import styled from 'styled-components'

export const Wrap = styled.div`
   /* overflow: hidden; */
   min-width: ${(props) => props.$minWidth || '1200px'};
`

export const Main = styled.main`
   width: ${(props) => props.$width || '1200px'};
   margin: 0 auto;
   overflow: hidden;
   padding: ${(props) => props.$padding || 0};
`

export const MarginDiv = styled.div`
   /* margin-top: ${(props) => props.$marginTop || '40px'};
   margin-bottom: ${(props) => props.$marginBottom || '40px'}; */
`
