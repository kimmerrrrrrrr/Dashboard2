import SearchContainer from "../components/SearchContainer";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import HeaderWithLogo1 from "../components/HeaderWithLogo1";
import "./IrishVersion.css";

const IrishVersion = () => {
  return (
    <div className="newdash">
      <img className="newdash-child" alt="" src="/ellipse-53.svg" />
      <img className="path-icon" alt="" src="/path.svg" />
      <img className="icon" alt="" src="/97-1@2x.png" />
      <div className="explore-popular-cities-parent">
        <b className="explore-popular-cities">Explore Popular Cities</b>
        <div className="amet-minim-mollit">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </div>
      </div>
      <div className="we-find-the-best-tours-for-you-parent">
        <b className="we-find-the">We Find The Best Tours For You</b>
        <div className="amet-minim-mollit1">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
      </div>
      <div className="newdash-inner">
        <SearchContainer />
      </div>
      <div className="hidden-gems-parent">
        <b className="hidden-gems">Hidden Gems</b>
        <div className="amet-minim-mollit2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </div>
      </div>
      <div className="group-parent">
        <GroupComponent
          rectangle45="/rectangle-45@2x.png"
          signsAndSymptomsOfIodineD="7 Signs and Symptoms of Iodine Deficiency"
        />
        <GroupComponent
          rectangle45="/rectangle-45-1@2x.png"
          signsAndSymptomsOfIodineD="How to Fix Your Sleep Schedule: 7 Easy Ways"
        />
        <GroupComponent
          rectangle45="/rectangle-45-2@2x.png"
          signsAndSymptomsOfIodineD="10 Proven Health Benefits of Cinnamon"
        />
        <GroupComponent
          rectangle45="/rectangle-45-3@2x.png"
          signsAndSymptomsOfIodineD="11 Health Benefits of Turmeric and Curcumin"
        />
      </div>
      <div className="view-all-posts-wrapper">
        <b className="view-all-posts">View All Posts</b>
      </div>
      <div className="frame-parent">
        <div className="sign-in-wrapper">
          <div className="sign-in">Sign In</div>
        </div>
        <div className="sign-in-container">
          <div className="sign-in1">Sign In</div>
        </div>
        <div className="sign-in-frame">
          <div className="sign-in2">Sign In</div>
        </div>
        <div className="frame-div">
          <div className="sign-in3">Sign In</div>
        </div>
        <div className="sign-in-wrapper1">
          <div className="sign-in4">Sign In</div>
        </div>
      </div>
      <img
        className="kid-style-map-of-cebu-hand-dra-icon"
        alt=""
        src="/kidstylemapofcebuhanddrawnpolygonsintheshapeofcebuvectorillustration2rcwbyt-1@2x.png"
      />
      <div className="newdash-item" />
      <div className="menu">
        <b className="hotel">Hotel</b>
        <b className="home-stay">Home Stay</b>
        <b className="guesthouse">Guesthouse</b>
        <b className="view-all">View All</b>
      </div>
      <div className="popular-place">Popular Place</div>
      <FrameComponent />
      <Footer />
      <HeaderWithLogo1
        logoColor1="/logocolor-1@2x.png"
        logo="/logo@2x.png"
        headerWithLogoPosition="absolute"
        headerWithLogoTop="0px"
        headerWithLogoLeft="0px"
        showLogoColor1Icon={false}
      />
    </div>
  );
};

export default IrishVersion;
