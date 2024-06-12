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
  // Cypress Studioで記録したテスト
  it("cypres studio", () => {
    cy.visit("http://localhost:3000");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.game-board > :nth-child(2) > :nth-child(1)').click();
    cy.get(':nth-child(3) > :nth-child(1)').click();
    cy.get(':nth-child(3) > :nth-child(2)').click();
    cy.get(':nth-child(4) > :nth-child(3)').click();
    cy.get(':nth-child(4) > :nth-child(2)').click();
    cy.get(':nth-child(2) > :nth-child(2)').click();
    cy.get(':nth-child(2) > :nth-child(3)').click();
    cy.get(':nth-child(3) > :nth-child(3)').click();
    cy.get('.game-board > :nth-child(4) > :nth-child(1)').click();
    cy.get('.status').should('have.text', 'Winner: X');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Cypress Studio2', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000');
    cy.get(':nth-child(3) > :nth-child(1)').click();
    cy.get(':nth-child(2) > :nth-child(3)').click();
    cy.get(':nth-child(3) > :nth-child(3)').click();
    cy.get(':nth-child(3) > :nth-child(2)').click();
    cy.get(':nth-child(4) > :nth-child(2)').click();
    cy.get(':nth-child(1) > button').click();
    cy.get('.game-board > :nth-child(2) > :nth-child(2)').click();
    cy.get(':nth-child(3) > :nth-child(2)').click();
    cy.get(':nth-child(4) > :nth-child(2)').click();
    cy.get('.game-board > :nth-child(3) > :nth-child(1)').click();
    cy.get('.game-board > :nth-child(2) > :nth-child(1)').click();
    cy.get(':nth-child(3) > :nth-child(3)').click();
    cy.get('.status').click();
    cy.get('.status').should('have.text', 'Winner: O');
    /* ==== End Cypress Studio ==== */
  });
});
