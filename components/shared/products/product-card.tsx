// eslint-disable-next-line simple-import-sort/imports
import type { FC } from 'react'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// import { Ingredient } from '@prisma/client'
import { Button } from '../../ui'
import { Title } from '../title'

interface Props {
	className?: string
	id: number
	imageUrl: string
	ingredients: any[]
	name: string
	price: number
}

export const ProductCard: FC<Props> = ({ id, name, price, imageUrl, ingredients, className }) => (
	<div className={className}>
		<Link href={`/product/${id}`}>
			<div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
				<Image alt={name} height={215} src={imageUrl} width={215} />
			</div>

			<Title className='mb-1 mt-3 font-bold' size='sm' text={name} />

			<p className='text-sm text-gray-400'>{ingredients.map((ingredient) => ingredient.name).join(', ')}</p>

			<div className='flex justify-between items-center mt-4'>
				<span className='text-[20px]'>
					от
					{/* eslint-disable-next-line style/jsx-one-expression-per-line */}
					{' '}<b>{price} ₽</b>
				</span>

				<Button className='text-base font-bold' variant='secondary'>
					<Plus className='mr-1' size={20} />
					Добавить
				</Button>
			</div>
		</Link>
	</div>
)
