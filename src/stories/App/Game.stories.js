import Game from "../../App";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Tic-Tac-Toe/Game",
  component: Game,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// Gameの初期状態
export const Initial = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const squares = canvas.getAllByRole("button");
    await userEvent.click(squares[0]);
    await userEvent.click(squares[1]);
    await userEvent.click(squares[2]);
    await userEvent.click(squares[3]);
    await userEvent.click(squares[4]);
    await userEvent.click(squares[5]);
    await userEvent.click(squares[6]);

    // 👇 Assert DOM structure
    await expect(canvas.getByText("Winner: X")).toBeInTheDocument();
  },
};
