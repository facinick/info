/*
 * while importing libraries, if the imported libary dosn't haves and
 * the types doesn't exist in node_modules/@types folder
 * declare them here.
 */

declare module '*.svg' {
    const content: any;
    export default content;
}
