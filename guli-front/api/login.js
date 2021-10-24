import request from '@/utils/request'

export default {
    //登录
    submitLogin(formItem) {
        return request({
            url: `/educenter/member/login`,
            method: 'post',
            data: formItem
        })
    },
    getLoginInfo() {
        return request({
            url: `/educenter/member/getMemberInfo`,
            method: 'get'
        })
    },
    gotoWxLogin() {
        return request({
            url: `/api/ucenter/wx/login`,
            method: 'get'
        })
    },

}