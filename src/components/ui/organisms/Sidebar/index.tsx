import cn from 'classnames'
import { Sidebar as FBSidebar } from 'flowbite-react'
import React from 'react'

const styles = {
  sidebar: cn('h-screen w-[25rem]', '[&_button]:text-2xl'),
  sidebarItem: 'text-xl'
}

export default function Sidebar() {
  return (
    <FBSidebar className={styles.sidebar}>
      <FBSidebar.Items>
        <FBSidebar.ItemGroup>
          <FBSidebar.Collapse label="Contents">
            <FBSidebar.Item href="#" className={styles.sidebarItem}>
              커뮤니티 관리
            </FBSidebar.Item>
            <FBSidebar.Item href="#" className={styles.sidebarItem}>
              뉴스 관리
            </FBSidebar.Item>
            <FBSidebar.Item href="#" className={styles.sidebarItem}>
              랭킹 관리
            </FBSidebar.Item>
            <FBSidebar.Item href="#" className={styles.sidebarItem}>
              Raising Options 관리
            </FBSidebar.Item>
          </FBSidebar.Collapse>
        </FBSidebar.ItemGroup>
      </FBSidebar.Items>
    </FBSidebar>
  )
}
