import React from 'react';
import './invoice.component.css';
import {Button,} from 'antd';
import {CheckOutlined} from '@ant-design/icons';


interface InvoiceProps {
    setCurrentStep: (value: string) => void;
}


const Invoice: React.FC<InvoiceProps> = ({setCurrentStep}) => {

    return (
        <div className="sectionContainer">
            <div className="invoiceHeading">
                <div className="checkIconContainer">
                    <CheckOutlined className="checkIcon"/>
                </div>

                <div>Invoice Paid</div>
            </div>

            <div className="information">
                The invoice from <b>Lufthansa</b> for the amount of <b>€43271.02</b> was paid on <b>01/06/2021.</b>
            </div>


            <Button
                shape="round"
                className="sectionSubmitButton"
                type="primary"
                onClick={() => setCurrentStep("ChooseYourTerms")}
            >
                Return to Marketplace
            </Button>

        </div>
    );
}

export default Invoice;
