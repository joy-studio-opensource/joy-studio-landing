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
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: ${props => props.theme.colors.BLACK} !important;
  height: 84px !important;

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
`

export { StyledHeader, StyledImageWrapper, StyledMenu, StyledButton }
