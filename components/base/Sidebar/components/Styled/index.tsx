'use client'

// Styled
import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
}

export const StyledSidebar = styled.div`
  position: fixed;
  top: 12px;
  left: 12px;
  padding: 16px;
  background: #3c79f5;
  border-radius: 24px;
  width: 240px;
  height: calc(100vh - 24px);
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .menu-container {
    overflow: auto;
    height: calc(100vh - 250px);

    ::-webkit-scrollbar {
      width: 1px;
    }
  }

  .title {
    color: white;
    margin: 12px 0px;
    letter-spacing: 1px;
    display: block;
  }

  .search {
    margin: 24px 0px;
    background-color: #ffffff33;
    border-radius: 24px;
    border: none;

    input {
      background-color: transparent;
      color: white;

      ::placeholder {
        color: white;
      }
    }

    svg {
      color: white;
    }
  }

  .profile-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .profile {
      display: flex;
      align-items: center;

      .name {
        font-weight: 600;
      }

      .role {
        font-size: 12px;
      }

      .avatar {
        background-color: #87d068;
        margin-right: 8px;
      }
    }

    .btn-logout {
      background-color: #4b56d2;
      color: white;
      border: none;
      border-radius: 16px;
      padding: 0px 16px;
      display: flex;
      align-items: center;
      height: 48px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 60px;
    padding: 8px;

    .title,
    .label,
    h2 {
      display: none;
    }

    .profile {
      display: none !important;
    }

    .btn-logout {
      border-radius: 24px !important;
    }

    .search {
      display: flex;
      justify-content: center;
      input {
        display: none;
      }
    }
  }
`

export const MenuItem = styled.div<IProps>`
  cursor: pointer;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  transition: 300ms;

  .label {
    margin-left: 8px !important;
  }

  @media only screen and (max-width: 768px) {
    padding: 12px;
    justify-content: center;
  }

  ${props =>
    props.active &&
    css`
      background: #4b56d2;
      color: white;
    `}
`
