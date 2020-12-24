import request from './axios'

// 获取首页新闻数据
export const getNewsList = () => {
    return request({
        url: '/newsList'
    })
}