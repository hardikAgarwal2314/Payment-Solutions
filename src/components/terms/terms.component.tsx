import React, {useState} from 'react';
import './terms.component.css';
import {ArrowRightOutlined} from "@ant-design/icons";
import {Button} from "antd";

interface TermsToChoose {
    id: number;
    label: string;
    value: string
}


interface TermsProps {
    setCurrentStep: (value:string) => void;
}


const Terms: React.FC<TermsProps> = ({setCurrentStep}) => {
    const availableTerms: TermsToChoose[] = [
        {
            id: 1,
            label: "1 payments",
            value: "€43271.02",
        },
        {
            id: 2,
            label: "2 payments",
            value: "€21635.51",
        },
        {
            id: 3,
            label: "3 payments",
            value: "€1442367",
        },
    ]

    const [selectedTerm, setSelectedTerm] = useState<TermsToChoose>()

    return (
        <div className="sectionContainer">
            <div className="sectionContainerHeading">Choose Your Terms</div>
            {availableTerms.map(term => {
                return (
                    <div
                        onClick={() => setSelectedTerm(term)}
                        className="selectTerms">
                        <div className="flex">
                            <div className={selectedTerm?.id !== term.id ? "radioButton" : "selectedTerm"}/>
                            <div>{term.label}</div>
                        </div>
                        <div>
                            {term.value}
                        </div>

                    </div>
                )
            })}
            <Button
                shape="round"
                className="sectionSubmitButton"
                disabled={!selectedTerm}
                type="primary"
                onClick={() => setCurrentStep("YourPayment")}
                icon={<ArrowRightOutlined/>}>
                Continue
            </Button>

        </div>
    );
}

export default Terms;
