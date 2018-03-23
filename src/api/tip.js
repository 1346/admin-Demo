import request from '../utils/request'

export function getTipInfo() {
  return request({
    url: '/tip/tip',
    method: 'post'
  })
}
