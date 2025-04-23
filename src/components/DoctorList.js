import React from 'react';
import { useNavigate } from 'react-router-dom';

const doctors = [
    { name: 'Dr. Priya', specialization: 'Cardiologist', experience: '10 years' },
    { name: 'Dr. Rahul', specialization: 'Dermatologist', experience: '8 years' },
    { name: 'Dr. Anjali', specialization: 'Pediatrician', experience: '5 years' },
    { name: 'Dr. Riya', specialization: 'Cardiologist', experience: '2 years' },
    { name: 'Dr. Prachi', specialization: 'Dentist', experience: '16 years' },
    { name: 'Dr. Lokesh', specialization: 'ENT', experience: '15 years' }
];

const DoctorList = () => {
    const navigate = useNavigate();

    const handleBookNow = (doctor) => {
        localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
        navigate('/appointment');
    };

    return (
        <div id="doctors" className="container my-5">
            <h3 className="text-center mb-4">Our Doctors</h3>
            <div className="row">
                {doctors.map((doctor, i) => (
                    <div className="col-md-4 mb-4" key={i}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{doctor.name}</h5>
                                <p className="card-text">Specialization: {doctor.specialization}</p>
                                <p className="card-text">Experience: {doctor.experience}</p>
                                <button 
                                    className="btn btn-outline-primary" 
                                    onClick={() => handleBookNow(doctor)}>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorList;
