import Header from '@/app/components/Header'
import Body from '@/app/components/Body'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<Body>{children}</Body>
		</>
	)
}

export default RootLayout
