'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { useLingui } from '@lingui/react'

const Providers = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()
	return (
		<>
		
				{/* {isShowLine && <Line />} */}

				<div className="relative z-10">{children}</div>
		</>
	)
}
export default Providers
