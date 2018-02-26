'use strict';

describe("AccountHistoryPrinter", function () {
  var accountHistoryPrinter;

  beforeEach(function() {
    accountHistoryPrinter = new AccountHistoryPrinter();
    spyOn(console, 'log');
  });

  describe('print', function () {
    it("prints the header to the statement", function () {
      accountHistoryPrinter.print([{date: "Feb 26 2018 17:26:44", credit: "-", debit: 100, balance: 100}]);
      expect(console.log).toHaveBeenCalledWith("__________________________________________")
      expect(console.log).toHaveBeenCalledWith("|  Date  |  Credit  |  Debit  |  Balance  |")
      expect(console.log).toHaveBeenCalledWith("------------------------------------------")
    });

    it("prints the history to the statement", function() {
      accountHistoryPrinter.print([{date: "Feb 26 2018 17:26:44", credit: "-", debit: 100, balance: 100}, {date: "Feb 26 2018 17:26:44", credit: "-", debit: 100, balance: 100}]);
      expect(console.log).toHaveBeenCalledWith("|Feb 26 2018 17:26:44| - | 100 | 100 |")
    });
  });
});
