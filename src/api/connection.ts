import type {
  ConnectionResp,
  ConnectionBody
} from './types/connection'
import request from '/@/service'

export const get_connections = () => {
  return request<any, ConnectionResp>({
    url: '/api/proxy/connections',
    method: 'get',
  })
}

export const update_connections = (data: ConnectionBody[]) => {
  return request<ConnectionBody[], any>({
    url: '/api/proxy/connections',
    method: 'post',
    data: data
  })
}
