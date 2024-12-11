export function mySetTimeout(callback: () => void, delay: number) {
	const start = performance.now();
	let animationFrameId: number;

	function checkTime() {
			if (performance.now() - start >= delay) {
					callback();
			} else {
					animationFrameId = requestAnimationFrame(checkTime);
			}
	}

	animationFrameId = requestAnimationFrame(checkTime);

	// Возвращаем функцию для отмены
	return () => {
			cancelAnimationFrame(animationFrameId);
	};
}