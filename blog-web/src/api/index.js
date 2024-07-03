import request from '@/utils/request'

export function listArticle(params) {
    return request({
        url: '/article/',
        method: 'get',
        params: params
    })
}
export function getArticleByUserId(userId, params) {
    return request({
        url: '/article/listByUserId',
        method: 'get',
        params: {
            userId: userId,
            pageNo: params.pageNo,
            pageSize: params.pageSize
        }
    })
}
export function deleteMyArticle(id) {
    return request({
        url: '/article/',
        method: 'delete',
        params: {
            id: id
        }
    })
}
export function getMyArticleInfo(id) {
    return request({
        url: '/article/selectMyArticleInfo',
        method: 'get',
        params: {
            id: id
        }
    })
}
export function insertArticle(data) {
    return request({
        url: '/article/',
        method: 'post',
        data
    })
}
export function updateArticle(data) {
    return request({
        url: '/article/',
        method: 'put',
        data
    })
}
export function searchArticle(params) {
    return request({
        url: '/article/search',
        method: 'get',
        params: params
    })
}

export function articleInfo(id) {
    return request({
        url: '/article/info/' + id,
        method: 'get',
    })
}

export function checkCode(data) {
    return request({
        url: '/article/checkCode',
        method: 'get',
        params: {
            code: data
        }
    })
}
export function articleLike(id) {
    return request({
        url: '/article/like',
        method: 'get',
        params: {
            articleId: id
        }
    })
}
export function archiveArticle() {
    return request({
        url: '/article/archive',
        method: 'get',
    })
}

export function listTagAll() {
    return request({
        url: '/v1/tag/',
        method: 'get',

    })
}

export function featchHomeData() {
    return request({
        url: '/v1/',
        method: 'get',
    })
}
export function getHot(type) {
    return request({
        url: '/v1/hot',
        method: 'get',
        params: {
            type: type
        }
    })
}
export function report() {
    return request({
        url: '/v1/report',
        method: 'get',
    })
}
export function getWebSiteInfo() {
    return request({
        url: '/v1/webSiteInfo',
        method: 'get',
    })
}

export function emailLogin(data) {
    return request({
        url: '/oauth/emailLogin',
        method: 'post',
        data
    })
}
export function forgetPassword(data) {
    return request({
        url: '/oauth/forgetPassword',
        method: 'put',
        data
    })
}
export function logout() {
    return request({
        url: '/logout',
        method: 'get'
    })
}
export function openAuthUrl(source) {
    return request({
        url: '/oauth/render/' + source,
        method: 'get'
    })
}
export function wxIsLogin(loginCode) {
    return request({
        url: '/oauth/wechat/is_login',
        method: 'get',
        params: {
            loginCode: loginCode
        }
    })
}
export function getWechatLoginCode() {
    return request({
        url: '/oauth/wechatLoginCode',
        method: 'get',

    })
}
export function sendEmailCode(email) {
    return request({
        url: '/oauth/sendEmailCode',
        method: 'get',
        params: {
            email: email
        }
    })
}
export function emailRegister(data) {
    return request({
        url: '/oauth/emailRegister',
        method: 'post',
        data
    })
}
export function updateUserInfo(data) {
    return request({
        url: '/v1/user/',
        method: 'put',
        data
    })
}
export function getUserInfo(userId) {
    return request({
        url: '/v1/user/info',
        method: 'get',
        params: {
            userId: userId
        }
    })
}
export function selectUserInfoByToken(token) {
    return request({
        url: '/v1/user/selectUserInfoByToken',
        method: 'get',
        params: {
            token: token
        }
    })
}
export function getUserCount(id) {
    return request({
        url: '/v1/user/getUserCount',
        method: 'get',
        params: {
            id: id
        }
    })
}
export function upload(data) {
    return request({
        url: '/system/file/upload',
        method: 'POST',
        headers: { 'Content-Type': 'multipart/articles-data' },
        data
    })
}
export function listCategory() {
    return request({
        url: '/v1/category/',
        method: 'get'
    })
}

export function addFeedback(data) {
    return request({
        url: '/v1/feedback/',
        method: 'post',
        data
    })
}
export function getCollect() {
    return request({
        url: '/v1/collect/',
        method: 'get'
    })
}
export function collect(id) {
    return request({
        url: '/v1/collect/collect',
        method: 'get',
        params: {
            articleId: id
        }
    })
}
export function cancelCollect(id) {
    return request({
        url: '/v1/collect/',
        method: 'delete',
        params: {
            articleId: id
        }
    })
}

export function followedUser(userId) {
    return request({
        url: '/v1/followed/insertFollowed',
        method: 'post',
        params: {
            userId: userId
        }
    })
}
export function deleteFollowedUser(userId) {
    return request({
        url: '/v1/followed/deleteFollowed',
        method: 'delete',
        params: {
            userId: userId
        }
    })
}

