import React, {
	useState,
	useContext,
	createContext,
	useEffect,
	useCallback,
	useRef,
} from 'react'

const { ipcRenderer } = window.require('electron')
const ContextAuth = createContext()

const ContextAuthProvider = ({ children }) => {
	const [checkBoxIsChecked, setCheckBoxIsChecked] = useState(false)

	const [loading, setLoading] = useState(true)
	const [authentication, setAuthentication] = useState(false)
	const tokenRef = useRef(null)

	const fetchToken = useCallback(async () => {
		const { token, checkBox } = await ipcRenderer.invoke('@token/REQUEST', {
			title: 'checkTokenBox',
			body: '',
		})
		setCheckBoxIsChecked(checkBox)
		tokenRef.current = token
	}, [])

	const BoxSavedConfig = useCallback(
		async (token) => {
			ipcRenderer.send('@comunication/REQUEST', {
				title: 'saveTokenCheck',
				checkBox: checkBoxIsChecked,
				token: token,
			})
		},
		[checkBoxIsChecked]
	)

	useEffect(() => {
		(async () => {
			await fetchToken()
			setTimeout(setLoading(false), 100)
		})()
	}, [fetchToken])

	if (loading) return <div />

	async function HandleLogin(token) {
		tokenRef.current = token

		const response = await ipcRenderer.invoke('@token/REQUEST', {
			title: 'loginWithToken',
			token: token,
		})

		BoxSavedConfig(token)
		setAuthentication(true)
		return response === 'Error' ? false : true
	}

	async function HandleLogout() {
		await ipcRenderer.invoke('@token/REQUEST', {
			title: 'logoutBot',
			body: '',
		})
		await fetchToken()
		setAuthentication(false)
	}

	return (
		<ContextAuth.Provider
			value={{
				checkBoxIsChecked,
				setCheckBoxIsChecked,
				HandleLogin,
				tokenRef,
				authentication,
				loading,
				HandleLogout,
			}}
		>
			{children}
		</ContextAuth.Provider>
	)
}

export const useAuthentication = () => {
	const {
		checkBoxIsChecked,
		tokenRef,
		setCheckBoxIsChecked,
		HandleLogin,
		HandleLogout,
		authentication,
		loading,
	} = useContext(ContextAuth)

	return {
		tokenRef,
		checkBoxIsChecked,
		setCheckBoxIsChecked,
		HandleLogin,
		HandleLogout,
		authentication,
		loading,
	}
}

export default ContextAuthProvider
