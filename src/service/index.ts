
import { getCookie } from 'cookies-next'
import ky from 'ky'
import { API_URL } from '~/config/index'
export interface KYData<T> {
	code: string
	msg: string
	data: T
}

export interface KYList<T> {
	code: string
	msg: string
	data: {
		pageNum: number
		pageSize: number
		total: number
		list: T[]
	}
}

const api = ky.create({
	prefixUrl: API_URL,
	headers: {
		timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		platform: 'web',

		'Content-Type': 'application/json;charset=utf-8',
	},
	retry: 0,
	timeout: 10000,
	hooks: {
		beforeRequest: [
			request => {
				const token = getCookie('token')
				if (token) {
					request.headers.set('token', token)
				}
				// console.log('locale', getCookie('locale'))
				request.headers.set('locale', getCookie('locale') || 'en')
			},
		],
	},
	parseJson: text => {
		const data = JSON.parse(text) as KYData<never>
		if (data.code !== '00') {
			if (data.code === '401') {

				//可以加一个提示
				
				console.log('ky-logs 401', data)
			}
			throw data
		}
		return data
	},
})
export default api
