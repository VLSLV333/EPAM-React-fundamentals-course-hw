import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootPage from './pages/RootPage';
import MainPage from './pages/MainPage';
import CoursesPage from './pages/CoursesPage';
import CoursesInfoPage from './pages/CoursesInfoPage';
import CreateCoursePage from './pages/CreateCoursePage';
import ErrorPage from './pages/ErrorPage';

// import LoginPage, { action as loginAction } from './pages/LoginPage';

// import RegistrationPage, {
// 	action as registrationAction,
// } from './pages/RegistrationPage';

// import { tokenLoader, checkIfAuthentificated } from './util/authentication';
// import { logOut } from './util/logout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		// loader: tokenLoader,
		id: 'root',
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: 'courses',
				// loader: checkIfAuthentificated,
				children: [
					{ index: true, element: <CoursesPage /> },
					{ path: ':courseId', element: <CoursesInfoPage /> },
					{ path: 'add', element: <CreateCoursePage /> },
				],
			},
			// {
			// 	path: 'registration',
			// 	element: <RegistrationPage />,
			// 	action: registrationAction,
			// },
			// {
			// 	path: 'login',
			// 	element: <LoginPage />,
			// 	action: loginAction,
			// },
			// {
			// 	path: 'logout',
			// 	action: logOut,
			// },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
