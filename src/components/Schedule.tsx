import PushButton from '@/components/PushButton';
import { IEvent } from '@/interfaces/IEvent';
import { Events } from '@/lib/Events';
import styles from '@/styles/components/Schedule.module.css';
import { useEffect, useState } from 'react';

const Schedule = () => {
	const [selected, setSelected] = useState<string>('Friday');
	const [currData, setCurrData] = useState<IEvent[]>([]);
	const [page, setPage] = useState<number>(0);
	const eventsPerPage = 4;

	useEffect(() => {
		setCurrData([...Events.filter((obj) => obj.day === selected)]);
	}, [selected]);

	const toggle = (day: string) => {
		if (selected != day) {
			setSelected(day);
			setPage(0);
			setCurrData([...Events.filter((obj) => obj.day === day)]);
		}
	};

	const forwardPage = () => setPage(page + 1);
	const backPage = () => setPage(page - 1);

	return (
		<div className={styles.App}>
			<p className={styles.header}>Schedule</p>
			<div className={styles.row}>
				{['Friday', 'Saturday', 'Sunday'].map((day) => (
					<PushButton key={day} variant={selected === day ? 'secondary' : 'primary'} size='lg' onClick={() => toggle(day)} text={day}></PushButton>
				))}
			</div>
			{currData.slice(page * eventsPerPage, (page + 1) * eventsPerPage).map((obj) => (
				<div key={`${obj.day}-${obj.event}-${obj.time}`} className={styles.eventContainer}>
					<div className={styles.column}>
						<p>{obj.event}</p>
						<p>{obj.time}</p>
					</div>
					<div className={styles.column}>
						<p className={styles.rightText}>{obj.location}</p>
					</div>
				</div>
			))}
			<button className={styles.pageNavButton} style={{ right: 0 }} disabled={(page + 1) * eventsPerPage >= currData.length} onClick={forwardPage}>
				{'>'}
			</button>
			<button className={styles.pageNavButton} style={{ left: 0 }} disabled={page === 0} onClick={backPage}>
				{'<'}
			</button>
		</div>
	);
};

export default Schedule;
