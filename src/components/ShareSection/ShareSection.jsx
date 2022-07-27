import React from 'react'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Input } from '../Input/Input'
import S from './ShareSection.module.css'

export const ShareSection = () => {
  return (
    <section className={S.section}>
      <SectionTitle title="Compartilhe a novidade" />
      <div>
        <p className={S.p}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      </div>

      <form className={S.form}>
        <div className={S.inputArea}>
          <Input label='Nome do amigo:' type='text' />
          <Input label='Email:' type='email' />
        </div>
        <button className={S.btn}>Enviar agora</button>
      </form>

    </section>
  )
}
