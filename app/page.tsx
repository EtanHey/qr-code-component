import Image from 'next/image';
export default function Home() {
  return (
    <div className={`flex h-full max-h-[60vh] w-full max-w-fit flex-col items-center justify-start gap-6 rounded-2xl bg-qrWhite p-4 text-center`}>
      <Image className='rounded-lg' height={280} width={280} alt='qr code' src={'/image-qr-code.png'} />
      <div className='flex max-w-[260px] flex-col gap-3 pb-14'>
        <h2 className='text-xl font-bold tracking-wider text-qrDarkBlue'>Improve your front-end skills by building projects</h2>
        <p className=' text-sm tracking-wider font-light leading-none text-qrGrayishBlue'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}
