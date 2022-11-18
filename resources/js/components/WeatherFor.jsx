import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import ShireSelect from './nav/shiresSelect';


export default function WeatherFor() {
    return (
        <>
            <h1 className="text-center">Weather forecast by counties</h1>
            <ShireSelect />
        </>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<WeatherFor />, document.getElementById('app'));
}
