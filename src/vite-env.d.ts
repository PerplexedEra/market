/// <reference types="vite/client" />

declare module "vanta/dist/vanta.globe.min" {
    const GLOBE: (opts: Record<string, unknown>) => { destroy: () => void };
    export default GLOBE;
}
