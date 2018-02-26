'use strict';

describe("AccountHistoryLog", function() {
  var accountHistoryLog;

  beforeEach(function() {
    accountHistoryLog = new AccountHistoryLog();
  });

  describe("store", function() {

    it("pushes the argument into the initialized empty array", function() {
      var transaction = {date: "01-01-01", credit: 1000, debit: "-", balance: 1500}
      accountHistoryLog.store(transaction);
      expect(accountHistoryLog.log).toEqual([transaction])
    });

  });

});
