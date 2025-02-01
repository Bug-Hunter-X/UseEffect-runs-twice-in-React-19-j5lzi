# React 19 useEffect Bug

This repository demonstrates an uncommon bug related to the `useEffect` hook in React 19.  The issue involves the `useEffect` hook unexpectedly running twice after each render, even when using functional updates with `prevCount => prevCount + 1` in `setCount`. This is especially problematic when dealing with side effects like API calls or DOM manipulations.

## Bug Description

The `useEffect` hook, designed to perform side effects after a component renders, is triggered twice per render.  This double invocation causes unintended behavior and might lead to performance issues.

## Solution

The solution involves a more thorough understanding of the circumstances under which `useEffect` might run multiple times.  The provided solution thoroughly explains the issue and proposes solutions which involve carefully examining the dependencies passed to `useEffect` and ensuring no state changes within the component trigger it unnecessarily.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and observe the console logs.  You'll see that the `useEffect` hook logs twice after each click of the increment button.

## Solution Details

The solution file (`bugSolution.js`) demonstrates how to fix this issue through thorough analysis of dependencies.