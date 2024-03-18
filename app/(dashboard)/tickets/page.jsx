import { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';

export const metadata = {
	title: 'Dojo Helpdesk - Tickets',
};

function Tickets() {
	return (
		<main>
			<nav>
				<div>
					<h2>Tickets</h2>
					<p>
						<small>Current open tickets</small>
					</p>
				</div>
			</nav>
			<Suspense fallback={<Loading />}>
				<TicketList />
			</Suspense>
		</main>
	);
}

export default Tickets;
