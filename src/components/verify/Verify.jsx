import ColoredLogo from '../ColoredLogo'

export default function Verify({ icon, action ,Cborder}) {

	return <div className={`w-72 py-1 my-1 rounded-md border mx-auto  flex justify-center items-center relative 
		${!Cborder ? 'border-1 border-purple-1000' : Cborder}
	`}>

		<ColoredLogo size={'h-12'} target={' '} />

		<button
			type='button'
			className='absolute right-4 top-5'
			onClick={action ? action() : null}
		>
			{icon}
		</button>



	</div>

}