# Dmoney REST API Testing Project

## Project Overview
This project involves testing the **Dmoney REST API** to validate its functionalities, identify issues and provide suggestions for improvement. The testing focuses on creating, managing and handling transactions between various user roles like(Admin,System User,Agent,Customers,Merchant).

---
## Tools and Technology
- Postman
- Newman
- Nodejs
- VSCode
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

**The test cases are:** [Click Here to see the Test Cases](https://docs.google.com/spreadsheets/d/1ie_j_CTSMxg_QjAT1q4TclJ8GnCKnBPx/edit?usp=sharing&ouid=105207321304680998857&rtpof=true&sd=true).

---

### 2. **Postman Collection**
- Created a Postman collection for all the scenarios.
- Added **negative test cases** for validation and error handling.
- Endpoints Used:
  - [User API](https://dmoney.roadtocareer.net/api-docs/user)
  - [Transaction API](https://dmoney.roadtocareer.net/api-docs/transaction)


**Postman collection:** [Click Here to see the Postman API Documentation](https://documenter.getpostman.com/view/37278328/2sAYBXAWBM).

---

### 3. **Newman Report**
- Generated a report of all test cases using Newman.
- Included summary screenshots of the execution.

View the Newman report screenshots below:
![report 1](https://github.com/user-attachments/assets/5bdc4e61-e88d-4e4c-bcf3-d158ad43455d
)
-
![report 2](https://github.com/user-attachments/assets/eba131fb-7a8b-42f6-8fb2-54b8da9ae432
)
-

---

### 4. **Postman Documentation**
Postman documentation for the test cases and endpoints is available:  
[Click here to view Postman Documentation](https://documenter.getpostman.com/view/37278328/2sAYBXAWBM).

---

### 5. **Bug Report**
Reported **Bug or Improvements** in a Google Sheet, with details such as:
- Issue Type (Bug/Improvement)
- Issue Title
- Description and Steps to Reproduce
- Actual vs Expected Results
- Priority and Severity
- Attachments with screenshots

**To see the bug report:** [Click here to view Bug Report](https://docs.google.com/spreadsheets/d/1pWl7CV-sUy3FvbPGRyb3kgWZWnWqDp0Z/edit?usp=sharing&ouid=105207321304680998857&rtpof=true&sd=true).

---
## Follow these instructions to set up and run the project locally.

This project is designed to test the Dmoney REST API using JavaScript. It utilizes Node.js to run the test scripts and I provide a step-by-step guide for anyone to clone and run the project on their machine.





### Prerequisites

Ensure you have the following installed on your machine:  
- [Node.js](https://nodejs.org/) (version 14.x or later)  
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**  
   Open your terminal and run:  
   `git clone https://github.com/niloycsejnu/Dmoney-REST-API-Testing.git`

2. **Navigate to the Project Directory**  
   Change your working directory to the cloned repository:  
   `cd Dmoney-REST-API-Testing`

3. **Install Dependencies**  
   Install the required dependencies using npm:  
   `npm install`

### Running the Project

Run the `Report.js` script using Node.js in the terminal:  
`npx newman run "copy & paste published collection link without inverted comma"`
Then 
`node Report.js`

### Expected Output

The script will run tests against the Dmoney REST API and display the results in the terminal.


## Contact

For any questions or issues, feel free to open an issue in the repository or contact me via [GitHub](https://github.com/niloycsejnu) or [Email](niloydatta0011@gmail.com)


