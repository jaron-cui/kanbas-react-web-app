import ModuleList from "../Modules/List";
import CourseNavigation from "../Navigation";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="d-flex flex-row">
        <div style={{marginRight: '50px', width: '100%'}}>
          <ModuleList />
        </div>
        <div className="d-flex justify-content-end">
        <div className="flex-grow-0 me-2 d-none d-lg-block" style={{width: "250px"}}>
          <h1>Course Status</h1>
          <table>
            <tbody>
              <tr>
                <td><button>Unpublish</button></td>
                <td><button>Published</button></td>
              </tr>
            </tbody>
          </table>
          <ul className="list-group wd-modules">
            <li><a href="root">Import Existing Content</a></li>
            <li><a href="root">Import From Commons</a></li>
            <li><a href="root">Choose Home Page</a></li>
            <li><a href="root">View Course Stream</a></li>
            <li><a href="root">New Announcement</a></li>
            <li><a href="root">New Analytics</a></li>
            <li><a href="root">View Course Notifications</a></li>
          </ul>
          <h1>Crumbing Up</h1>
          <a href="root">View Calendar</a>
          <ul className="list-group wd-modules">
            <li><a href="root">Lecture 8463748</a></li>
            <li><a href="root">Lecture 203232</a></li>
            <li><a href="root">Social Security Number 076-12-3456</a></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Home;