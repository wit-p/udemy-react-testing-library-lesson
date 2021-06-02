import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

// describe("好きなタイトル", ()=>{処理})
describe("レンダリング", () => {
  // るすべての要素が正しく表示されていかテストする
  it("Should render all the elements correctly", () => {
    // Renderコンポーネントを取得する
    render(<Render />);
    // html構造を取得してterminalに表示する
    // screen.debug();

    // 各roleの一覧　https://github.com/A11yance/aria-query#elements-to-roles
    // 任意の要素を取得してterminalに表示する
    screen.debug(screen.getByRole("heading"));

    // Jestの機能　https://jestjs.io/docs/en/expect
    // 判定 expect(判定すに任意の要素).toBeTruthy();
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    // すべてのボタンを取得する 要素は配列で返された為、要素番号を指定する
    expect(screen.getAllByRole("button")[0]);
    expect(screen.getAllByRole("button")[1]);
    expect(screen.getByText("Udemy")).toBeTruthy();
    // 要素のidをテスト
    expect(screen.getByTestId("copyright")).toBeTruthy();

    // 無いことの証明
    expect(screen.queryByText("Udeeeemy")).toBeNull();
  });
});
