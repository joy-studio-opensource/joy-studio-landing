'use client'

// Styled Components
import styled from 'styled-components'

// Antd
import { Layout } from 'antd'

// Antd - Layout
const { Content } = Layout

const StyledContent = styled(Content)`
  padding: '0 50px';
  min-height: 85vh !important;
`

export { StyledContent }
