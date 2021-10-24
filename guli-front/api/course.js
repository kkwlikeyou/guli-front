import request from '@/utils/request'

export default {

    getCourseList(page, limit, searchObj) {
        return request({
            url: `/eduService/courseFront/getCourseFrontList/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },

    getCourseInfo(id) {
        return request({
            url: `/eduService/courseFront/getCourseFrontInfo/${id}`,
            method: 'get'
        })
    },

    getAllSubject() {
        return request({
            url: '/eduService/edu-subject/getAllSubject',
            method: 'get'
        })
    },

}
