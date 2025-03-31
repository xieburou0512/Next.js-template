'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useLingui } from '@lingui/react'
import useShowPlugins from '../../hooks/useShowPlugins'
import Menu from './Menu'

const Header = () => {
	const { i18n } = useLingui()
	const pathname = usePathname()
	const { isShowView, ref } = useShowPlugins()

	return (
		<div className={clsx('h-top-height', pathname.startsWith(`/${i18n.locale}/stardust`) && 'md:!h-auto')} ref={ref}>
			<div
				className={clsx(
					'fixed top-0 z-[99] flex h-top-height w-screen items-center justify-between gap-3 px-5 py-[1.0625rem]',
					!isShowView && 'bg-color-white-5 backdrop-blur-[14px]',
					'border-b-[1.5px] border-b-color-white-5 md:border-transparent',
				)}
			>
				<div className="flex h-full shrink-0 flex-row-reverse items-center gap-5 md:flex-row md:gap-3">
					<Menu />
				</div>
			
			</div>
		</div>
	)
}

export default Header
