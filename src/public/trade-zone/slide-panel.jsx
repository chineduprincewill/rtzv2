import { AlertCircle, ArrowLeftFromLine, ArrowRightToLine, Award, Bell, CircleX, MoveLeft, MoveRight } from 'lucide-react';

const SlidePanel = ({ pageWarning, setPageWaring}) => {

  return (
        <div className={`fixed grid gap-2 z-40 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white border-2 border-brand shadow-xl transition-transform duration-1000 ease-in ${pageWarning ? 'w-3/4 md:w-1/2 top-12 md:top-1/4 left-1/4 mx-auto rounded-l-xl p-6 md:rounded-2xl animate-slideIn' : 'max-w-max top-1/3 right-0 rounded-l-xl p-2 -translate-y-full animate-slideOut'}`}>
            <div className={`w-full flex ${pageWarning ? 'justify-between' : 'justify-end'} items-center`}>
            {
                pageWarning && <span className='text-lg font-semibold uppercase'>Warning!</span>
            }
            {
                pageWarning ? 
                <CircleX 
                    className='cursor-pointer hover:text-gray-100' 
                    onClick={() => setPageWaring(false)}
                />
                :
                <div className='grid gap-1'>
                    <Bell 
                        className='cursor-pointer text-brand hover:text-gray-100 animate-ping duration-4000 mx-auto' 
                        onClick={() => setPageWaring(true)}
                    />
                    <span className='text-brand text-sm font-semibold mx-auto'>Click me</span>
                </div>
            }
            </div>
            { 
                pageWarning && <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            }
            <div className={pageWarning ? 'grid gap-2 text-lg font-light' : 'hidden'}>
                <span>Please note that vendors and recyclers without the icon below</span> <div className='max-w-max p-1 rounded-full bg-accent border border-white'><Award className='w-6 h-6 text-white' /></div> <span>cannot be vouched for by <strong>Recycle Trade Zone (RTZ)</strong> and should you choose to engage them <strong>Recycle Trade Zone (RTZ)</strong> will not be responsible for any issue that comes out of the engagement!</span>
                <span><strong>Recycle Trade Zone (RTZ)</strong> protects your rights and privilges for any transaction carried out through this platform from start to finish. Should you at any point choose to engage outside this platform, Recycle Trade Zone (RTZ) will not be held liable for any unsatisfactory outcome.</span>
            </div>
        </div>
  );
};

export default SlidePanel;