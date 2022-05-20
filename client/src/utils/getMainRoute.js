
export default function getMainRoute() {
    const url = new URL(window.location.href);
    return `${url.protocol}//${url.hostname}:${url.port}`;
}