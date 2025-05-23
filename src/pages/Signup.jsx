import React, { useState } from "react";
import { useNavigate } from "react-router";

const Input = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  showError,
}) => (
  <div className="relative w-full">
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className={`peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border rounded-md appearance-none focus:outline-none focus:ring-[0.5px] ${
        showError
          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
          : "border-[#CBCBCB] focus:ring-[#6C25FF] focus:border-[#6C25FF]"
      }`}
    />
    <label
      htmlFor={id}
      className={`absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] ${
        showError ? "text-red-500" : "text-[#6C25FF]"
      }`}
    >
      {placeholder}
      <span className="ml-0.5 text-red-500">*</span>
    </label>
  </div>
);

const Signup = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, agency: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const isFormValid = Object.values({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
      company: formData.company.trim(),
    }).every(Boolean);

    if (!isFormValid) return;

    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] font-sans">
      <div className="bg-[#F7F8F9] w-[375px] h-[670px] border border-gray-200 px-5 pt-10 pb-7 font-sans">
        <h1 className="text-2xl font-bold text-[#1D2226] leading-9">
          Create your <br/> PopX account
        </h1>

        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
          <Input
            id="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            showError={isSubmitted && !formData.name.trim()}
          />
          <Input
            id="phone"
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            showError={isSubmitted && !formData.phone.trim()}
          />
          <Input
            id="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            showError={isSubmitted && !formData.email.trim()}
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            showError={isSubmitted && !formData.password.trim()}
          />
          <Input
            id="company"
            placeholder="Company name"
            value={formData.company}
            onChange={handleChange}
            showError={isSubmitted && !formData.company.trim()}
          />
          <div>
            <span className="text-[13px] leading-[17px] text-[#1D2226]">
              Are you an Agency?<span className="text-red-500 ml-1">*</span>
            </span>
            <div className="flex gap-6 mt-2">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="radio"
                    name="agency"
                    value={option}
                    checked={formData.agency === option}
                    onChange={handleRadioChange}
                    className="accent-[#6C25FF] size-4 cursor-pointer"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#6C25FF] rounded-md text-white text-base leading-[17px] font-medium w-full h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5A1EDB] mt-[88px]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
