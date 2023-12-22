import { Board } from "../../App";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Tic-Tac-Toe/Board",
  component: Board,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// xIsNextがtrueの場合
export const XIsNext = {
  args: {
    xIsNext: true,
    squares: Array(9).fill(null),
    onPlay: () => {
      console.log("Square clicked");
    },
  },
};

// xIsNextがfalseの場合
export const OIsNext = {
  args: {
    xIsNext: false,
    squares: Array(9).fill(null),
    onPlay: () => {
      console.log("Square clicked");
    },
  },
};

// squaresの中身が全部Xの場合
export const X = {
  args: {
    xIsNext: true,
    squares: Array(9).fill("X"),
    onPlay: () => {
      console.log("Square clicked");
    },
  },
};

// squaresの中身が全部Oの場合
export const O = {
  args: {
    xIsNext: false,
    squares: Array(9).fill("O"),
    onPlay: () => {
      console.log("Square clicked");
    },
  },
};

// squaresの中身が全部△の場合
export const Triangle = {
  args: {
    xIsNext: true,
    squares: Array(9).fill("△"),
    onPlay: () => {
      console.log("Square clicked");
    },
  },
};

// Xが勝利した場合
export const XWin = {
  args: {
    xIsNext: true,
    squares: ["X", "X", "X", "O", "O", null, null, null, null],
    onPlay: () => {
      console.log("Square clicked");
    },
  },
};

// Oが勝利した場合
export const OWin = {
  args: {
    xIsNext: true,
    squares: ["O", "O", "O", "X", "X", "X", null, null, null],
    onPlay: () => {
      console.log("Square clicked");
    },
  },
};
