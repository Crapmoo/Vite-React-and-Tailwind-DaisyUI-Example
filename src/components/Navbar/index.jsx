export default function Navbar() {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href="https://www.instagram.com/ohm_sryp/">Englist For Fun</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-8">
                    <li><a href="https://www.instagram.com/ohm_sryp/">หน้าหลัก</a></li>
                    <li><a href="https://www.instagram.com/ohm_sryp/">บทเรียน</a></li>
                    <li><a href="https://www.instagram.com/ohm_sryp/">ข้อสอบ</a></li>
                    <li><a href="https://www.instagram.com/ohm_sryp/">ติดต่อ</a></li>
                </ul>
            </div>
        </div>
    );

};