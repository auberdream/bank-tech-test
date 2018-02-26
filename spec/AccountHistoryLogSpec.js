'use strict';

describe("AccountHistoryLog", function() {
  var accountHistoryLog;

  beforeEach(function() {
    accountHistoryLog = new AccountHistoryLog();
  });

  describe("storeDebit", function() {

    it("pushes the transaction into an initialized empty array", function() {
      accountHistoryLog.storeDebit(100, "11-01-18", 100);
      expect(accountHistoryLog.log).toEqual([{date: "11-01-18", credit: 100, debit: "-", balance: 100}])
    });

  });

});
