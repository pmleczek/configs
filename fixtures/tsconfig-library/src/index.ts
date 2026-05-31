export type GreetFn = (name: string) => string;

export const greet: GreetFn = (name) => `Hello, ${name}`;

export default greet;
