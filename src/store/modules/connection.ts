import { defineStore } from 'pinia'
import { ConnectionInterface, ConnectionView, ConnectionBody } from './types'
import { get_connections, update_connections } from '/@/api/connection'
// 获取路由实例
export const useConnectionStore = defineStore({
    id: 'connection',
    state: (): ConnectionInterface => {
        return {
            current_connections: []
        }
    },
    getters: {
      connections: state => {
        let arr: ConnectionView[] = []
        state.current_connections.forEach(ele => {
            arr.push({
                "name": ele.name,
                "uuid": ele.uuid,
                "mac": ele.mac,
                "interface": ele.interface,
                "ip4info": {
                    "addresses": ele.ip4info.addresses.join(","),
                    "dns": ele.ip4info.dns.join(","),
                    "gateway": ele.ip4info.gateway,
                    "method": ele.ip4info.method
                },
                "ip6info": {
                    "addresses": ele.ip6info.addresses.join(","),
                    "dns": ele.ip6info.dns.join(","),
                    "gateway": ele.ip6info.gateway,
                    "method": ele.ip6info.method
                }
            })
        })
        return arr
      },
    },
    actions: {
        async getConnection() {
            this.current_connections = (await get_connections()).data
        },
        async updateConnection(connections: ConnectionView[]) {
            let arr: ConnectionBody[] = []
            connections.forEach(ele => {
                if (ele.interface.startsWith("en")) {
                    arr.push({
                        "name": ele.name,
                        "uuid": ele.uuid,
                        "mac": ele.mac,
                        "interface": ele.interface,
                        "ip4info": {
                            "addresses": ele.ip4info.addresses.split(",").filter(function(entry) { return entry.trim() != ''; }),
                            "dns": ele.ip4info.dns.split(",").filter(function(entry) { return entry.trim() != ''; }),
                            "gateway": ele.ip4info.gateway,
                            "method": ele.ip4info.method,
                            "routes": []
                        },
                        "ip6info": {
                            "addresses": ele.ip6info.addresses.split(",").filter(function(entry) { return entry.trim() != ''; }),
                            "dns": ele.ip6info.dns.split(",").filter(function(entry) { return entry.trim() != ''; }),
                            "gateway": ele.ip6info.gateway,
                            "method": ele.ip6info.method,
                            "routes": []
                        }
                    })
                }
            })
            await update_connections(arr)
        }
    }
})
