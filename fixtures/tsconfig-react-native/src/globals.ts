// @ts-expect-error — document does not exist in React Native
document.querySelector(".header");

// @ts-expect-error — window.location does not exist in React Native
window.location.href;

// @ts-expect-error — localStorage is not available in React Native
localStorage.getItem("key");

export {};
