import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MainPage from '../components/mainPage/MainPage'
import TrainersPage from './trainersPage/CoachesPage'
import AboutPage from './aboutPage/AboutPage'
import ShopPage from './shopPage/ShopPage'

function AppRouter(props) {
	return (
		<Switch>
			<Route exact path='/'>
				<MainPage />
			</Route>
			<Route path='/trainers'>
				<TrainersPage />
			</Route>
			<Route path='/shop'>
				<ShopPage />
			</Route>
			<Route path='/about'>
				<AboutPage />
			</Route>
			<Redirect to='/' />
		</Switch>
	)
}

export default AppRouter