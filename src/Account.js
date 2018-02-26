'use strict';

(function(exports) {
  function Account(accountHistoryLog = new AccountHistoryLog(), accountHistoryPrinter = new AccountHistoryPrinter()) {
    this.balance = INITIAL_BALANCE;
    this.accountHistoryLog = accountHistoryLog;
    this.accountHistoryPrinter = accountHistoryPrinter
  }

  const INITIAL_BALANCE = 0

  Account.prototype.deposit = function (amount) {
    this._increaseBalance(amount)
    this._storeCredit(amount, this.balance)
  };

  Account.prototype.withdraw = function (amount) {
    this._decreaseBalance(amount)
    this._storeDebit(amount, this.balance)
  };

  Account.prototype.statement = function (history = this.accountHistoryLog.log) {
    this.accountHistoryPrinter.print(history)
  };

  // private

  Account.prototype._increaseBalance = function (amount) {
    this.balance += amount;
  };

  Account.prototype._decreaseBalance = function (amount) {
    this.balance -= amount;
  };

  Account.prototype._storeCredit = function (amount, balance) {
    this.accountHistoryLog.storeCredit(amount, balance)
  };

  Account.prototype._storeDebit = function (amount, balance) {
    this.accountHistoryLog.storeDebit(amount, balance)
  };

  exports.Account = Account;
})(this);
