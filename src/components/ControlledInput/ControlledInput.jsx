import React, { useRef, useState, useEffect } from 'react'

// TODO: styles in a separate file, no underlining, indicate when password is wrong, smaller fontsize

export const ControlledInput = (props) => {
  const { value, onChange, handleLogin, ...rest } = props
  const [cursor, setCursor] = useState(null)
  const ref = useRef(null)
    
  useEffect(() => {
    const input = ref.current
    if (input) input.setSelectionRange(cursor, cursor)
  }, [ref, cursor, value])
    
  const handleChange = (e) => {
    setCursor(e.target.selectionStart)
    onChange && onChange(e)
  }
  
  const handleSubmit = (e) => {
    if (e.code === 'Enter') {
      const submittedInput = e.target.value
      handleLogin(submittedInput)
    }
  }
  
  return <input type='text' style={{ width: '50%' }} ref={ref} value={value} onChange={handleChange} {...rest} onKeyDown={handleSubmit} />
}