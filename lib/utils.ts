import { type ClassValue, clsx } from 'clsx';
import { gsap } from 'gsap';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const moveText = (
	event: MouseEvent,
	moveElement: HTMLHeadingElement | null
) => {
	const h1 = moveElement;

	if (h1) {
		const rect = h1.getBoundingClientRect();
		const offsetX = (event.clientX - (rect.left + rect.width / 2)) * 0.03;
		const offsetY = (event.clientY - (rect.top + rect.height / 2)) * 0.03;

		gsap.to(h1, {
			x: offsetX,
			y: offsetY,
			ease: 'power2.out',
			duration: 1,
		});
	}
};

export const setupDiagonalLine = (diagonalLine: HTMLDivElement | null) => {
	if (diagonalLine) {
		const width = window.innerWidth;
		const height = window.innerHeight;

		// Calculate the length of the diagonal line
		const length = Math.sqrt(width * width + height * height);

		// Set the length of the line
		diagonalLine.style.width = `${length}px`;

		// Calculate the angle for rotation
		const angle = Math.atan(height / width) * (180 / Math.PI); // angle in degrees

		// Set the correct positioning and rotation
		diagonalLine.style.transform = `rotate(-${angle}deg)`;
	}
};
