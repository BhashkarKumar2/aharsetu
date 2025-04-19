import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import CheckboxGroup from '../components/CheckboxGroup';
import TextareaInput from '../components/TextareaInput';
import ImageUploader from '../components/ImageUploader';
import MultiStepProgress from '../components/MultiStepProgress';

const ChefOnboarding = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    specialties: [],
    bio: '',
    rate: '',
    experience: '',
    idDoc: null,
    certificate: null,
  });

  const cuisineOptions = ['Indian', 'Italian', 'Mexican', 'Chinese', 'Thai', 'French'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => {
      const updated = prev.specialties.includes(option)
        ? prev.specialties.filter((c) => c !== option)
        : [...prev.specialties, option];
      return { ...prev, specialties: updated };
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic or API call here
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Chef Onboarding</h2>
      <MultiStepProgress currentStep={step} totalSteps={totalSteps} />
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <>
            <TextInput
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
            <TextInput
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              type="email"
              required
            />
          </>
        )}

        {step === 2 && (
          <>
            <CheckboxGroup
              label="Select Your Specialties"
              options={cuisineOptions}
              selectedOptions={formData.specialties}
              onChange={handleCheckboxChange}
            />
            <TextareaInput
              label="Short Bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              required
            />
          </>
        )}

        {step === 3 && (
          <>
            <TextInput
              label="Hourly Rate (INR)"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              placeholder="e.g., 800"
              type="number"
              required
            />
            <TextInput
              label="Years of Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 5"
              type="number"
              required
            />
          </>
        )}

        {step === 4 && (
          <>
            <ImageUploader
              label="Upload ID Proof (PDF or Image)"
              name="idDoc"
              onChange={handleFileChange}
            />
            <ImageUploader
              label="Upload Food Safety Certificate"
              name="certificate"
              onChange={handleFileChange}
            />
          </>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400"
            >
              Back
            </button>
          )}
          {step < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ChefOnboarding;

