import RegisterForm from '@/organisms/RegisterForm'
import LoginTemplate from '@/templates/LoginTemplate'
import { ReactElement } from 'react'

function Login() {
  return <RegisterForm />
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <LoginTemplate>{page}</LoginTemplate>
}

export default Login
