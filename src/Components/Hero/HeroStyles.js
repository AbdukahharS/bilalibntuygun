import styled from 'styled-components'

export const LeftSection = styled.div`
  flex: 1;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`

export const RightSection = styled.div`
  width: 400px;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 60%;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 60%;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 60%;
    margin: 0 auto;
  }
`
