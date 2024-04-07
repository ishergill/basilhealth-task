import { useLocation } from 'react-router-dom';

// !constants
import { sidebarConfig } from '../../../configs/sidebarConfg';

// !assets
import { logo } from '../../../assets/images/sidebar';


function Sidebar() {
  const location = useLocation();
  const routeConfig = sidebarConfig.slice(0, 5);
  const settingConfig = sidebarConfig.slice(6); // Start from index 5 to the end
  console.log(settingConfig, 'adfsasdf');

  return (
    <div className='w-20 bg-white px-2 py-4 flex flex-col items-center shadow-2xl border-gray-200 hidden md:block'>
      <img src={logo} className='w-8 h-8' alt="logo"/>
      <div className='mt-10 flex flex-col items-center '>
        {routeConfig.map((item, index) => (
          <div key={index} className={`text-white w-10 h-10 rounded-md cursor-pointer my-2 ${item.link === location.pathname ? 'bg-[#377dff]' : ''} hover:bg-blue-100`}>
            <img src={item.icon} className="p-1 rounded-md m-auto mt-[4px]" alt="icon" />
          </div>
        ))}
        <div className='mt-8'>
          {settingConfig.map((item, index) => (
            <div key={index} className={`text-white w-10 h-10 rounded-md cursor-pointer my-2 ${item.link === location.pathname ? 'bg-[#377dff]' : ''} hover:bg-blue-100`}>
              <img src={item.icon} className={`p-1 rounded-md mt-[4px] ml-1`} alt="icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
