import React from 'react';
import { motion } from 'motion/react';
import Sidebar from '../component/Sidebar.jsx';
import Topbar from '../component/Topbar.jsx';
import { RevenueCard, UserStatsBar } from '../component/StatsCard.jsx';
import ChartsPanel, { PlatformValueChart } from '../component/ChartsPanel.jsx';
import ReportsPanel, { TopbarTitle } from '../component/ReportsPanel.jsx';
import '../component/dashboard.css';

export default function Dashboard(){
	return (
		<div className="dashboard-app">
			<Sidebar />
			<main className="main">
				<Topbar />
				<TopbarTitle />

				{/* Stats Row - Full Width */}
				<div className="stats-row">
					<RevenueCard />
				</div>

				{/* User Stats Bar - Below Revenue */}
				<UserStatsBar />

				{/* Main Content Grid - Charts Left, Reports Right */}
				<section className="content-grid two-column">
					<div className="left-column">
						{/* Charts Row */}
						<ChartsPanel />

						{/* Platform Value Chart */}
						<PlatformValueChart />
					</div>

					<div className="right-column">
						<ReportsPanel />
					</div>
				</section>
			</main>
		</div>
	)
}
