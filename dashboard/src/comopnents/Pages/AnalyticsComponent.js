import React, { useState } from 'react';
import '../../card/CardStyle.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';
import "../../CardBox/Cards.css";
import { UilClipboardAlt, UilUsdSquare, UilMoneyWithdrawal } from '@iconscout/react-unicons';
import ResponsiveAppBar from '../NavbarComponent'; 
import CustomerReview from '../../CustomerReview/CustomerReview';

const AnalyticsComponent = () => {
    const cardsData = [
        {
        title: 'Sales',
        color: {
            backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        barValue: 70,
        value: '25,970',
        Png: UilUsdSquare, 
        series: [
            {
            name: 'Sales',
            data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
        },
        {
        title: 'Revenue',
        color: {
            backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
            boxShadow: '0px 10px 20px 0px #FDC0C7',
        },
        barValue: 80,
        value: '14,270',
        Png: UilMoneyWithdrawal, 
        series: [
            {
            name: 'Revenue',
            data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
        },
        {
        title: 'Expenses',
        color: {
            backGround: 'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
            boxShadow: '0px 10px 20px 0px #F9D59B',
        },
        barValue: 60,
        value: '4,270',
        Png: UilClipboardAlt, 
        series: [
            {
            name: 'Expenses',
            data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
        },
    ];



    return (
        <div>
            <ResponsiveAppBar />
            <div className="Cards" style={{margin:"20px"}}>
                {cardsData.map((card, id) => {
                    return (
                        <div className="parentContainer" key={id}>
                            <Card
                                title={card.title}
                                color={card.color}
                                barValue={card.barValue}
                                value={card.value}
                                Png={card.Png}
                                series={card.series}
                            />
                        </div>
                    );
                })}
            </div>
                <div style={{width:"500px" ,height:"500px",position:"absolute",left:"30%", margin:"25px"}}>
                    <h1>Customer Review</h1>
                    <CustomerReview/ >
                </div>
        </div>
    );
};

export default AnalyticsComponent;

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            {expanded ? (
                <ExpandedCard param={props} toggleExpanded={toggleExpanded} />
            ) : (
                <CompactCard param={props} toggleExpanded={toggleExpanded} />
            )}
        </div>
    );

    // Compact Card
    function CompactCard({ param, toggleExpanded }) {
        const Png = param.Png;
    return (
        <motion.div
        className="CompactCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }}
        layout
        onClick={toggleExpanded}
        >
        <div className="radialBar">
            <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
            />
            <span>{param.title}</span>
        </div>
        <div className="detail">
            <Png/>
            <span>${param.value}</span>
            <span>Last 24 hours</span>
        </div>
        </motion.div>
    );
    
    }

    // Expanded Card
    function ExpandedCard({ param, toggleExpanded }) {
    const data = {
        options: {
        chart: {
            type: 'area',
            height: 'auto',
        },
        },
    };

    return (
        <motion.div
        className="ExpandedCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }}
        layout
        >
        <div style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }}>
            <UilTimes onClick={toggleExpanded} />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
            <Chart options={data.options} series={param.series} type="area" />
        </div>
        <span>Last 24 hours</span>
        </motion.div>
    );
}


}
