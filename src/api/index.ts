import instance from './axios'

// 获取首页新闻数据
export const getBannerList = () => {
    return instance({
        url: '/bannerList'
    })
}

export default {
    getBannerList
}