'use client'

import { useDocumentVisibility } from 'ahooks'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const useShowPlugins = () => {
	const ref = useRef<any>(null)
	// const [inViewport] = useInViewport(ref)
	const documentVisibility = useDocumentVisibility()
	const isInView = useInView(ref)

	const isShowView = isInView && documentVisibility === 'visible' ? true : false

	return { isShowView, ref }
}

export default useShowPlugins
