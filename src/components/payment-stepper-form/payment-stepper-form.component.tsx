import React, {useState} from 'react';
import './payment-stepper-form.component.css';
import Terms from "../terms/terms.component";
import Payment from "../payment/payment.component";
import Invoice from "../invoice/invoice.component";

enum Steps {
    ChooseYourTerms = "ChooseYourTerms",
    YourPayment = "YourPayment",
    InvoicePaid = "InvoicePaid",
}

function PaymentStepperForm() {
    const [currentStep, setCurrentStep] = useState<Steps>(Steps.ChooseYourTerms)

    const handleStepChange = (value:string) => setCurrentStep((value as Steps))

    const mapStepToComponent = () => {
        switch (currentStep) {
            case Steps.ChooseYourTerms:
                return <Terms setCurrentStep={handleStepChange}/>
            case Steps.YourPayment:
                return <Payment setCurrentStep={handleStepChange}/>
            case Steps.InvoicePaid:
                return <Invoice setCurrentStep={handleStepChange}/>
        }
    }

    return (
        <div className="form">
            {mapStepToComponent()}
        </div>
    );
}

export default PaymentStepperForm;
