import React, { useCallback, useEffect, useRef } from 'react'
import {useField} from '@unform/core'
import { useAuthentication } from '../../../context/ContextAuthentication'

export const InputToken = ({name, ...rest}) => {
   
    const inputRef = useRef(null)
    const {fieldName, registerField, defaultValue, error} = useField(name)

    const {
      tokenRef,
    } = useAuthentication()
    
    useEffect(() => {
        registerField({
          name: fieldName,
          ref: inputRef.current,
          path: 'value',
           
        });
      }, [fieldName, registerField]);
    

      const ErrorTokenInvalid = () => {
        inputRef.current.value = ''
        inputRef.current.className = 'wrong-token inputToken'
        inputRef.current.placeholder = 'Ops, token incorreto! :('
        
      }

      const SetInputOnFocus = useCallback( () => {
        if(inputRef.current.className === 'wrong-token inputToken'){
          inputRef.current.value = tokenRef.current
          inputRef.current.className = 'inputToken'
          inputRef.current.placeholder = ''
        }
      }, [tokenRef])


      return (
          <div>
              <input ref={inputRef} defaultValue={defaultValue} onFocus={SetInputOnFocus} {...rest} />
              {error && ErrorTokenInvalid() }
          </div>
      
      )
}
