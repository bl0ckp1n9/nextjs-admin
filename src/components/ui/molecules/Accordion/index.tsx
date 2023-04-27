import cn from 'classnames'
import { Accordion as FBAccordion } from 'flowbite-react'
import React, { PropsWithChildren } from 'react'
interface ISidebarItemProps extends PropsWithChildren {
  title: string
}

export default function Accordion({ title, children }: ISidebarItemProps) {
  return (
    <FBAccordion className={cn('border-none', 'focus:ring-0')}>
      <FBAccordion.Panel>
        <FBAccordion.Title
          className={cn(
            'border-none text-2xl',
            'focus:focus:shadow-0 focus:border-none focus:bg-transparent focus:ring-0',
            'hover:bg-transparent'
          )}
        >
          {title}
        </FBAccordion.Title>
        <FBAccordion.Content className={cn('border-none', '[&_a]:text-xl')}>
          {children}
        </FBAccordion.Content>
      </FBAccordion.Panel>
    </FBAccordion>
  )
}
