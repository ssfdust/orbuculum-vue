<script setup lang="ts">
import { useConnectionStore } from '/@/store'
import YwzTable from '/@/components/ywz-table'
import { ITableCol } from '/@/components/ywz-table/types'
const store = useConnectionStore()
const submit = () => {
    let computed_connections = connections.value
    store.updateConnection(computed_connections)
}
const fill = ref(true)

const connections = computed(() => store.connections)
</script>

<template>
  <el-space style="width: 100%" direction="vertical" :fill="fill">
    <el-row>
    </el-row>
    <el-row>
      <el-table :data="connections" :columns="columns">
        <el-table-column prop="name" label="网卡" width="180"/>
        <el-table-column prop="mac" label="MAC" width="180"/>
        <el-table-column label="IPv4">
          <template #default="scope">
            <el-form :model="scope.row.ip4info" label-width="120px">
              <el-form-item label="地址/掩码：">
                <el-input v-model="scope.row.ip4info.addresses" />
              </el-form-item>
              <el-form-item label="DNS：">
                <el-input v-model="scope.row.ip4info.dns" />
              </el-form-item>
              <el-form-item label="网关：">
                <el-input v-model="scope.row.ip4info.gateway" />
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="IPv6">
          <template #default="scope">
            <el-form :model="scope.row.ip6info" label-width="120px">
              <el-form-item label="地址/掩码：">
                <el-input v-model="scope.row.ip6info.addresses" />
              </el-form-item>
              <el-form-item label="DNS：">
                <el-input v-model="scope.row.ip6info.dns" />
              </el-form-item>
              <el-form-item label="网关：">
                <el-input v-model="scope.row.ip6info.gateway" />
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row justify="center">
      <el-button @click="submit">提交</el-button>
    </el-row>
  </el-space>
</template>

<style scoped></style>
