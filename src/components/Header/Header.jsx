import React from 'react'
import S from './Header.module.css'

export const Header = () => {
	return (
		<header className={S.header}>
			{/* gadi was here */}

			<div className={S.container}>

				<article>
					<p className={S.p1}>uma seleção especial de produtos</p>
					<h3 className={S.boldText}>especial para você</h3>
				</article>

				<p className={S.p2}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>

				<div className={S.btndiv}>
					<button className={S.btn}>Conheça a Linx</button>
					<button className={S.btn}>Ajude o algorítmo</button>
					<button className={S.btn}>Seus produtos</button>
					<button className={S.btn}>Compartilhe</button>
				</div>
			</div>
			<div className={S.triangle}></div>
		</header>
	)
}
