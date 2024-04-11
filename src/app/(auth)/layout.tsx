import { PropsWithChildren } from 'react'




export default function LogLayout({ children }: PropsWithChildren) {
	
	return (
		<>
			<div className=''>
				{children}
			</div>
		</>
	)
}