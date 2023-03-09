import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage';
import MainPage from './pages/MainPage';
import CoursesPage from './pages/CoursesPage';
import CreateCoursePage from './pages/CreateCoursePage';
import CoursesInfoPage from './pages/CoursesInfoPage';
import RegistrationPage from './pages/RegistrtionPage';
import LoginPage from './pages/LoginPage';

// import { test } from './components/Registration/Registration';

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
				// need TO CREATE FORM SUBMITION LOGIC
				// action: test,
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
