import profile from "../assets/myProfil.png"

function ContainProfil() {
  return (
    <div className="w-60 h-60 rounded-full overflow-hidden mb-10">
      <img
        src={profile}
        alt="Photo de profil"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
export default ContainProfil;