import { render, screen } from "@testing-library/react";
import Todo from "./Todo";
import { vi } from "vitest";

test("renders todo", () => {
  const todo = {
    text: "Test to-do",
    done: false,
  };

  render(
    <Todo todo={todo} onClickComplete={vi.fn()} onClickDelete={vi.fn()} />
  );

  const element = screen.getByText("Test to-do");
  expect(element).toBeDefined();
});
