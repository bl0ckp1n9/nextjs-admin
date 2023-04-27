import { useRegisterMutation } from '@/data/user'
import { Button, Label, TextInput } from 'flowbite-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

interface IFormValues {
  name: string
  email: string
  password: string
}

const styles = {
  inputBox: 'my-8 mb-6 flex flex-col gap-y-3'
}

export default function RegisterForm() {
  const { mutate: registerUser } = useRegisterMutation()
  const { register, handleSubmit } = useForm<IFormValues>()

  const handleRegister = async ({ name, email, password }: IFormValues) => {
    registerUser({ name, email, password })
  }

  return (
    <>
      <h1 className="text-4xl font-bold dark:text-white">Register to Admin</h1>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className={styles.inputBox}>
          <Label htmlFor="email" className="uppercase">
            Name
          </Label>
          <TextInput id="name" placeholder="name" type="text" {...register('name')} />
        </div>
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
            Register
          </Button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          <Link href="/login" className="text-primary-600 dark:text-primary-300">
            Go to Login
          </Link>
        </p>
      </form>
    </>
  )
}
