import ProfileCard from "../components/ProfileCard";
import avatar from "../assets/avatar.png";
const AboutPage = () => {
  return (
    <>
      <div>
        <ProfileCard
          name="Irfan Aqila Utama"
          title="Web Developer"
          handle="irfanAqila31"
          status="Online"
          contactText="Contact Me"
          avatarUrl={avatar}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </>
  );
};
export default AboutPage;
