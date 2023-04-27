import { useLoginMutation } from '@/data/user'
import { Button, Label, TextInput } from 'flowbite-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

interface IFormValues {
  email: string
  password: string
}

const styles = {
  inputBox: 'my-8 mb-6 flex flex-col gap-y-3'
}

export default function LoginForm() {
  const { mutate: loginUser } = useLoginMutation()
  const { register, handleSubmit, reset } = useForm<IFormValues>()

  const handleLogin = async ({ email, password }: IFormValues) => {
    loginUser(
      { email, password },
      {
        onError: () => {
          reset()
        }
      }
    )
  }

  return (
    <>
      <h1 className="text-4xl font-bold dark:text-white">Login to Admin</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className={styles.inputBox}>
          <Label htmlFor="email" className="uppercase">
            email
          </Label>
          <TextInput
            id="email"
            placeholder="name@company.com"
            type="email"
            {...register('email')}
          />
        </div>
        <div className={styles.inputBox}>
          <Label htmlFor="password" className="uppercase">
            password
          </Label>
          <TextInput
            id="password"
            placeholder="••••••••"
            type="password"
            {...register('password')}
          />
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
