
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RatingPage() {
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      alert("⚠️ Please select a rating before submitting!");
    } else {
      alert(`✅ Thank you! You rated us ${rating}/6`);
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <p className="text-center font-bold mb-4">How satisfied are you with this Quiz?</p>

        <div className="flex items-center justify-center mb-4">
          <span className="mr-4 font-bold text-red-500">Bad</span>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <label key={num} className="inline-flex items-center mx-1">
              <input
                type="radio"
                name="rating"
                value={num}
                checked={rating === num.toString()}
                onChange={(e) => setRating(e.target.value)}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">{num}</span>
            </label>
          ))}
          <span className="ml-4 font-bold text-green-500">Excellent</span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>


      </form>
    </div>
  );
}
