import clsx from 'clsx'

interface ExampleProps {
  className?: string
}

export default function Index({ className, ...rest }: ExampleProps) {
  return (
    <div className={clsx('bg-slate-500', className)} {...rest}>
      <h1>Heading</h1>
    </div>
  )
}
