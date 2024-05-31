export default function Navbar() {
    return (
        <div className="navbar bg-primary text-primary-content">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl" href="https://www.instagram.com/ohm_sryp/">Englist For Fun</a>
        </div>
        <div className="flex-none">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                    <li><a href="https://www.instagram.com/ohm_sryp/">หน้าหลัก</a></li>
                    <li><a href="https://www.instagram.com/ohm_sryp/">บทเรียน</a></li>
                    <li><a href="https://www.instagram.com/ohm_sryp/">ข้อสอบ</a></li>
                    <li><a href="https://www.instagram.com/ohm_sryp/">ติดต่อ</a></li>
                </ul>
            </div>
            <ul className="menu menu-horizontal px-8 hidden lg:flex">
                <li><a href="https://www.instagram.com/ohm_sryp/">หน้าหลัก</a></li>
                <li><a href="https://www.instagram.com/ohm_sryp/">บทเรียน</a></li>
                <li><a href="https://www.instagram.com/ohm_sryp/">ข้อสอบ</a></li>
                <li><a href="https://www.instagram.com/ohm_sryp/">ติดต่อ</a></li>
            </ul>
        </div>
    </div>
    
    );

};
