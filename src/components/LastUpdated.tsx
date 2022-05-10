import { useEffect, useState } from 'react';
import * as timeago from 'timeago.js';
// eslint-disable-next-line spaced-comment
//@ts-ignore
import raw from '../build_time.txt';
import CircularProgress from '@mui/material/CircularProgress';

export const LastUpdated = (): JSX.Element => {
    const [date, setDate] = useState('');

    const setBuildTime = async () => {
        const response = await fetch(raw);
        setDate(await response.text());
    };

    useEffect(() => {
        setBuildTime();
    }, []);

    return (
        <h4>
            {!date && <CircularProgress size={30} />}
            {date && `Data updated ${timeago.format(new Date(Number(date) * 1000))}`}
        </h4>
    );
};
