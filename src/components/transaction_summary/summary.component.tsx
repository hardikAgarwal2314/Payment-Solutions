import React from 'react';
import './transaction_summary.component.css';
import {Button} from 'antd';
import {MailOutlined, PhoneOutlined, DownloadOutlined} from '@ant-design/icons';


interface field {
    id: number;
    heading: string;
    value: string;
    action?: any;
}

interface SummaryProps {
    className:string
}

const Summary: React.FC<SummaryProps> = ({className}) => {
    const fields: field[] = [
        {
            id: 1,
            heading: "Transaction Summary",
            value: "",

        },
        {
            id: 2,
            heading: "Amount",
            value: "€430.02",
            action: <Button className="openButton" type="primary" shape="round">Open</Button>

        },
        {
            id: 3,
            heading: "Recipient",
            value: "Corp.co",
            action: <span>
                <MailOutlined className="ctaIcons"/>
                <PhoneOutlined className="ctaIcons"/>
            </span>

        },
        {
            id: 4,
            heading: "Invoice number",
            value: "#2021-95674",

        },
        {
            id: 5,
            heading: "PO number",
            value: "8917341920",

        },
    ]

    return (
        <div className={className}>
            {fields.map(field => {
                return (
                    <div key={field.id}>
                        <div className="heading">{field.heading}</div>
                        <div className="values">{field.value} {field.action}</div>
                    </div>
                )
            })}

            <Button shape="round" className="downloadInvoiceButton" type="primary" icon={<DownloadOutlined/>}>
                Invoice
            </Button>

            <div className="disputeContainer">
                <div>Do you dispute this <br/> transaction?</div>
                <Button shape="round" className="openDisputeButton" type="primary">
                    Open a dispute
                </Button>
            </div>

        </div>
    );
}

export default Summary;
