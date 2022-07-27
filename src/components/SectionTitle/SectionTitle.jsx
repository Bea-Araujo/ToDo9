import React from 'react'
import S from './SectionTitle.module.css'

export const SectionTitle = ({title}) => {
  return (
    <div className={S.container}>
        <div className={S.line}></div>
        <p className={S.title}><b>{title}</b></p>
    </div>
  )
}
