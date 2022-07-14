const BREAKPOINTS = [576, 768, 992, 1200];

const MEDIA_QUERY = BREAKPOINTS.map((bp) => `@media (max-width: ${bp}px)`);

export default MEDIA_QUERY;
