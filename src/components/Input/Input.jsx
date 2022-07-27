import React from 'react'
import S from './Input.module.css'

export const Input = ({ label, type }) => {
  return (
    <fieldset className={S.fieldset} width='100%'>
      <label className={S.label}>{label}</label>
      <input className={S.input} type={type} />
    </fieldset>
  )
}
