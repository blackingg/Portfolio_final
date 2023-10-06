import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.35;

let mouseX = -10;
let mouseY = -10;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
	const cursorOutline = useRef();
	const [hoverButton, setHoverButton] = useState(false);

	const animate = () => {
		let distX = mouseX - outlineX;
		let distY = mouseY - outlineY;

		outlineX = outlineX + distX * CURSOR_SPEED;
		outlineY = outlineY + distY * CURSOR_SPEED;

		cursorOutline.current.style.left = `${outlineX}px`;
		cursorOutline.current.style.top = `${outlineY}px`;
		requestAnimationFrame(animate);
	};

	useEffect(() => {
		const mouseEventsListener = document.addEventListener(
			"mousemove",
			function (event) {
				mouseX = event.pageX;
				mouseY = event.pageY;
			}
		);
		const animateEvent = requestAnimationFrame(animate);
		return () => {
			document.removeEventListener("mousemove", mouseEventsListener);
			cancelAnimationFrame(animateEvent);
		};
	}, []);

	useEffect(() => {
		const mouseEventListener = document.addEventListener(
			"mouseover",
			function (e) {
				if (
					e.target.tagName.toLowerCase() === "button" ||
					// check parent is button
					e.target.parentElement.tagName.toLowerCase() === "button" ||
					// check is input or textarea

					e.target.tagName.toLowerCase() === "input" ||
					e.target.tagName.toLowerCase() === "textarea"
				) {
					setHoverButton(true);
				} else {
					setHoverButton(false);
				}
			}
		);
		return () => {
			document.removeEventListener("mouseover", mouseEventListener);
		};
	}, []);

	return (
		<>
			<div
				className={`invisible md:visible -50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform
        ${
					hoverButton
						? "bg-transparent border-[3px] border-[#436112] w-7 h-7"
						: "bg-[#5d8d11] w-[15px] h-[15px]"
				}`}
				ref={cursorOutline}
			></div>
		</>
	);
};
