import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ProductBox } from '../ProductBox/ProductBox'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import S from './PurchaseSection.module.css'

export const PurchaseSection = () => {
	const [product, setProduct] = useState([])
	const [currentPage, setCurrentPage] = useState('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
	const [page, setPage] = useState(1)


	async function getResponse(page){
		const req = await fetch(page)
		const json = await req.json()
		const {nextPage, products} = json
		
		setProduct([...product, ...products])
		setCurrentPage(`https://${nextPage}`)
		console.log(json)
		console.log(nextPage)
	}

	useEffect(() => {
		getResponse(currentPage)
	}, [])

	return (
		<section className={S.section}>
			<SectionTitle title="Sua seleção especial"/>
			

			<div className={S.container}>
				{
					product.map((el, i) => {
						
						return (<ProductBox data={el} key={i}/>)
					})
				}

			</div>
				<button className={S.btn} onClick={
					() => {
						getResponse(currentPage)	
					}
				}>Ainda mais produtos aqui!</button>
		</section>
	)
}
