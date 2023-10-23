import styled from 'styled-components'

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 32px 0;
  }
`

export const ListItem = styled.li`
  width: fit-content;
  font-size: 22px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`

export const ListDevider = styled.div`
  height: 22px;
  width: 1px;
  background: #ffffffbf;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 16px;
  }
`
