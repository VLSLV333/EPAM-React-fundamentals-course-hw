import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage';
import MainPage from './pages/MainPage';
import CoursesPage from './pages/CoursesPage';
import CreateCoursePage from './pages/CreateCoursePage';
import CoursesInfoPage from './pages/CoursesInfoPage';
import RegistrationPage, {
	action as registrationAction,
} from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
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
				// need TO CREATE LOGIN LOGIC
				// action: test,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
