import React, { createContext, useContext, useState } from 'react'
import { useProfile } from '../../../../context/ContextProfile'
const DescriptionContext = createContext()

const DescriptionContextProvider = ({children}) => {
	
	const { botDescription } = useProfile()
	const [inputTextArea, setInputTextArea] = useState('')

	const [editClass, setEditClass] = useState({
		buttonEdit: 'button-edit-not',
		textAreaEdit: 'text-area-description-not-edit'
	})

	const HandleClickConfirm = () =>{

	}

	const HandleClickNegative = () =>{
		
	}

	return (
		<DescriptionContext.Provider value={{
			botDescription,
			editClass,
			setEditClass,
			inputTextArea,
			setInputTextArea,
			HandleClickConfirm,
			HandleClickNegative
		}
		}>
			<div className="bot-description">
				{children}
			</div>
		</DescriptionContext.Provider>
	)
}

export const useDescriptionEdit = () => {
	const context = useContext(DescriptionContext)
	return {
		...context,
	}

}

export default DescriptionContextProvider
