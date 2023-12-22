import { Square } from "../../App";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Tic-Tac-Toe/Square",
  component: Square,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Void = {
  args: {
    value: "",
    onSquareClick: () => {
      console.log("Square clicked");
    },
  },
};

// valueがXの場合
export const X = {
  args: {
    value: "X",
    onSquareClick: () => {
      console.log("Square clicked");
    },
  },
};

// valueがOの場合
export const O = {
  args: {
    value: "O",
    onSquareClick: () => {
      console.log("Square clicked");
    },
  },
};

// valueが△の場合
export const Triangle = {
  args: {
    value: "△",
    onSquareClick: () => {
      console.log("Square clicked");
    },
  },
};

// 課題とは関係ないが、parameters機能を使ってみる
export const CheckParameters = {
  args: {
    value: "",
    onSquareClick: () => {
      console.log("Square clicked");
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
};

// 課題とは関係ないが、actions addonを使ってみる
export const CheckActions = {
  args: {
    value: "",
    onSquareClick: () => {
      console.log("Square clicked");
    },
  },
};
