import LoginTemplate from '@/templates/LoginTemplate'
import { ReactElement } from 'react'

import RegisterForm from '@/components/RegisterForm'

function Login() {
  return <RegisterForm />
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <LoginTemplate>{page}</LoginTemplate>
}

export default Login
