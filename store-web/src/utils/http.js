import axiosServer from './request'

/**
 * post请求
 * @param url
 * @param params
 * @param isShowMessage
 * @returns {Promise<any>}
 */
export function post (url, params) {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await axiosServer({
				url,
				method: 'post',
				data: params
			})
			resolve(data)
		} catch (e) {
			reject(e)
		}
	})
}

export function get (url, params) {
	console.log(url)
	return new Promise(async (resolve, reject) => {
		try {
			const data = await axiosServer({
				url,
				method: 'get',
				params: params
			})
			resolve(data)
		} catch (e) {
			reject(e)
			// Message.error('系统繁忙，请稍后再试！')
		}
	})
}

export function remove (url, params) {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await axiosServer({
				url,
				method: 'delete',
				params: params
			})
			resolve(data)
		} catch (e) {
			reject(e)
			// Message.error('系统繁忙，请稍后再试！')
		}
	})
}
/**
 * 统一的连接服务器接口-上传专用
 * @param {*string} url url或自定义的url属性名 (默认值'')
 * @param {*string} type request类型 (默认值post)
 * @param {*json} params json参数 (默认值{})
 * @param {*string} subUrl 要拼接到url后面的资源文件名 (默认值'')
 * @returns {*json || string} respBody(json) 正常时返回值，如果respBody无效时返回message(string)
 * @returns {*string} message 错误时返回值
 */
/**
 *
 *上传
 * @export
 * @param {*} url  url地址 (默认值'')
 * @param {*} params json参数 (默认值{})
 * @returns
 */
export function upload (url, params) {
	const formdata = new FormData()
	Object.keys(params).forEach(v => {
		formdata.append(v, params[v])
	})
	return new Promise(async (resolve, reject) => {
		try {
			const data = await axiosServer({
				url,
				method: 'post',
				data: formdata,
				headers: { 'content-type': 'multipart/form-data' }
			})
			resolve(data || {})
		} catch (e) {
			reject(e)
		}
	})
}
