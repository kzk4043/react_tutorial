describe("react tutorial", () => {
  // 交互にマスを選択して、片方のプレイヤーがゲームに勝利した状態を再現
  // 勝者が決まった時に、勝利メッセージ「"Winner: X"」が表示される
  it("winner message", () => {
    cy.visit("http://localhost:3000");
    cy.get(".board-row").eq(0).find(".square").eq(0).click();
    cy.get(".board-row").eq(0).find(".square").eq(1).click();
    cy.get(".board-row").eq(1).find(".square").eq(0).click();
    cy.get(".board-row").eq(0).find(".square").eq(2).click();
    cy.get(".board-row").eq(2).find(".square").eq(0).click();
    cy.contains("Winner: X");
  });
  // 引き分けの時は「Draw!」と表示される
  // 引き分けなので、勝利メッセージが表示されないことを確認
  it("draw message", () => {
    cy.visit("http://localhost:3000");
    cy.get(".board-row").eq(0).find(".square").eq(0).click();
    cy.get(".board-row").eq(0).find(".square").eq(1).click();
    cy.get(".board-row").eq(0).find(".square").eq(2).click();
    cy.get(".board-row").eq(1).find(".square").eq(0).click();
    cy.get(".board-row").eq(1).find(".square").eq(2).click();
    cy.get(".board-row").eq(1).find(".square").eq(1).click();
    cy.get(".board-row").eq(2).find(".square").eq(0).click();
    cy.get(".board-row").eq(2).find(".square").eq(2).click();
    cy.get(".board-row").eq(2).find(".square").eq(1).click();
    cy.contains("Draw!");
    cy.get(".status").should("not.contain", "Winner");
  });
  // すべてのマスが埋まっている状態で、Xが勝利した時に「Winner: X」が表示される
  it("all squares filled", () => {
    cy.visit("http://localhost:3000");
    cy.get(".board-row").eq(0).find(".square").eq(0).click();
    cy.get(".board-row").eq(0).find(".square").eq(1).click();
    cy.get(".board-row").eq(0).find(".square").eq(2).click();
    cy.get(".board-row").eq(1).find(".square").eq(0).click();
    cy.get(".board-row").eq(1).find(".square").eq(1).click();
    cy.get(".board-row").eq(1).find(".square").eq(2).click();
    cy.get(".board-row").eq(2).find(".square").eq(1).click();
    cy.get(".board-row").eq(2).find(".square").eq(0).click();
    cy.get(".board-row").eq(2).find(".square").eq(2).click();
    cy.contains("Winner: X");
    cy.get(".status").should("not.contain", "Draw!");
  });
});
