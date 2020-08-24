import React, { useState } from 'react'
import styled from 'styled-components'
import './menu.styles.scss'
import { useTrail, animated } from 'react-spring'
import { push as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

const AnimatedMenuItem = animated(NavLink)

const MenuItem = styled(AnimatedMenuItem)`
	cursor: pointer;
	text-decoration: none;
	color: rgba(255, 255, 255, 0.7);
	margin: 10px 0;
	font-size: 32px;
	transition: color ease-in-out 0.3s;
	&:hover {
		color: rgba(255, 255, 255, 1);
	}
`
const Border = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	transition: all 0.5s ease-in;
	&:before {
		position: absolute;
		content: '';
		height: 0;
		width: 0;
		border: 4px solid transparent;
		bottom: 0;
		left: 0;
	}
	&:after {
		position: absolute;
		content: '';
		height: 0;
		width: 0;
		border: 4px solid transparent;
		top: 0;
		right: 0;
	}
	&:before {
		border: 4px solid transparent;
		border-right: none;
		border-bottom: none;

		animation: before-animation 1s 0.4s forwards;
	}
	&:after {
		border: 4px solid transparent;
		border-left: none;
		border-top: none;

		animation: before-animation 1s 0.4s forwards;
	}
	@keyframes before-animation {
		0% {
			height: 0;
			width: 0;
			border-color: white;
		}

		55% {
			height: 99.5%;
			width: 0;
		}
		100% {
			height: 99.5%;
			width: 100%;
			border-color: white;
		}
	}
`
const HamburgerMenu = ({ menu }) => {
	const items = menu

	const [trail, set] = useTrail(items.length, () => ({
		opacity: 0,
		transform: 'translate3D(0,50px,0)',
	}))

	const [menuOpen, menuOpenSwitch] = useState(false)

	const toggleMenu = (state) => {
		if (state.isOpen) {
			menuOpenSwitch(true)
			set({
				opacity: 1,
				transform: 'translate3D(0,0,0',
			})
		} else {
			menuOpenSwitch(false)
			set({
				opacity: 0,
				transform: 'translate3D(0,50px,0',
			})
		}
	}

	return (
		<Menu
			id='menu'
			isOpen={menuOpen}
			pageWrapId={'page-wrap'}
			outerContainerId={'outer-container'}
			width={'200px'}
			onStateChange={toggleMenu}
			disableAutoFocus
			left
		>
			{menuOpen ? <Border /> : null}
			{trail.map((props, index) => (
				<MenuItem
					key={items[index]}
					style={props}
					onClick={() => menuOpenSwitch(false)}
					to={items[index].name === 'home' ? '/' : `/${items[index].name}`}
				>
					{items[index].name}
				</MenuItem>
			))}
		</Menu>
	)
}

export default HamburgerMenu
