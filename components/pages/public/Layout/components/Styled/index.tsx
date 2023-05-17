'use client'

// Styled Components
import styled from 'styled-components'

// Antd
import { Layout } from 'antd'

// Antd - Layout
const { Content, Footer } = Layout

const StyledContent = styled(Content)`
  padding: '0 50px';
`

const StyledFooter = styled(Footer)`
  text-align: 'center';
`

export { StyledContent, StyledFooter }
