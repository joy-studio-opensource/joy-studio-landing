'use client'

// Styled Components
import styled from 'styled-components'

// Components
import BaseButton from '@/components/base/Button'

// Assets
import ReadyToDoThisBackgroundImage from '@/assets/images/ready-to-do-this-bg.png'

const StyledReadyToDoThis = styled.section.attrs({
  style: {
    background: `url(${ReadyToDoThisBackgroundImage.src}) no-repeat center/cover`
  }
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 293px;
  gap: 30px;
  border-radius: 20px;
`

const StyledButton = styled(BaseButton)`
  width: 223px;
  height: 54px !important;
  border-radius: 8px !important;

  span {
    color: ${props => props.theme.colors.BLACK};
    font-weight: ${props => props.theme.typography.FONT_WEIGHT_500};
    font-size: ${props => props.theme.typography.FONT_18};
    line-height: 21.78px;
  }
`

export { StyledReadyToDoThis, StyledButton }
