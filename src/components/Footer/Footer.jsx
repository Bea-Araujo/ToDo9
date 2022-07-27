import React from 'react'
import S from './Footer.module.css'

export const Footer = () => {
    return (
        <footer>
            <div className={S.triangle}></div>

            <article className={S.article}>
                <p className={S.p}>
                    Testando suas habilidades em HTML, CSS e JS.
                    <br />
                    Linx Impulse
                    <br />
                    2019
                </p>
            </article>
        </footer>
  )
}
