'use client'

import type { FC } from 'react'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store'

interface Props {
	className?: string
}

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export const Categories: FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId)

	return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
			{categories.map((item, index) => (
				<a
					href={`/#${item}`}
					key={index}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						categoryActiveId === index && 'bg-white shadow-md shadow-gray-200 text-primary'
					)}
				>
					<button>{item}</button>
				</a>
			))}
		</div>
	)
}
