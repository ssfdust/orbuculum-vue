interface BaseResponse {
    code: number,
    msg: string
}

export interface Netinfo {
    addresses: string[],
    dns: string[],
    gateway: string,
    method: string,
    routes: string[]
}

export interface NetinfoView {
    addresses: string,
    dns: string,
    gateway: string,
    method: string
}

export interface ConnectionBody {
    name: string,
    uuid: string,
    mac: string,
    interface: string,
    ip4info: Netinfo,
    ip6info: Netinfo
}

export interface ConnectionView {
    name: string,
    uuid: string,
    mac: string,
    interface: string,
    ip4info: NetinfoView,
    ip6info: NetinfoView

}

export interface ConnectionResp extends BaseResponse {
    data: ConnectionBody[] 
}

export interface Connection {
    connections: ConnectionBody[]
}
