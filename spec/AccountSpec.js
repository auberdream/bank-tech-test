'use strict';

describe("Account", function() {
  var account;

  beforeEach(function() {
      account = new Account();
  });

  it("has an initial balance of 0", function() {
    expect(account.balance).toEqual(0);
  });

  describe("Deposit", function() {

    it("increases the account balance by the amount specified", function() {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });

  });

  describe("Withdraw", function() {

    it("decreases the account balance by the amount specified", function() {
      account.deposit(100);
      account.withdraw(20);
      expect(account.balance).toEqual(80);
    });

  });

});
