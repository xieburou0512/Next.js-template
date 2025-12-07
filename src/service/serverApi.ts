import ky from 'ky'
import { API_URL } from '~/config/index'
import { setServerI18n } from '../lingui/initLingui'
import { cookies } from 'next/headers'

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

const serverApi = ky.create({
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
				const locale = cookies().get('locale')?.value || 'en'
				// console.log('locale', locale)
				request.headers.set('locale', locale)
			},
		],
	},
	parseJson: text => {
		const data = JSON.parse(text) as KYData<never>
		if (data.code !== '00') {
			throw data
		}
		return data
	},
})

export default serverApi
