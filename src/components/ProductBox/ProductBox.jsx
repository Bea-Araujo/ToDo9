import React from 'react'
import S from './ProductBox.module.css'

export const ProductBox = ({data}) => {
	const {image, name, description, oldPrice, price, installments} = data
	console.log(name)
  return (
    <div className={S.container}>
		<div className={S.picture}>
			<img src={image} alt="" />
		</div>

		<article>
			<p className={S.title}>{name}</p>
			<p className={S.description}>{description}</p>
			<p className={S.small}>De: R${oldPrice}</p>
			<p className={S.for}><b>Por: R${price}</b></p>
			<p className={S.small}>{installments.count} vezes de {installments.value}</p>
		</article>
		
		<button className={S.btn}>Comprar</button>
    </div>
  )
}
