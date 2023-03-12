import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage';
import MainPage from './pages/MainPage';
import CoursesPage from './pages/CoursesPage';
import CreateCoursePage from './pages/CreateCoursePage';
import CoursesInfoPage from './pages/CoursesInfoPage';
import RegistrationPage, {
	action as registrationAction,
} from './pages/RegistrationPage';
import LoginPage, { action as loginAction } from './pages/LoginPage';
import { tokenLoader } from './util/authentication';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		loader: tokenLoader,
		id: 'root',
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: 'courses',
				children: [
					{ index: true, element: <CoursesPage /> },
					{ path: ':courseId', element: <CoursesInfoPage /> },
					{ path: 'add', element: <CreateCoursePage /> },
				],
			},
			{
				path: 'registration',
				element: <RegistrationPage />,
				action: registrationAction,
			},
			{
				path: 'login',
				element: <LoginPage />,
				action: loginAction,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
