import LoginTemplate from '@/templates/LoginTemplate'
import { ReactElement } from 'react'

import LoginForm from '@/components/LoginForm'

function Login() {
  return <LoginForm />
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <LoginTemplate>{page}</LoginTemplate>
}

export default Login
