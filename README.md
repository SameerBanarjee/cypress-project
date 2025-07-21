# Automation Anywhere Assignment for SDET Intern
# Project Title : Cypress Automation Framework

This project is all about creating **Cypress test automation framework** using the **Page Object Model (POM)** design pattern.
It includes multiple test scenarios with modular and reusable components for efficient test maintenance and execution.

## 📌 Project Objectives

- ✅ Set up a **POM-based Cypress test framework**
- ✅ Store test data in a **property/config file**
- ✅ Build **reusable functions** (e.g., Login/Logout)
- ✅ Implement **assertions** throughout test flows
- ✅ Generate **Mocha test reports**
- ✅ Implement the following **Use Cases**:
  - **Use Case 1**: Create a message box task and assert bot creation
  - **Use Case 2**: Create a learning instance with user-defined fields.

 
## 🧪 Use Cases
### ✅ Use Case 1: Create Message Box Task
- Navigate to the bot or message creation page
- Create a new message box task
- **Assert** that the bot/task is successfully created

### ✅ Use Case 2: Create Learning Instance with User-defined Fields
- Access the learning module
- Fill in and submit form fields (including custom/user-defined)
- **Assert** learning instance creation confirmation

## 🧾 Test Data
All test data is stored in a **JSON file** (`test-data.json`) and loaded during test execution.
This makes it easier to update credentials, input data, etc., without changing test scripts.


## 📥 Installation & Setup
### Prerequisites
- Node.js installed
- Git installed

## Installation Steps
# Clone the repository
git clone https://github.com/SameerBanarjee/cypress-project.git
cd cypress-project

# Install dependencies
npm install

## 🛡️ Ownership
This project and all its source code, content, and design belong solely to **Sameer Banarjee**.
Unauthorized reproduction, distribution, or use of any part of this project without explicit permission is strictly prohibited.
© 2025 Sameer Banarjee. All rights reserved.
