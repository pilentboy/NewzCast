import ColoredLogo from '../ColoredLogo'

export default function Verify({ icon, action }) {

	return <div className='w-72 py-1 my-1 rounded-md border border-1 border-purple-1000 flex justify-center relative '>

		<ColoredLogo size={'h-12'} />

		<button
			type='button'
			className='absolute right-4 top-5'
			onClick={action ? action() : null}
		>
			{icon}
		</button>



	</div>

}