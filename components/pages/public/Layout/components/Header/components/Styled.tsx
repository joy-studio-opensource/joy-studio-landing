'use client'

// Styled Components
import styled from 'styled-components'

// Antd
import { Layout, Menu } from 'antd'

// Components
import BaseButton from '@/components/base/Button'

// Antd - Layout
const { Header } = Layout

const StyledHeader = styled(Header)`
  /* Background */
  background-color: ${props => props.theme.colors.BLACK} !important;

  /* Display */
  height: 84px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  /* Border bottom for header */
  border-bottom: 1px solid #0c0c0c;
  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.1));

  /* Override menu of ant design */
  .ant-menu-overflow {
    background-color: ${props => props.theme.colors.BLACK} !important;
  }
`

const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyledMenu = styled(Menu)`
  .ant-menu-title-content {
    color: ${props => props.theme.colors.WHITE};
    font-weight: 500;
  }

  .ant-menu-item-selected > .ant-menu-title-content {
    color: ${props => props.theme.colors.PRIMARY_DARKEST};
  }

  .ant-menu-item-selected::after {
    border-bottom-color: transparent !important;
  }
`

const StyledButton = styled(BaseButton)`
  width: 145px;
  height: 50px !important;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1) !important;
  border-radius: 8px !important;

  span {
    color: ${props => props.theme.colors.BLACK};
    font-size: ${props => props.theme.typography.FONT_15};
    font-weight: ${props => props.theme.typography.FONT_WEIGHT_500};
  }
`

export { StyledHeader, StyledImageWrapper, StyledMenu, StyledButton }
