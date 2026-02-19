# SUVIDHA+

## Smart Urban Civic Services Kiosk

**Project Type:** Government Civic Services Kiosk (Hackathon Prototype)  
**Developed By:** Deepuanshu Maheshwari  

**Hackathon:** SUVIDHA 2026 National Hackathon  
**Organized By:** Centre for Development of Advanced Computing (C-DAC)  
**Under:** Ministry of Electronics & Information Technology (MeitY), Government of India  

---

## Project Overview

SUVIDHA+ is a professional, government-grade digital kiosk application designed to simplify access to essential civic services for Indian citizens. The system provides a centralized, touch-friendly, and multilingual interface to file electricity-related complaints, track complaint status, view consumer connection details, and perform bill payment through a guided demo flow.

The application is conceptualized for deployment in public service kiosks such as municipal offices, electricity board offices, and urban service centers.

---

## Objectives

- To improve accessibility of civic services through a digital kiosk interface  
- To reduce dependency on manual processes for complaint filing and tracking  
- To provide multilingual access for citizens from diverse linguistic backgrounds  
- To demonstrate a scalable model for smart urban governance  

---

## Key Features

### Core Functionality
- Electricity complaint filing with reference ID generation  
- Complaint status tracking using reference ID  
- Bill payment demo flow with OTP verification (simulation)  
- Consumer connection and billing details view  
- Digital receipt generation  

### Multilingual Support
- English  
- Hindi  
- Marathi  

### User Experience
- Professional government-style interface  
- Touch-friendly design suitable for kiosk usage  
- Real-time form validation with error messages  
- Loading indicators and success confirmations  
- Responsive layout for different screen sizes  

### Data Handling
- Client-side storage using browser localStorage  
- No external APIs required for demo data  
- Designed with data privacy considerations  

---

## Pages and Functional Modules

### 1. Home Page
- Government-style header and branding  
- Language selection (English, Hindi, Marathi)  
- Entry point to all available services  

### 2. Service Selection
- Bill Payment  
- File Complaint  
- Connection Details  
- Check Complaint Status  

### 3. Complaint Filing Module
- Citizen name, mobile number, and consumer number input  
- Electricity issue category selection  
- Description field for complaint details  
- Input validation with real-time feedback  
- Auto-generated reference ID for tracking  

### 4. Receipt Page
- Complaint submission confirmation  
- Display of submitted details  
- Reference ID highlighted for future use  
- Option to download receipt (text format)  

### 5. Status Tracking Module
- Search using reference ID  
- Display of complaint details if available  
- User-friendly message if record is not found  

### 6. Bill Payment Module (Demo)
- Display of mock bill details  
- Payment method selection (UPI, Card, Net Banking, Wallet)  
- OTP verification simulation  
- Payment success confirmation  

### 7. Connection Details Module
- Consumer personal information  
- Electricity connection details  
- Billing information  
- Quick action options for bill payment or complaint filing  

---

## Design Philosophy

- Color Scheme inspired by Government of India themes  
  - Dark Blue (#1e3a5f)  
  - Saffron (#ff9933)  
  - White and neutral backgrounds  
- Clean typography and clear visual hierarchy  
- Formal and minimal interface suitable for official use  
- Accessibility-focused layout with large buttons and spacing  

---

## Technology Stack

### Frontend
- React.js  
- JavaScript (ES6+)  
- CSS (custom styling)  

### Backend (Optional / Prototype Extension)
- Node.js  
- Express.js  

### Storage
- Browser localStorage (for prototype data handling)  

---

## Project Structure

SUVIDHA-Project/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Home.jsx
│ │ │ ├── ServiceSelection.jsx
│ │ │ ├── ComplaintForm.jsx
│ │ │ ├── Receipt.jsx
│ │ │ ├── StatusTracking.jsx
│ │ │ ├── BillPayment.jsx
│ │ │ └── ConsumerDetails.jsx
│ │ ├── App.jsx
│ │ ├── App.css
│ │ └── index.css
│ └── public/
└── backend/ (optional)
├── server.js
├── routes/
└── package.json


---

## Installation and Setup

### Prerequisites
- Node.js (v14 or above)
- npm
- Modern web browser

### Frontend Setup

```bash
cd frontend
npm install
npm start
The application will run at:
http://localhost:3000

Backend Setup (Optional)
cd backend
npm install
node server.js
Backend runs at:
http://localhost:5000

Usage Flow
Launch the application

Select preferred language

Choose a service from the service dashboard

Complete the required action (complaint, payment, or status check)

Use reference ID to track complaints

Testing Scenarios
Complaint Filing
Submit a complaint with valid details

Verify reference ID generation

Track complaint using the same reference ID

Bill Payment (Demo)
Select a payment method

Enter demo OTP

Verify payment success screen

Multilingual Validation
Switch language at any point

Verify all labels update correctly

Scalability and Future Enhancements
Integration with real databases (PostgreSQL / MySQL)

Authentication and role-based access

Admin dashboard for government officials

SMS and email notifications

Integration with real payment gateways

Support for additional services (Gas, Water, Municipal)

Offline-first kiosk support

Disclaimer
This project is developed as a hackathon prototype for SUVIDHA 2026.
All data, payments, and OTP flows are simulated for demonstration purposes only.

Credits
Developer: Deepuanshu Maheshwari
Project: SUVIDHA+ – Smart Urban Civic Services Kiosk

This project has been independently designed and developed as part of the SUVIDHA 2026 National Hackathon.