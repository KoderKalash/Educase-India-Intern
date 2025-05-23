import React from "react";
import { Camera } from 'lucide-react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const name = user?.name || "Marry Doe";
  const email = user?.email || "Mail not found";
  const company = user?.company || "Company not found";

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center">
      <div className="w-[375px] h-[660px] max-w-md mx-4 mt-8 bg-white rounded-t-xl border border-gray-200">
        <h2 className="text-lg font-semibold px-6 py-4 border-b border-gray-300 ">Account Settings</h2>

        <div className="flex items-center gap-4 px-6 pt-5 pb-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588026193712-31163b26c043?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
              className="rounded-full w-16 h-16 object-cover border"
            />
            <div className="absolute bottom-0 right-0 bg-violet-600 p-[6px] rounded-full border-2 border-white">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <Camera />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-semibold text-base">{name}</span>
            <span className="text-gray-600 text-sm">{email}</span>
          </div>
        </div>

        <div className="px-6 pt-3 pb-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
            Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
          </p>
        </div>

        <div className="border-b border-gray-300 mx-6 mb-4" />
      </div>
    </div>
  );
};

export default Profile;
