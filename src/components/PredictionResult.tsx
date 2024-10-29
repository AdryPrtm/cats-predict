import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const PredictionResult: React.FC = () => {
	const { breed } = useSelector((state: RootState) => state.cats);

	return (
		<div className='mt-4 text-center'>
			{status === "loading" && <p className='text-blue-600'>Predicting...</p>}
			{status === "failed" && (
				<p className='text-red-600'>Prediction failed. Please try again.</p>
			)}
			{breed && (
				<p className='text-green-700 font-semibold'>Predicted Breed: {breed}</p>
			)}
			{!breed && status !== "loading" && (
				<p className='text-gray-500'>Upload an image to predict breed.</p>
			)}
		</div>
	);
};

export default PredictionResult;
