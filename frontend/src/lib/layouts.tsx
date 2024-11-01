import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div className='container mx-auto'>
			<Outlet />
		</div>
	);
}

function AuthLayout() {
	return (
		<div>
			<Outlet />
		</div>
	);
}

export { AuthLayout, Layout };
