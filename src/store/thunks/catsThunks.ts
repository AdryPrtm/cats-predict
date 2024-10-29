import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const predictBreed = createAsyncThunk(
	"cats/predictBreed",
	async (image: File) => {
		const formData = new FormData();
		formData.append("file", image);

		const response = await axios.post("/api/predict", formData, {
			headers: { "Content-Type": "multipart/form-data" },
		});

		console.log(response.data);

		return response.data;
	}
);
