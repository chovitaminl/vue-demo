import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

  /**
   * 获取slider轮播图数据
   * @param return jsonp数据
   */
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

/**
 * 获取MV数据数据
 * @param return jsonp数据
 */
export function getMvList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/getmv_by_tag'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    g_ky: '1717478706',
    loginUin: 0,
    hostUin: 0,
    outCharset: 'GB2312',
    needNewCode: 0,
    cmd: 'shoubo',
    lan: 'all'
  })

  return jsonp(url, data, options)
}

/**
 * 获取歌单数据
 * @param return jsonp数据
 */
export function getDissList () {
  const url = '/api/getDiscLists'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    picmid: 1,
    loginUin: 0,
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
