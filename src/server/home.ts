import httpRequest from '@/server/index'

// 新增项目
export function apiNewProject(param:any) {
    return httpRequest({
        url: 'business/qx/newProject.do',
        method: 'post',
        data: param
    })
}