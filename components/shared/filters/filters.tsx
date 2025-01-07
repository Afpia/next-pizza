import React from 'react'

// import { useFilters, useIngredients, useQueryFilters } from '@/shared/hooks'

import { Input } from '../../ui'
// import { CheckboxFiltersGroup } from './checkbox-filters-group'
// import { RangeSlider } from './range-slider'
import { Title } from '../title'

import { RangeSlider } from './range-slider'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	// const { ingredients, loading } = useIngredients()
	// const filters = useFilters()

	// useQueryFilters(filters)

	// const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }))

	// const updatePrices = (prices: number[]) => {
	// 	console.log(prices, 999)
	// 	filters.setPrices('priceFrom', prices[0])
	// 	filters.setPrices('priceTo', prices[1])
	// }

	return (
		<div className={className}>
			<Title className='mb-5 font-bold' size='sm' text='Фильтрация' />

			{/* Верхние чекбоксы */}
			{/* <CheckboxFiltersGroup
				className='mb-5'
				name='pizzaTypes'
				selected={filters.pizzaTypes}
				title='Тип теста'
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' }
				]}
				onClickCheckbox={filters.setPizzaTypes}
			/>

			<CheckboxFiltersGroup
				className='mb-5'
				name='sizes'
				selected={filters.sizes}
				title='Размеры'
				items={[
					{ text: '20 см', value: '20' },
					{ text: '30 см', value: '30' },
					{ text: '40 см', value: '40' }
				]}
				onClickCheckbox={filters.setSizes}
			/> */}

			{/* Фильтр цен */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						max={1000}
						min={0}
						type='number'
						// value={String(filters.prices.priceFrom)}
						// onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
						placeholder='0'
					/>
					<Input
						max={1000}
						min={100}
						type='number'
						// value={String(filters.prices.priceTo)}
						// onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
						placeholder='1000'
					/>
				</div>

				<RangeSlider
					max={1000}
					min={0}
					step={10}
					// value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
					// onValueChange={updatePrices}
				/>
			</div>

			{/* <CheckboxFiltersGroup
				className='mt-5'
				defaultItems={items.slice(0, 6)}
				items={items}
				limit={6}
				name='ingredients'
				selected={filters.selectedIngredients}
				title='Ингредиенты'
				loading={loading}
				onClickCheckbox={filters.setSelectedIngredients}
			/> */}
		</div>
	)
}
