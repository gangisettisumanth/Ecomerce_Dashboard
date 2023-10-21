import React from 'react'
import "./MainDashboardStyle.css"
import Cards from '../CardBox/Cards'
import Table from "../Table/Table"

const MainDashboard = () => {
    return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <Table/>
    </div>
    )
}

export default MainDashboard
