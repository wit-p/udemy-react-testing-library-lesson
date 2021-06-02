import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";

// 各テスト(it)のあとに必ず実行する afterEach()
// テスト間で不具合が起きないようにレンダリングをアンマウントする cleanup()
afterEach(() => cleanup());

describe("レンダリング", () => {
  it("すべての要素を正しく表示する", () => {
    render(<RenderInput />);
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("インプットフォームのonChangeイベント", () => {
  it("入力値を正しく更新する", () => {
    render(<RenderInput />);
    const inputValue = screen.getByPlaceholderText("Enter");
    // 入力フォームの入力内容を指定
    userEvent.type(inputValue, "test");
    // 入力内容が一致するかテストする
    expect(inputValue.value).toBe("test");
  });
});

describe("コンソールボタンが条件付きで起動する", () => {
  it("出力機能をトリガーしてはいけない", () => {
    // ダミーのモック関数 jest.fn()
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    userEvent.click(screen.getByRole("button"));
    // ダミーのモック関数が呼び出されないことを確認するテスト
    expect(outputConsole).not.toHaveBeenCalled();
  });
  it("トリガー出力機能が必要", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText("Enter");
    // 入力フォームの入力内容を指定
    userEvent.type(inputValue, "test");
    userEvent.click(screen.getByRole("button"));
    // ダミーのモック関数が1度だけ呼び出されることを確認するテスト
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
