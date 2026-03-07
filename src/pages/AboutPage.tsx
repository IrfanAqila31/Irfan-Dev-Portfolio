import ProfileCard from "../components/ProfileCard";

const AboutPage = () => {
  return (
    <>
      <div>
        <ProfileCard
          className=""
          name="Irfan Aqila Utama"
          title="Front End Developer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="./public/img/avatar.png"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          iconUrl="./src/assets/demo/code.png"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </div>
    </>
  );
};
export default AboutPage;
