export default function Navbar() {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Englist For Fun</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-8">
                    <li><a>หน้าหลัก</a></li>
                    <li><a>บทเรียน</a></li>
                    <li><a>ข้อสอบ</a></li>
                    <li><a>ติดต่อ</a></li>
                </ul>
            </div>
        </div>
    );

};
