'use client'

import { useEffect, useRef } from 'react'
import type { FC } from 'react'
import { useIntersection } from 'react-use'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store'

import { Title } from '../title'

import { ProductCard } from './product-card'

interface Props {
	categoryId: number
	className?: string
	items: any[]
	listClassName?: string
	title: string
}

export const ProductsGroupList: FC<Props> = ({ title, items, listClassName, categoryId, className }) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [intersection?.isIntersecting])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title className='font-extrabold mb-5' size='lg' text={title} />

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{items.map((product) => (
					<ProductCard
						id={product.id}
						imageUrl={product.imageUrl}
						ingredients={product.ingredients}
						key={product.id}
						name={product.name}
						price={product.items[0].price}
					/>
				))}
			</div>
		</div>
	)
}
