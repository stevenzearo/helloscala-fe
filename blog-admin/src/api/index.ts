import request from "@/utils/request";
import { AxiosPromise } from "axios";


/**
 * 获取首页统计数据
 */
export function getHomeData() {
  return request({
    url: '/system/home/init',
    method: 'get',
  })
}


/**
 * 获取首页统计数据
 */
export function getTopStaticssData() {
  return request({
    url: '/system/home/lineCount',
    method: 'get',
  })
}

/**
 * 获取服务监控数据
 */
export function getSystemInfo() {
  return request({
    url: '/system/home/systemInfo',
    method: 'get',
  })
}

/**
 * 获取缓存监控数据
 */
export function cacheInfo() {
  return request({
    url: '/system/home/cache',
    method: 'get',
  })
}
