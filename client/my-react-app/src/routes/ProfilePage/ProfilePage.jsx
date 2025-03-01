import React, { useContext } from "react";
import "./profilePage.scss";
import { AuthContext } from "../../components/Context/Context";
import Swal from "sweetalert2";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";


const ProfilePage = () => {
  const { currentUser, update } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleEdit=()=>{
    navigate(`/profile/${currentUser.id}/edit`)
  }

  const handleDelete = async () => {
    
    try {
      const result = await Swal.fire({
        title: "Delete Account",
        text: "Are you sure you want to delete your account?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
      });

      if (result.isConfirmed) {
        await apiRequest.delete(`/user/${currentUser.id}`);
        update(null)

        await Swal.fire({
          title: "Deleted",
          text: "Your account has been deleted successfully",
          icon: "success",
        }).then(() => {
          
          navigate("/register"); 
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Your account is safe",
          icon: "info",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="profilePage">
      <div className="top">
        <div className="imgContainer">
          <img src="../shopping.jpg" alt="Profile" width="200px" height="190px" />
        </div>
      </div>
      <div className="bottom">
        <h2>Details</h2>
        <div className="info">
          <div>
            <label>Name:</label>
            <h4>{currentUser?.username || "N/A"}</h4> {/* ✅ Optional chaining */}
          </div>
          <div>
            <label>Email:</label>
            <h4>{currentUser?.email || "N/A"}</h4> {/* ✅ Optional chaining */}
          </div>
          <div>
            <label>Phone Number:</label>
            <h4>{currentUser?.phone || "Not provided"}</h4> {/* ✅ Now dynamic */}
          </div>
          <div>
            <label>Gender:</label>
            <h4>{currentUser?.gender || "Not specified"}</h4> {/* ✅ Now dynamic */}
          </div>
        </div>
        <div className="button">
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit} >Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
