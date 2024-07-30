import bgImage from "../assets/intro-bg.jpeg";
export default function HeroSection() {
  return (
    <div>
      <img src={bgImage} alt="" className="h-screen bg-cover w-full" />
    </div>
  );
}
