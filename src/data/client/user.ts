import { IAuthResponse } from '../../interfaces'
import { API_ENDPOINTS } from './api-endpoints'
import { HttpClient } from './http-client'

interface ILoginInput {
  email: string
  password: string
}
export const userClient = {
  login: (variables: ILoginInput) => {
    return HttpClient.post<IAuthResponse>(API_ENDPOINTS.LOGIN, variables)
  }
}
