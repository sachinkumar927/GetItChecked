import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountManagement = () => {
    const navigate = useNavigate();

    return (
        <section>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Account Management
                    </li>
                </ol>
            </nav>
            <div className="container py-3 bg-light">
                <h2 className="text-center mb-4 text-success">Account Management</h2>

                <div className="row g-4">
                    <div className="col-md-4">
                        <button
                            className="btn btn-primary w-100"
                            onClick={() => navigate('/student-accounts')}
                        >
                            Manage Student Accounts
                        </button>
                    </div>

                    <div className="col-md-4">
                        <button
                            className="btn btn-secondary w-100"
                            onClick={() => navigate('/faculty-accounts')}
                        >
                            Manage Faculty Accounts
                        </button>
                    </div>

                    <div className="col-md-4">
                        <button
                            className="btn btn-warning w-100"
                            onClick={() => navigate('/college-code')}
                        >
                            Create/View College Code
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AccountManagement;
