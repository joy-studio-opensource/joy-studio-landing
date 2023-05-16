// Interfaces
import { IAppCommonPagination } from '@/types/app/common.type'

export interface IAppResponse<T = unknown> {
  message: string
  status: number
  result: T
}

export interface IAppResponsePagination<T extends unknown[]> {
  message: string
  status: number
  result: IAppCommonPagination<T>
}
