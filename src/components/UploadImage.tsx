import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { setImage } from "../store/slices/catsSlice";
import { predictBreed } from "../store/thunks/catsThunks";

const UploadImage: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const image = event.target.files[0];
			dispatch(setImage(image));
			dispatch(predictBreed(image));
		}
	};

	return (
		<div className='flex flex-col items-center'>
			<input
				type='file'
				accept='image/*'
				onChange={handleImageUpload}
				className='mb-4'
			/>
			<label className='block text-gray-600'>Upload an image of your cat</label>
		</div>
	);
};

export default UploadImage;
