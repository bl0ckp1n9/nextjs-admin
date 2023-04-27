import LoginForm from '@/organisms/LoginForm'
import LoginTemplate from '@/templates/LoginTemplate'
import { ReactElement } from 'react'

function Login() {
  return <LoginForm />
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <LoginTemplate>{page}</LoginTemplate>
}

export default Login
