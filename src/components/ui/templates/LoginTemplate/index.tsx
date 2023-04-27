import { Card } from 'flowbite-react'
import { PropsWithChildren } from 'react'

export default function LoginTemplate({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-700">
      <h1 className="mb-6 text-4xl text-white">T3Q AI</h1>
      <Card className="w-full max-w-4xl">{children}</Card>
    </div>
  )
}
