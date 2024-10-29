import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { predictBreed } from "../thunks/catsThunks";

interface CatState {
	image: File | null;
	breed: string | null;
	loading: boolean;
	error: boolean;
}

const initialState: CatState = {
	image: null,
	breed: null,
	loading: false,
	error: false,
};

const catSlice = createSlice({
	name: "cats",
	initialState,
	reducers: {
		setImage: (state, action: PayloadAction<File | null>) => {
			state.image = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(predictBreed.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				predictBreed.fulfilled,
				(state, action: PayloadAction<string>) => {
					state.loading = false;
					state.breed = action.payload;
				}
			)
			.addCase(predictBreed.rejected, (state) => {
				state.loading = false;
				state.breed = null;
			});
	},
});

export const { setImage } = catSlice.actions;

export const catsReducer = catSlice.reducer;
