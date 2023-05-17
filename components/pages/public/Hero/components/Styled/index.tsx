'use client'

// Styled Components
import styled from 'styled-components'

// Components
import BaseButton from '@/components/base/Button'

// Assets
import HeroImage from '@/assets/images/hero.png'

const StyledHeroWrapper = styled.section.attrs({
  style: {
    background: `url(${HeroImage.src}) no-repeat center/cover`
  }
})`
  width: 100%;
  height: 510px;

  .hero-container {
    color: ${props => props.theme.colors.WHITE};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: inherit;
    width: inherit;

    .item {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 40px;
      width: 50%;
    }
  }
`

const StyledHeroButton = styled(BaseButton)`
  width: 183px !important;
  height: 54px !important;

  span {
    font-size: ${props => props.theme.typography.FONT_18};
  }

  &:nth-child(1) {
    span {
      color: ${props => props.theme.colors.BLACK};
    }
  }

  &:nth-child(2) {
    span {
      color: ${props => props.theme.colors.WHITE};
    }
  }
`

export { StyledHeroWrapper, StyledHeroButton }
