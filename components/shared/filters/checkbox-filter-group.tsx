'use client'

import { useState } from 'react'
import type { ChangeEvent, FC } from 'react'

import { Skeleton } from '../../ui'
import { Input } from '../../ui/input'

import { CheckboxLabel, type Props as Checkbox } from './checkbox-label'

type Item = Checkbox

interface Props {
	className?: string
	defaultItems?: Item[]
	defaultValue?: string[]
	items: Item[]
	limit?: number
	loading?: boolean
	name?: string
	searchInputPlaceholder?: string
	selected?: Set<string>
	title: string
	onClickCheckbox?: (id: string) => void
}

export const CheckboxFiltersGroup: FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	loading,
	onClickCheckbox,
	selected,
	name
}) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	if (loading) {
		return (
			<div className={className}>
				<p className='font-bold mb-3'>{title}</p>

				{...Array.from({ length: limit })
					.fill(0)
					.map((_, index) => <Skeleton className='h-6 mb-4 rounded-[8px]' key={index} />)}

				<Skeleton className='w-28 h-6 mb-4 rounded-[8px]' />
			</div>
		)
	}

	const list = showAll
		? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
		: (defaultItems || items).slice(0, limit)

	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>

			{showAll && (
				<div className='mb-5'>
					<Input className='bg-gray-50 border-none' onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} />
				</div>
			)}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{list.map((item, index) => (
					<CheckboxLabel
						checked={selected?.has(item.value)}
						key={index}
						name={name}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button className='text-primary mt-3' onClick={() => setShowAll(!showAll)}>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	)
}
