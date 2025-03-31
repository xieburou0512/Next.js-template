import api from '~/src/service/index'

// twitter绑定
export const serverBindTwitter = async (
	body?: {
		code: string //code
		codeChallenge: string //codeChallenge
		state: string //state
		userId: string //用户id
		callBackUrl: string //回调地址
	},
	options?: any,
) =>
	api
		.post('user/tw/bindTwAccountV2', {
			body: JSON.stringify(body),
			...options,
		})
		.json()

// twitter重新授权
export const serverTwitterReauthorization = async (
	body: {
		callBackUrl: string
		code: string
		codeChallenge: string
		state: string
		userId: string
	},
	options?: any,
) =>
	api
		.post('user/tw/twAccountReauthorization', {
			body: JSON.stringify(body),
			...options,
		})
		.json()

// 授权discord账号
export const serverBindDiscord = async (data: { code: string; redirectUri: string }) =>
	api.post('marketing/summer-social/project/account/auth-discord', { body: JSON.stringify(data) }).json()

// 授权tg账号
export const serverBindTelegram = async (data: { tgUserId: number }) =>
	api.post('marketing/summer-social/project/account/auth-telegram', { body: JSON.stringify(data) }).json()
