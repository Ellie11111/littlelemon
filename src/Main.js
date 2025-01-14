import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

const fetchAPI = function(date) {
    let result = [];
    for (let i = 17; i <= 22; i++) {
        result.push(`${i}:00`);
        if (i !== 22) {
            result.push(`${i}:30`);
        }
    }
    console.log('Available times:', result);
    return result;
};

const submitAPI = function(formData) {
    console.log('Submitted form data:', formData);
    return true;
};

const Main = () => {
    const [availableTimes, setAvailableTimes] = React.useState(fetchAPI(new Date()));
    const navigate = useNavigate();

    function SubmitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return (
        <main >
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<BookingForm availableTimes={availableTimes} SubmitForm={SubmitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;