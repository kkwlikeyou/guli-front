import request from '@/utils/request'

export default{
    //根据手机号码发送短信
    sendCode(email){
        return request({
            url: `/eduMsm/msm/send/${email}`,
            method: 'get'
            })
    },
    //用户注册
    register(formItem){
        return request({
            url: `/educenter/member/register`,
            method: 'post',
            data: formItem
        })
    }

}
