import React, { useEffect, useState } from 'react'
import { RxDoubleArrowUp } from 'react-icons/rx'
import cl from './Anchor.module.css'
function Anchor() {
	const [anchorPosition, setAnchorPosition] = useState()
	const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)
	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
		if (1.6 * window.innerHeight <= scrollPosition && anchorPosition !== 20) {
			setAnchorPosition(20)
		} else if (window.innerHeight > scrollPosition && anchorPosition !== -200) {
			setAnchorPosition(-200)
		}
	return (
			<RxDoubleArrowUp
				className={cl.anchor}
				style={{right: anchorPosition}}
				onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
			/>
	)
}

export default Anchor