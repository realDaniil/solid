import React from 'react'
import Coaches from './coachesSection/CoachesSection'
import CoachesWelcomeSection from './welcomeSection/CoachesWelcomeSection'


function CoachesPage() {
	return (
		<div>
			<CoachesWelcomeSection />
			<Coaches />
		</div>
	)
}

export default CoachesPage