import clsx from 'clsx'
import styled from 'styled-components'
import tw from 'twin.macro'

interface ExampleProps {
  className?: string
}

const Header = styled.h1`
  ${tw`p-5 text-center text-slate-100`}
`

export default function Index({ className, ...rest }: ExampleProps) {
  return (
    <div className={clsx('bg-slate-500', className)} {...rest}>
      <Header>Header</Header>
    </div>
  )
}
