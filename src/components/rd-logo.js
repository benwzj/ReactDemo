import { GoDatabase } from 'react-icons/go';

export default function ReactDemoLogo() {
  return (
    <div
      className='flex flex-row items-center leading-none text-white'
    >
      <GoDatabase className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Demo</p>
    </div>
  );
}