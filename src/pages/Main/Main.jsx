import React from 'react'
import { AlgorythmSection } from '../../components/AlgorythmSection/AlgorythmSection'
import { PurchaseSection } from '../../components/PurchaseSection/PurchaseSection'
import { ShareSection } from '../../components/ShareSection/ShareSection'
import S from './Main.module.css'

export const Main = () => {
  return (
    <main>	
		<AlgorythmSection />
    <PurchaseSection />
    <ShareSection />
    </main>
  )
}
