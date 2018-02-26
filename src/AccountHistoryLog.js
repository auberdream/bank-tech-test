'use strict';

(function(exports) {
  function AccountHistoryLog() {
    this.log = []
  }

  AccountHistoryLog.prototype.storeDebit = function (amount, date = new Date(), balance) {
    this.log.push({date: date, credit: amount, debit: "-", balance: balance})
  };

  exports.AccountHistoryLog = AccountHistoryLog
})(this);
