export const breakpoints = [
    575,
    768,
    992,
    1200,
    1440,
];



export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);