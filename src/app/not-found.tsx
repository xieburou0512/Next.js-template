// import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function NotFound() {
	redirect('/')
	// return (
	// 	<div className="fixed left-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-color-web text-color-white">
	// 		<h2>Not Found</h2>
	// 		<p>Could not find requested resource</p>
	// 		<Link href="/" className="mt-4 underline hover:text-color-brand">
	// 			Return Home
	// 		</Link>
	// 	</div>
	// )
}
