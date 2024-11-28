# dMoney REST API Testing Project

## Project Overview
This project involves testing the **dMoney REST API** to validate its functionalities, identify issues and provide suggestions for improvement. The testing focuses on creating, managing and handling transactions between various user roles like(Admin,System User,Agent,Customers,Merchant).

---

## Tasks and Deliverables

### 1. **Test Cases**
Created **test cases** for the following scenarios:
- Admin creates an Agent, 2 Customers, and a Merchant.
- System deposits money to the Agent.
- Agent deposits money to a Customer.
- Check Agent's balance.
- Send money between Customers.
- Customer withdraws money to the Agent.
- Check Customer's balance and transaction statement.
- Customer makes a payment to a Merchant.
- Check balances and transaction statements for Customers and the Merchant.

Find the test cases [here](./test-cases/dmoney-test-cases.xlsx).

---

### 2. **Postman Collection**
- Created a Postman collection for all the scenarios.
- Added **negative test cases** for validation and error handling.
- Endpoints Used:
  - [User API](https://dmoney.roadtocareer.net/api-docs/user)
  - [Transaction API](https://dmoney.roadtocareer.net/api-docs/transaction)


Postman collection: [Download](https://documenter.getpostman.com/view/37278328/2sAYBXAWBM).

---

### 3. **Newman Report**
- Generated a report of all test cases using Newman.
- Included summary screenshots of the execution.

View the Newman report screenshots below:
![Newman Report 1](./screenshots/newman-report-1.png)  
![Newman Report 2](./screenshots/newman-report-2.png)

---

### 4. **Postman Documentation**
Postman documentation for the test cases and endpoints is available online:  
[View Postman Documentation](https://documenter.getpostman.com/view/documentation-link).

---

### 5. **Issue Report**
Reported **issues or improvements** in a Google Sheet, with details such as:
- Issue Type (Bug/Improvement)
- Issue Title
- Description and Steps to Reproduce
- Actual vs Expected Results
- Priority and Severity
- Attachments with screenshots

Access the issue report [here](https://docs.google.com/spreadsheets/d/issue-report-link).

---

