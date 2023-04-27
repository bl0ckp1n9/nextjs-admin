import { useMutation } from 'react-query'

import { userClient } from './client/user'

export const useLogin = () => useMutation(userClient.login)
