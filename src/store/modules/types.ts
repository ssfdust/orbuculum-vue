import {
  IPermissionList,
  IRoleList,
  IUserDetail,
  IUserList,
} from '/@/api/types/mock'
import {
    ConnectionBody,
    ConnectionView
} from '/@/api/types/connection'

export interface CountInterface {
  count: number
}

export interface ConnectionInterface {
    connections: ConnectionView[],
    current_connections: ConnectionBody[]
}

export interface IUser {
  userList: IUserList[]
  roleList: IRoleList[]
  permissionList: IPermissionList[]
  userDetail?: IUserDetail
  curId: number
}
