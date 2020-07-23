import axios from 'axios'

// create an axios instance
const service = axios.create({
	timeout: 120000 // request timeout
})
// request interceptor

// service.interceptors.request.use(
// 	error => {
// 		return Promise.reject(error)
// 	})

// respone interceptor
service.interceptors.response.use(
	response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
		return response.data
	},
	error => {
		const originalRequest = error.config || {}
		if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1 && !originalRequest._retry) {
			error.message = `${originalRequest.url}接口请求超时`
		}
		if (error && error.response) {
			const { errorMsg = '' } = error.response.data
			switch (error.response.status) {
				case 400:
					error.message = '请求错误'
					break
				case 401:
					error.message = '未授权，请登录'
					addRedirect()
					break
				case 403:
					error.message = '拒绝访问'
					break
				case 404:
					error.message = `请求地址出错: ${error.response.config.url}`
					break
				case 408:
					error.message = '请求超时'
					break
				case 500:
					error.message = errorMsg || '服务器内部错误'
					break
				case 501:
					error.message = '服务未实现'
					break
				case 502:
					error.message = '网关错误'
					break
				case 503:
					error.message = '服务不可用'
					break
				case 504:
					error.message = '网关超时'
					break
				case 505:
					error.message = 'HTTP版本不受支持'
					break
				default:
			}
		}
		console.log(`${originalRequest.url}请求出错`)
		console.log('err' + JSON.stringify(error))// for debug
		return Promise.reject(error)
	})

export default service
