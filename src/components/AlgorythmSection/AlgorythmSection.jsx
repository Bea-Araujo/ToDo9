import React from 'react'
import { Input } from '../Input/Input'
import { RadioInput } from '../RadioInput/RadioInput'
import S from './AlgorythmSection.module.css'

export const AlgorythmSection = () => {
  return (
    <section className={S.section}>
        <div className={S.container}>
        <article className={S.article}>
            <p className={S.title}>Ajude o algorítimo a ser mais certeiro</p>
            <p className={S.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. 
            <br/>
            <br/>
                Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
            </p>
        </article>

        <form className={S.form}>
            <Input label="Seu nome:" type="text"/>
            <Input label="Email:" type="email"/>
            <Input label="CPF:" type="text"/>
            
            <div className={S.radioDiv}>
            <RadioInput label="Masculino" radioGroup="gender" />
            <RadioInput label="Feminino" radioGroup="gender" />
            </div>

            <button className={S.btn}>Enviar</button>
        </form>
        </div>
    </section>
  )
}
