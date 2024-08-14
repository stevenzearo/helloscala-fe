import request from '@/utils/request'

export function list() {
    return request({
        url: '/bot-assistant',
        method: 'get'
    })
}

export function get(id) {
    return request({
        url: '/bot-assistant/' + id,
        method: 'get'
    })
}

export function listConversations(id, param) {
    return request({
        url: '/bot-assistant/' + id + '/conversation',
        method: 'get',
        params: param
    })
}

export function listConversationMsg(conversationId, param) {
    return request({
        url: '/bot-assistant/conversation/' + conversationId + '/msg',
        method: 'get',
        params: param
    })
}

export function chat(id, conversationId, msg) {
    return request({
        url: '/bot-assistant/' + id + '/chat',
        method: 'post',
        data: {conversationId: conversationId, msg: msg}
    })
}

export function uploadFile(file) {
    return request({
        url: '/bot-assistant/file',
        method: 'post',
        headers: {'Content-Type': 'multipart/articles-data'},
        data: {multipartFile: file}
    })
}

export function getFile(fileId) {
    return request({
        url: '/bot-assistant/file/' + fileId,
        method: 'get'
    })
}