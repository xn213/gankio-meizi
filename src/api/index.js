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
export function getMM(page){
  return Axios({
    method: 'get',
    url: `https://gank.io/api/data/福利/10/${page}`,
  })
}

