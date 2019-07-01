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

/**
 * 点击home页图片显示大图详情, 获取图片详情数据
 * @param {Object} timeObj 时间对象: {Y:'2019', M: '02', D: '13' }
 */
export function getDetail(timeObj){
  return Axios({
    method: 'get',
    url: `http://gank.io/api/history/content/day/${timeObj.Y}/${timeObj.M}/${timeObj.D}`
  })
}

/**
 * 获取列表数据
 * @param { string } type 类型: 前端/iOS/Android
 * @param { Number } page 页码
 */
export function getListData(type, page){
  return Axios({
    method: 'get',
    url: `http://gank.io/api/data/${type}/10/${page}`
  })
}