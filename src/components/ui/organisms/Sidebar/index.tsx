import Accordion from '@/molecules/Accordion'
import { Sidebar as FBSidebar } from 'flowbite-react'
import React from 'react'

export default function Sidebar() {
  return (
    <FBSidebar className="w-[25rem]">
      <FBSidebar.Items>
        <FBSidebar.ItemGroup>
          <Accordion title="Contents">
            <FBSidebar.Item href="#">커뮤니티 관리</FBSidebar.Item>
            <FBSidebar.Item href="#">뉴스 관리</FBSidebar.Item>
            <FBSidebar.Item href="#">랭킹 관리</FBSidebar.Item>
            <FBSidebar.Item href="#">Raising Options 관리</FBSidebar.Item>
          </Accordion>
        </FBSidebar.ItemGroup>
      </FBSidebar.Items>
    </FBSidebar>
  )
}
