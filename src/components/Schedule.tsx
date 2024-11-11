import { IEvent } from '@/interfaces/IEvent';
import { Events } from '@/lib/Events';
import styles from '@/styles/components/Schedule.module.css';
import { useState, useEffect } from 'react';
import PushButton from '@/components/PushButton';

const Schedule = () => {
	const [selected, setSelected] = useState<string>('Friday');
	const [currData, setCurrData] = useState<IEvent[]>([]);

	useEffect(() => {
		setCurrData([...Events.filter((obj) => obj.day === selected)]);
	}, [selected]);

	const toggle = (day: string) => {
		if (selected != day) {
			setSelected(day);
			setCurrData([...Events.filter((obj) => obj.day === day)]);
		}
	};
	return (
		<div className={styles.App}>
      <p className={styles.header}>Schedule</p>
			<div className={styles.row}>
				{['Friday', 'Saturday', 'Sunday'].map((day) => (
          <PushButton
            variant={selected === day ? 'secondary' : 'primary'}
            size='lg'
            onClick={() => toggle(day)}
            text={day}
          ></PushButton>
				))}
			</div>
			{currData.map((obj) => (
				<div key={`${obj.day}-${obj.event}-${obj.time}`} className={styles.eventContainer}>
					<div className={styles.column}>
						<p className={styles.event}>{obj.event}</p>
						<p className={styles.time}>{obj.time}</p>
					</div>
					<div className={styles.column}>
						<p className={styles.location}>{obj.location}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Schedule;
