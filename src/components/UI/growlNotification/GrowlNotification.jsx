import React, { useEffect, useState } from 'react'
import cl from './GrowlNotification.module.css'

function GrowlNotification({text, display, setDisplay}) {
	useEffect(() => {
  const timer = setTimeout(() => {
		setDisplay('none')
  }, 8000);
  return () => clearTimeout(timer);
}, [display]);
	return (
		<div style={{display: display}} className={cl.item}>
			<p>{text}</p>
		</div>
	)
}

export default GrowlNotification