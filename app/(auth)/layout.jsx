import Link from 'next/link';

function AuthLayout({ children }) {
	return (
		<>
			<nav>
				<h1>Dojo Helpdesk</h1>
				<Link href='/signup'>Sign up</Link>
				<Link href='/login'>Log in</Link>
			</nav>
			{children}
		</>
	);
}

export default AuthLayout;
