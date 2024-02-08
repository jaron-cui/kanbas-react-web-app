import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaDesktop, FaExternalLinkAlt, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "", icon: <a className="northeastern-n" href="http://northeastern.edu">N</a> },
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2"/> },
    { label: "History", icon: <FaClock className="fs-2"/> },
    { label: "Studio", icon: <FaDesktop className="fs-2"/> },
    { label: "Commons", icon: <FaExternalLinkAlt className="fs-2"/> },
    { label: "Help", icon: <FaQuestionCircle className="fs-2"/> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}

{/* <ul class="wd-kanbas-navigation">
<li><a class="northeastern-n" href="http://northeastern.edu">N</a></li>
<li><a href="/Kanbas/Account/Navigation/index.html"><i class="fa fa-user-circle wd-kanbas-navigation-account"></i><br> Account</a></li>
<li class="wd-active"><a href="/Kanbas/Dashboard/screen.html"><i class="fa fa-tachometer"></i> Dashboard</a></li>
<li><a href="/Kanbas/Courses/Home/screen.html"><i class="fa fa-book"></i><br> Courses</a></li>
<li><a href="/Kanbas/Calendar/index.html"><i class="fa fa-calendar"></i><br> Calendar</a></li>
<li><a href="/Kanbas/Inbox/index.html"><i class="fa fa-inbox"></i><br> Inbox</a></li>
<li><a href="/Kanbas/History/index.html"><i class="fa fa-clock-o"></i><br> History</a></li>
<li><a href="/Kanbas/Studio/index.html"><i class="fa fa-desktop"></i><br> Studio</a></li>
<li><a href="/Kanbas/Commons/index.html"><i class="fa fa-external-link"></i><br> Commons</a></li>
<li><a href="/Kanbas/Help/index.html"><i class="fa fa-question-circle-o"></i><br> Help</a></li>
</ul> */}
export default KanbasNavigation;