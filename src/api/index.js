/**
 * @file: src/api/index.js
 * @author: xn213
 */

import Axios from 'axios'

/**
 * 获取api
 * @export
 * @param {page} param0 
 */
export function get({
  page
}){
  return Axios({
    method: 'get',
    url: 'https://gank.io/api/web',
    params: {
      page
    }
  })
}