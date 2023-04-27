import Sidebar from '@/organisms/Sidebar'
import cn from 'classnames'
import { PropsWithChildren } from 'react'

export default function MainTemplate({ children }: PropsWithChildren) {
  return (
    <div className={cn('flex', ' min-h-screen')}>
      <Sidebar />
      <div className={cn('flex-1', 'flex flex-col')}>
        <div>header</div>
        <main>{children}</main>
      </div>
    </div>
  )
}
