'use strict';

(function(exports) {
  function AccountHistoryLog() {
    this.log = []
  }

  AccountHistoryLog.prototype.store = function (transaction) {
    this.log.push(transaction)
  };

  exports.AccountHistoryLog = AccountHistoryLog
})(this);
