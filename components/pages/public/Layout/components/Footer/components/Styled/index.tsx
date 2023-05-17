'use client'

// Styled Components
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.BLACK};
  height: 483px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .footer-first {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    align-items: start;
  }

  .footer-second {
    ul {
      display: flex;
      align-items: center;
      gap: 20px;

      li:hover {
        cursor: pointer;
      }
    }
  }
`

const StyledFooterJoyStudio = styled.div`
  display: flex;
  flex-direction: column;

  .footer-joy-studio-image {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`

const StyledFooterCompany = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;

  ul {
    li {
      color: ${props => props.theme.colors.WHITE};
      font-size: ${props => props.theme.typography.FONT_15};
      line-height: 18.15px;
      letter-spacing: 0.5px;
      margin-bottom: 20px;
    }

    li:hover {
      cursor: pointer;
    }
  }
`

const StyledFooterContactUs = styled.div`
  display: flex;
  flex-direction: column;

  .footer-contact-us-item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }
`

export {
  StyledFooter,
  StyledFooterJoyStudio,
  StyledFooterCompany,
  StyledFooterContactUs
}
