'use client'

// React
import { Fragment, memo, useState } from 'react'

// Components
import { StyledSidebar, MenuItem } from './components'

// Antd
import {
  HomeFilled,
  FolderOutlined,
  MessageOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  ToolOutlined,
  BarChartOutlined,
  SearchOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { Avatar, Button, Input } from 'antd'

// Dummy
const data = [
  {
    title: '',
    children: [
      { title: 'Dashboard', icon: <HomeFilled /> },
      { title: 'Projects', icon: <FolderOutlined /> },
      { title: 'Messages', icon: <MessageOutlined /> },
      { title: 'Analythics', icon: <BarChartOutlined /> }
    ]
  },
  {
    title: 'SHORTCUTS',
    children: [
      { title: 'Tools', icon: <ToolOutlined /> },
      { title: 'Help', icon: <QuestionCircleOutlined /> },
      { title: 'Settings', icon: <SettingOutlined /> }
    ]
  }
]

const BaseSidebar = memo(() => {
  // For switching active menu
  const [active, setActive] = useState<string>('Dashboard')

  return (
    <StyledSidebar>
      <div>
        {/* Title */}
        <h2>Aqumax</h2>

        {/* Searchbar */}
        <Input
          placeholder='Quick search...'
          prefix={<SearchOutlined />}
          className='search'
          size='large'
        />

        {/* Menu */}
        <div className='menu-container'>
          {data.map((row, i) => (
            <Fragment key={i}>
              <p className='title'>{row.title}</p>
              {row.children.map((child, j) => (
                <MenuItem
                  active={child.title === active}
                  key={j}
                  onClick={() => setActive(child.title)}
                >
                  {child.icon}
                  <p className='label'>{child.title}</p>
                </MenuItem>
              ))}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Profile */}
      <div className='profile-container'>
        <div className='profile'>
          <Avatar className='avatar' icon={<UserOutlined />} />
          <div>
            <p className='name'>John Doe</p>
            <p className='role'>Admin</p>
          </div>
        </div>
        <Button className='btn-logout'>
          <LogoutOutlined />
        </Button>
      </div>
    </StyledSidebar>
  )
})

BaseSidebar.displayName = 'BaseSidebar'

export default BaseSidebar
