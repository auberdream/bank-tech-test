# Bank Tech Test

### What is this?

This is a tech-test simulation of a bank account in which you can make withdrawals and deposits, and also print your transaction history.

The requirements included
* Interacting with the code via the console
* Including deposits and withdrawals
* Being able to produce an account statement
* Data can be kept in memory and didn't need to be stored in a database

### How to use

```
-> Clone this repo
-> Load up specrunner in your browser
-> Open up the console
-> Deposit all the money
```

### Approach

I started by creating the user stories (below!), and then separated the concerns of the brief into three classes; the account, account history, and the account history printer. Using those three classes I then diagrammed their responsibilities and various functions.

I broke the brief down into 10 issues, and broke those down further by strictly adhering to a TDD approach; making sure that each test was small enough to be passed within 20-30mins in order to keep myself focused and productive.

### Things I'd like to do

Format that time stamp!

### User Stories

```
As a user
So that I can save for special luxuries
I'd like to be able to make a deposit to my account.

As a user
So that I can buy goods and services
I'd like to be able to withdraw money from my account.

As a financially-aware user
So that I can keep track of my finances
I'd like to be able to see my account balance.

As a financially-aware user
So that I can keep track of my finances
I'd like to be able to see a list of my financial history.

As a financially-aware user
So that I can gain more information from my bank statement
I'd like it to show the dates of any transactions, whether it was a credit or a debit, and the balance after the transaction.

As a big-spender
So that I don't become overdrawn
I'd like to have my withdrawal denied if it would cause my balance to fall below 0.

```
