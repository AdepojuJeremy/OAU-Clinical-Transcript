import HomeHeader from "./custom/HomeHeader";
import SearchBar from "./custom/SearchBar";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/upload/68");
  };
  return (
    <div className="Home gradient-bg">
    <HomeHeader />
      <main className="main min-h-screen w-screen flex justify-center items-center">
        <div className="">
          <div className="h3">Upload Student Information</div>
          <div>
            <div className="FullName">
              <input type="text" placeholder="Enter Surname" />
              <input type="text" placeholder="Enter First Name" />
              <input type="text" placeholder="Enter Third Name" />
            </div>
            <div className="Email">
              <input type="text" placeholder="Enter Student Email Address" />
            </div>
            <div>
              <input type="text" placeholder="Enter Matric Number" />
            </div>
          </div>
          <button type="button" onClick={() => handleSubmit()}>
            Create Student
          </button>
        </div>

        {/* <SearchBar linkText={"upload"} currPage={"upload"} /> */}
      </main>
    </div>
  );
}
