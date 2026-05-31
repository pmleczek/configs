// @ts-expect-error — document is not available in edge runtime
document.getElementById("app");

// @ts-expect-error — window is not available in edge runtime
window.localStorage.setItem("k", "v");

// @ts-expect-error — HTMLElement does not exist without DOM lib
const _el: HTMLElement = {} as HTMLElement;

export {};
