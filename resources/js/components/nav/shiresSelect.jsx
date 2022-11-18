import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import React, {Fragment, useState} from "react";
import listShires from "./listShires";
import Moment from 'moment';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ShiresSelect() {
    const [shireData, setShireData] = useState({
        periods: "",
        place: "",
        interval: "",
        showSpinner: false
    });

    const showForecastCounty = async (city) => {
        setShireData({
            ...shireData,
            showSpinner: true
        });
        const dataForecast = await window.axios.get('http://api.aerisapi.com/forecasts?p=' + city + ',uk&client_id=fyEXi55EVq92XIEECz5Rs&client_secret=HSnhfSKoxxn5g7rUwOdjo0v0i0CpsYRyn1zKQXtE')
            .then(function (response) {

                if (response.data && response.data.response) {
                    const responseResult = response.data.response[0];

                    setShireData({
                        periods: responseResult.periods,
                        place: responseResult.place.name,
                        interval: responseResult.interval
                    });
                } else {
                    setShireData({
                        ...shireData,
                        showSpinner: false
                    });
                    alert("Something went wrong. If the problem persists contact the system administrator");
                }

            }).catch(function (err) {
                setShireData({
                    ...shireData,
                    showSpinner: false
                });
                alert("Something went wrong. If the problem persists contact the system administrator");
            });
    }

    return (
        <>
            <Menu as="div" className="relative inline-block text-left overflow-x-scroll">
                <Menu.Button
                    className="inline-flex  justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Select a shire
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                </Menu.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-nonem overflow-x-scroll shire-list">
                        <div className="py-1">
                            {listShires.map((item, itemIdx) =>
                                itemIdx === 0 ? (
                                    <Menu.Item key={itemIdx}>
                                        {({active}) => (
                                            <a
                                                onClick={() => showForecastCounty(item)}
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                {item}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ) : (
                                    <Menu.Item key={itemIdx}>
                                        {({active}) => (
                                            <a
                                                onClick={() => showForecastCounty(item)}
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                {item}
                                            </a>
                                        )}
                                    </Menu.Item>
                                )
                            )}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            <div className="content">
                {shireData.periods.length === 0 ? (
                    <div className="text-center">
                        <h3 className="text-center border-b-2">No shire selected</h3>
                    </div>
                ) : (
                    <div>
                        <h3 className="text-center border-b-2">{shireData.place.toUpperCase()}</h3>
                        {shireData.showSpinner ? (
                            <div role="status" className="text-center margin-spinner">
                                <svg aria-hidden="true"
                                     className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (shireData.periods.length > 0 &&
                            <div className="row">

                                {shireData.periods.map((item, itemIdx) =>
                                    <div className="col" key={itemIdx}>
                                        <p>
                                            <b>{Moment(item.validTime).format('MMM Do, YYYY')}</b>
                                        </p>
                                        <p>
                                            {item.weather}
                                        </p>
                                        <p>
                                            Max {item.maxTempC} &#8451; - Min {item.minTempC} &#8451;
                                        </p>
                                        <p>
                                            Humidity: <br/> Max {item.maxHumidity} - Min {item.minHumidity}
                                        </p>
                                        <p>
                                            Pressure: <br/> MB {item.pressureMB} - IN {item.pressureIN}
                                        </p>
                                        <p>
                                            Wind:
                                            <br/> Direct. {item.windDirDEG}
                                            <br/> Speed
                                            (Mph) {item.windSpeedMPH}
                                        </p>
                                        <img src={"../images/weather_icons/" + item.icon} className="weather-icon" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}


