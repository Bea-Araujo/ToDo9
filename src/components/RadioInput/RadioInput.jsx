import React from 'react'
import S from './RadioInput.module.css'

export const RadioInput = ({radioGroup, label}) => {
  return (
    <fieldset className={S.fieldset}>
        <input className={S.radio} type="radio" name={radioGroup}/>
		<label className={S.label}>{label}</label>
    </fieldset>
  )
}
