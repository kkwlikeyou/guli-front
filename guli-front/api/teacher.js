import request from '@/utils/request'

export default {

    getTeacherList(page, limit) {
        return request({
            url: `/eduService/teacherFront/getTeacherFrontList/${page}/${limit}`,
            method: 'get'
        })
    },

    getTeacherInfo(id) {
        return request({
            url: `/eduService/teacherFront/getTeacherFrontInfo/${id}`,
            method: 'get'
        })
    },


}
