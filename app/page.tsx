import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export default function Home() {
	return (
		<div className=''>
			<Button variant='outline'>Корзина</Button>
			<Skeleton />
		</div>
	)
}
