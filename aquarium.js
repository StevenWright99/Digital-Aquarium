// (function () {
//     const container = document.getElementById('container');
//     const fish = document.getElementById('fish');

//     // Horizontal position and velocity (px/sec).
//     let x = 0;
//     let vx = parseFloat(getComputedStyle(document.documentElement)
//         .getPropertyValue('--swim-speed')) || 180;

//     // Track time between frames for smooth, framerate-independent motion.
//     let lastTime = null;

//     // Cache dimensions so we know when we’ve hit an edge.
//     let containerW = 0;
//     let fishW = 0;

//     function measure() {
//         containerW = container.clientWidth;
//         fishW = fish.clientWidth;
//     }

//     function setFacingRight(isRight) {
//         // dir: 1 => face right, -1 => face left
//         fish.style.setProperty('--dir', isRight ? 1 : -1);
//     }

//     function initPosition() {
//         // Start near the left edge, facing right
//         x = 0;
//         setFacingRight(true);
//         fish.style.left = x + 'px';
//     }

//     function loop(timestamp) {
//         if (lastTime == null) lastTime = timestamp;
//         const dt = (timestamp - lastTime) / 1000;  // seconds since last frame
//         lastTime = timestamp;

//         // Advance position
//         x += vx * dt;

//         // Right edge hit: reverse velocity and flip instantly
//         if (x + fishW >= containerW) {
//             x = containerW - fishW;       // clamp to right edge
//             vx = -Math.abs(vx);           // head left
//             setFacingRight(false);        // flip now
//         }

//         // Left edge hit: reverse velocity and flip instantly
//         if (x <= 0) {
//             x = 0;                        // clamp to left edge
//             vx = Math.abs(vx);            // head right
//             setFacingRight(true);         // flip now
//         }

//         // Apply position
//         fish.style.left = x + 'px';

//         requestAnimationFrame(loop);
//     }

//     // Re-measure on window resize so edges stay accurate
//     window.addEventListener('resize', measure);

//     function start() {
//         measure();
//         initPosition();
//         requestAnimationFrame(loop);
//     }

//     // Ensure the image width is known before starting
//     if (fish.complete) {
//         start();
//     } else {
//         fish.addEventListener('load', start, { once: true });
//     }
// })();
