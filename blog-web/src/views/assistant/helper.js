export function msgToHtml(msg) {
    if (msg === undefined || msg === null) {
        return '';
    }
    let content = msg.content;
    if ('TEXT' === msg.contentType) {
        return content;
    } else if ('OBJECT_STRING' === msg.contentType) {
        try {
            const contentJson = JSON.parse(content)
            if (contentJson.type !== undefined && contentJson.type === 'IMAGE') {
                const url = contentJson.fileUrl
                return `<img src="${url} " alt="" class="messageImg" style="width: 150px;height: 150px;">`;
            } else {
                return contentJson;
            }
        } catch (e) {
            return content;
        }

    } else {
        return content;
    }
}