import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Contact Us
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        If you are a stealth startup looking for exceptional talent, we would love to offer you our services.                    </p>
                </div>
                <div className="mt-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-700">
                        Email Us At:
                    </h3>
                    <a href="mailto:info@example.com" className="text-blue-500">
                        ofice@berkswell-keller.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
