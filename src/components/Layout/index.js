import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Header'

export default function Layout() {
	return (
		<div>
			<div className="">
				<Nav />
				<main className="">
					<Outlet />
				</main>

			</div>
		</div>
	)
}