import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import FrameworkList from "./FrameworkList";

afterEach(() => cleanup());

describe("propを使ったリストのレンダリング", () => {
  it("データがないときは「No data !」と表示してください。", () => {
    render(<FrameworkList />);
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });
  it("リストアイテムを正しく表示する。", () => {
    // テスト用ダミーデータ
    const dummyData = [
      { id: 1, item: "React dummy" },
      { id: 2, item: "Angular dummy" },
      { id: 3, item: "Vue dummy" },
    ];
    // propsにダミーデータを渡す
    render(<FrameworkList frameworks={dummyData} />);
    // レンダリングされた表示を取得してテキスト要素だけを抽出して配列に格納
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent);
    // ダミーデータをmapで展開して比較用に配列に格納
    const dummyItems = dummyData.map((ele) => ele.item);
    // レンダリングされたデータとダミーデータを比較する
    expect(frameworkItems).toEqual(dummyItems);
    // 「No data !」が表示されていないことを確認する
    expect(screen.queryByText("No data !")).toBeNull();
  });
});
