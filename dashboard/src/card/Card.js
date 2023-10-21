import React, { useState } from 'react';
import './CardStyle.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';

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
    };

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

export default Card;
