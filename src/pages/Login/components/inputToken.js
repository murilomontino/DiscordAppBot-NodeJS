import React, { useEffect, useRef } from 'react'
import {useField} from '@unform/core'

export const InputToken = ({name, ...rest}) => {
   
    const inputRef = useRef(null)
    const {fieldName, registerField, defaultValue, error} = useField(name)

    
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

      return (
          <div>
              <input ref={inputRef} defaultValue={defaultValue} {...rest} />
              {error && ErrorTokenInvalid() }
          </div>
      
      )
}
