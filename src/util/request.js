import fetch from 'isomorphic-fetch';

export const getData = (url) => {
    return new Promise((resolve,reject) => {
        fetch(url).then((response) => {
            return response.text()
        }).then((res) => {
            resolve(res)
        }).catch((error) => {
            console.log(url,'获取数据失败',error);
        })
    })
}