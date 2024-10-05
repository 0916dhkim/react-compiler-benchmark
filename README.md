## Setup

`<table>` with 400 x 100 cells. 1 `<input>` in each cell.

## Methods

We entered 1 character in an input, and measured the time from event handler fire and the next paint.

## Results

- VanillaJS (baseline): 66ms
- React no optimization: 1.1s
- Redux: 1.2s
- Zustand: 447ms
- Consolidating event handlers into 1 parent component event listener: 212ms
- React.memo: 224ms
- React.memo + consolidated event listener: 180ms
- React.memo + consolidated event listener + millionjs vite plugin: 237ms
- React compiler: 498ms
- React compiler + React.memo + consolidated event listener: 196ms
