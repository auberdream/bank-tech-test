'use strict';

(function(exports) {
  function AccountHistoryPrinter() {}

  AccountHistoryPrinter.prototype.print = function (history) {
    this._printHeader();
    this._printHistory(history);
  };

  AccountHistoryPrinter.prototype._printHeader = function () {
    console.log("__________________________________________")
    console.log("|  Date  |  Credit  |  Debit  |  Balance  |")
    console.log("------------------------------------------")
  }

  AccountHistoryPrinter.prototype._printHistory = function(history) {
    history.forEach(function(transaction) {
      console.log(`|${transaction.date}| ${transaction.credit} | ${transaction.debit} | ${transaction.balance} |`)
    });
  };

  exports.AccountHistoryPrinter = AccountHistoryPrinter

})(this);
