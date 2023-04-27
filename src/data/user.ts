import { API_ENDPOINTS } from '@/data/client/api-endpoints'
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

import { setAuthCredentials } from '../utils/auth'
import { userClient } from './client/user'

export const useLoginMutation = () => {
  const router = useRouter()

  return useMutation(userClient.login, {
    onSuccess: (data) => {
      if (data?.accessToken && data?.tokenType) {
        setAuthCredentials(data?.accessToken, data?.tokenType)
        toast.success('common:successfully-login')
        router.push('/')
      } else {
        toast.error('common:login-failed')
      }
    },
    onError: () => {
      toast.error('common:login-failed')
    }
  })
}

export const useRegisterMutation = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation(userClient.register, {
    onSuccess: (data) => {
      if (data?.accessToken && data?.tokenType) {
        setAuthCredentials(data?.accessToken, data?.tokenType)
        toast.success('common:successfully-register')
        router.push('/')
      }
    },
    onError: (error) => {
      alert(error)
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.REGISTER)
    }
  })
}
