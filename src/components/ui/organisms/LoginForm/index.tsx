import { Button, Label, TextInput } from 'flowbite-react'
import Link from 'next/link'

export default function LoginForm() {
  return (
    <>
      <h1 className="mb-[3rem] text-4xl font-bold dark:text-white">Login to Admin</h1>
      <form>
        <div className="mb-4 flex flex-col gap-y-3">
          <Label htmlFor="email" className="uppercase">
            email
          </Label>
          <TextInput id="email" name="email" placeholder="name@company.com" type="email" />
        </div>
        <div className="my-8 mb-6 flex flex-col gap-y-3">
          <Label htmlFor="password" className="uppercase">
            password
          </Label>
          <TextInput id="password" name="password" placeholder="••••••••" type="password" />
        </div>

        <div className="my-12">
          <Button type="submit" className="w-full max-w-[10rem] uppercase">
            Login
          </Button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          <Link href="/register" className="text-primary-600 dark:text-primary-300">
            Go to Create account
          </Link>
        </p>
      </form>
    </>
  )
}
