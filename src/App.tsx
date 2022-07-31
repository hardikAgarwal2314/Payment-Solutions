import React from 'react';
import './App.css';
import TransactionSummary from "./components/transaction_summary/transaction_summary.component";
import PaymentStepperForm from "./components/payment-stepper-form/payment-stepper-form.component";

function App() {
    return (
        <div className="App">
            <TransactionSummary/>
            <PaymentStepperForm/>
        </div>
    );
}

export default App;
