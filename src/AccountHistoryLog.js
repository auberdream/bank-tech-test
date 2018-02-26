'use strict';

(function(exports) {
  function AccountHistoryLog() {
    this.log = []
  }

  AccountHistoryLog.prototype.storeDebit = function (amount, balance, date = new Date()) {
    this.log.push({date: date, credit: amount, debit: "-", balance: balance})
  };

  AccountHistoryLog.prototype.storeCredit = function (amount, balance, date = new Date()) {
    this.log.push({date: date, credit: "-", debit: amount, balance: balance})
  };

  exports.AccountHistoryLog = AccountHistoryLog
})(this);
