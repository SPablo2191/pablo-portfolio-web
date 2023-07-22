import profilePicture from "../../assets/images/main_profile_picture.jpeg";
function ProfilePicture(){
    return (
        <div className="inline-grid grid-cols-1">
        <img
          src={profilePicture}
          alt="Imagen de perfil"
          className="profile_pic mr-7 floating"
        />
      </div>
    );
}
export default ProfilePicture;