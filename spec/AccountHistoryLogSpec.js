'use strict';

describe("AccountHistoryLog", function() {
  var accountHistoryLog;

  beforeEach(function() {
    accountHistoryLog = new AccountHistoryLog();
  });

  describe("storeDebit", function() {

    it("pushes the debit into the initialized empty array", function() {
      accountHistoryLog.storeDebit(100, 100, "11-01-18");
      expect(accountHistoryLog.log).toEqual([{date: "11-01-18", credit: 100, debit: "-", balance: 100}])
    });

  });

  describe("storeCredit", function() {

    it("pushes the credit into the initialized empty array", function() {
      accountHistoryLog.storeCredit(100, 100, "11-01-18");
      expect(accountHistoryLog.log).toEqual([{date: "11-01-18", credit: "-", debit: 100, balance: 100}]);
    });

  });

});
