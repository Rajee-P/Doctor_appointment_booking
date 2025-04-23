import React, { useState, useEffect } from 'react';

const doctors = [
    { name: 'Dr. Priya', specialization: 'Cardiologist', experience: '10 years' },
    { name: 'Dr. Rahul', specialization: 'Dermatologist', experience: '8 years' },
    { name: 'Dr. Anjali', specialization: 'Pediatrician', experience: '5 years' },
    { name: 'Dr. Riya', specialization: 'Cardiologist', experience: '2 years' },
    { name: 'Dr. Prachi', specialization: 'Dentist', experience: '16 years' },
    { name: 'Dr. Lokesh', specialization: 'ENT', experience: '15 years' }
];

const AppointmentForm = () => {
    const [form, setForm] = useState({
        firstName: '', lastName: '', phone: '', email: '',
        doctorName: '', specialization: '', date: '', time: ''
    });

    useEffect(() => {
        const storedDoctor = localStorage.getItem('selectedDoctor');
        if (storedDoctor) {
            const doctor = JSON.parse(storedDoctor);
            setForm(prev => ({
                ...prev,
                doctorName: doctor.name,
                specialization: doctor.specialization
            }));
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const selectedDoctor = doctors.find(doctor => doctor.name === form.doctorName);
        if (!selectedDoctor) {
            alert('The doctor is not found in our list. Please enter a valid doctor name.');
            return;
        }
    
        if (selectedDoctor.specialization !== form.specialization) {
            alert(`The specialization does not match Dr. ${selectedDoctor.name}'s specialization (${selectedDoctor.specialization}). Please correct it.`);
            return;
        }
    
        alert('Appointment booked successfully!');
    };
    

    return (
        <div className="container mb-5">
            <h4 className="text-center mb-3">Book an Appointment</h4>
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                <div className="row g-3">
                    <div className="col-md-6">
                        <input name="firstName" className="form-control" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <input name="lastName" className="form-control" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <input name="phone" className="form-control" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <input name="email" type="email" className="form-control" placeholder="Email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <input name="doctorName" className="form-control" placeholder="Doctor Name" value={form.doctorName} onChange={handleChange} required/>
                    </div>
                    <div className="col-md-6">
                        <input name="specialization" className="form-control" placeholder="Specialization" value={form.specialization}  onChange={handleChange} required/>
                    </div>
                    <div className="col-md-6">
                        <input name="date" type="date" className="form-control" value={form.date} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <input name="time" type="time" className="form-control" value={form.time} onChange={handleChange} required />
                    </div>
                </div>
                <button className="btn btn-primary mt-4 w-100">Submit</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
