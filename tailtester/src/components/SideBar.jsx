import {FaMusic, FaMountain, FaMoon, FaPlane, FaPaw} from 'react-icons/fa'

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
        bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaMusic size="28" />} text='muzac 🎵' />
            <SideBarIcon icon={<FaMountain size="28" />} text='climbing ⛰️' />
            <SideBarIcon icon={<FaMoon size="28" />} text='sleep 🛏️' />
            <SideBarIcon icon={<FaPlane size="28" />} text='travel ✈️' />
            <SideBarIcon icon={<FaPaw size="28" />} text='pup 🐶' />
        </div>
    )
};

const SideBarIcon = ({ icon, text='🔥🔥🔥 tooltip go boom 🔥🔥🔥' }) => {
    return <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100 pointer-events-none">
            {text}
        </span>
    </div>
};

export default SideBar