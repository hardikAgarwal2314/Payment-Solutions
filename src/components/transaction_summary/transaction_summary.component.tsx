import React, {useState} from 'react';
import './transaction_summary.component.css';
import {MenuUnfoldOutlined} from '@ant-design/icons';
import Summary from "./summary.component";
import {Drawer} from 'antd';


function TransactionSummary() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>()

    return (
        <div className="summary-container">
            <div className="menuIcon">
                <MenuUnfoldOutlined onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            </div>
            <Summary className="summary"/>

            <Drawer
                onClose={() => setIsMenuOpen(false)}
                visible={isMenuOpen}
                title="Payment Solutions"
                placement="left"
            >
                <div className="drawer-summary-container">
                    <Summary className="drawer-summary"/>
                </div>
            </Drawer>

        </div>
    );
}

export default TransactionSummary;
