import React, {useState} from 'react';
import './payment.component.css';
import {Input, Tag, Button, Select, DatePicker, Tooltip} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';


const {Option} = Select;

interface PaymentProps {
    setCurrentStep: (value: string) => void;
}


const Payment: React.FC<PaymentProps> = ({setCurrentStep}) => {
    const tags = ["Bank transfer", "Pay by Bank", "Credit Card", "IDEAL"]
    const [selectedTag, setSelectedTag] = useState<string>(tags[0])

    return (
        <div className="sectionContainer">
            <div className="sectionContainerHeading">Your Payment</div>

            <div className="flex">
                <div className="infoContainer">
                    <span className="light">Net Term</span>
                    <span className="bold"> 30 days</span>
                </div>
                <div className="infoContainer">
                    <span className="light">Due Date</span>
                    <span className="bold"> 20/05/2021 </span>
                </div>
            </div>

            <div className="line"/>

            <div className="sectionContainerHeading">Your Payment</div>

            <div className="mr10 tags">
                {tags.map(tag => (
                    <Tag
                        key={tag}
                        className={selectedTag === tag ? "tag selectedTag" : "tag"}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </Tag>
                ))}
            </div>

            <div className="mr10 flex">
                <div className="labelledDiv">
                    <div>
                        <label className="inputLabels">Label</label>
                        <Input className="labelledInputs"/>
                    </div>
                    <div className="pt5">
                        <label className="inputLabels">Label</label>
                        <Input className="labelledInputs"/>
                    </div>
                </div>

                <div >
                    <div className="flex">
                        <div className="flexCol w50">
                            <label className="inputLabels">Label</label>
                            <DatePicker placeholder="" className="datePicker"/>
                        </div>
                        <div className="flexCol w50">
                            <label className="inputLabels">Label</label>
                            <Input
                                className="labelledInputs"
                                suffix={
                                    <Tooltip title="Extra information">
                                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                    </Tooltip>
                                }
                            />
                        </div>
                    </div>
                    <div className="pt5 flexCol">
                        <label className="inputLabels">Label</label>
                        <Select className="labelledInputs m0"
                                defaultValue="NetherLands">
                            <Option value="NetherLands">NetherLands</Option>
                            <Option value="India">India</Option>
                            <Option value="San-francisco">San-francisco</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <Button
                shape="round"
                className="sectionSubmitButton"
                type="primary"
                onClick={() => setCurrentStep("InvoicePaid")}
            >
                Confirm Payment
            </Button>

        </div>
    );
}

export default Payment;
