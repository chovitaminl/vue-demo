import { commonParams, options } from './config'
import jsonp from 'common/js/jsonp'

export function getLyric (mid) {
  const url = '/api/getLyric'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    callback: 'MusicJsonCallback_lrc',
    pcachetime: +new Date(),
    g_tk: 1986323433,
    format: 'jsonp',
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  return jsonp(url, data, options)
}