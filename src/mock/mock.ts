import Mock from 'mockjs'

Mock.mock('/api/bannerList', 'get', {
    "data": [
        {
            "id": "1",
            "img": "https://pic4.zhimg.com/v2-f05c0e1005121e89e53762704d05b28c_fhd.jpg?source=8673f162",
            "title": "金发碧眼为什么很少在白人以外的种族出现？"
        },
        {
            "id": "2",
            "img": "https://pic2.zhimg.com/v2-86bcc639835a991b61602b73310604b8_fhd.jpg?source=8673f162",
            "title": "《哈利波特》原著中与电影中人物有哪些差别？"
        },
        {
            "id": "3",
            "title": "有哪些适合情侣两个人一起玩的桌游？",
            "img": "https://pic1.zhimg.com/v2-89f0e1611118a7e15694060542eeba7a_fhd.jpg?source=8673f162"
        }
    ]
})