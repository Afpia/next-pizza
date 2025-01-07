import type { FC } from 'react'

import { Checkbox } from '../../ui/checkbox'

export interface Props {
	checked?: boolean
	endAdornment?: React.ReactNode
	name?: string
	text: string
	value: string
	onCheckedChange?: (checked: boolean) => void
}

export const CheckboxLabel: FC<Props> = ({ text, value, endAdornment, onCheckedChange, checked, name }) => (
	<div className='flex items-center space-x-2'>
		<Checkbox
			checked={checked}
			className='rounded-[8px] w-6 h-6'
			id={`checkbox-${String(name)}-${String(value)}`}
			value={value}
			onCheckedChange={onCheckedChange}
		/>
		<label className='leading-none cursor-pointer flex-1' htmlFor={`checkbox-${String(name)}-${String(value)}`}>
			{text}
		</label>
		{endAdornment}
	</div>
)
