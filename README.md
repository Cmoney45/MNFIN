# MNFIN

## Introduction

  MNFIN is my take at creating an ERM system by an accountant for accounting purposes. The intention is to use MongoDB as a backend as most other ERMs use SQL since there are a lot of relationships that go on. However, I think there could be some benefits of MongoDB that could help companies budget / Map their GL. MongoDB usually does better scaling wide, from what I was told, so I think this would be good in the long term. I also just want to test myself to make sure I set up everything necessary / needed. 
  
## Intended Functionality

  MNFIN is intended to have any functionality a company could use. Based on a companies needs or wants, the idea would be to modularize all components of the app to have different pricing based on what a company can use. The following are the intended ideas:
  
  - General Ledger (Use ideas from Workday, Netsuite, Microsoft GP)
    - Accounts Payable
    - Accounts Receivable
    - Banking
    - Reporting
  - Expense Reporting (Use ideas from Concur)
    - Submit / Approve Expense Reports
    - Pay expense Reports
    - Reporting
 - Timesheets
    - Submit / Approve Timesheets
    - Forward timesheets to necessary entity
    - Reporting
 - Payroll (Use ideas from ADP, Workday)
    - Create Employee Database w/ pay setups
    - Add employee based deductions
    - Reporting
 - Tax (Requires General Ledger or Payroll Module) [Maybe include solo in future]
    - Report sales & use tax to states (GL)
    - Report Payroll Taxes to Fed / States (Payroll)
    - Reporting
 
