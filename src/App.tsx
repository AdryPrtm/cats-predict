import UploadImage from "./components/UploadImage";
import PredictionResult from "./components/PredictionResult";
import { Provider } from "react-redux";
import { store } from "./store";

const AppLaunch = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800'>
			<h1 className='text-3xl font-bold mb-6'>Cat Breed Predictor</h1>
			<div className='w-full max-w-md bg-white shadow-md rounded-lg p-8'>
				<UploadImage />
				<PredictionResult />
			</div>
		</div>
	);
};

const App = () => {
	return (
		<Provider store={store}>
			<AppLaunch />
		</Provider>
	);
};

export default App;

