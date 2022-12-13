import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

export default function signin({ providers }) {
	return (
		<div>
			<Header />
			<div className='mt-40'>
				{Object.values(providers).map((provider) => (
					<div key={provider.name} className='flex flex-col items-center'>
						<img
							className='w-52 object-cover'
							src='http://www.google.com/logos/doodles/2021/doodle-champion-island-games-september-05-6753651837109292-2xa.gif'
							alt='google-logo'
						/>
						<p className='text-sm italic my-10 text-center'>
							This website is created for learning
						</p>
						<button
							className='bg-red-400  px-4 py-2 text-white font-medium rounded-lg hover:bg-red-500 hover:shadow-lg'
							onClick={() => signIn(provider.id, { callbackUrl: '/' })}
						>
							Sign in with {provider.name}
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
