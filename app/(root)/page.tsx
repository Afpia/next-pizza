import { Container, Title, TopBar } from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title className='font-extrabold' size='lg' text='Все пиццы' />
			</Container>
			<TopBar />
		</>
	)
}
