import request from '../utils/request'

export function getTableInfo() {
  return request({
    url: '/table/table',
    method: 'post'
  })
}

