import "./hero.css";
import Button from "./Button";
export default function HeroSection() {
  return (
    <div className="h-screen">
      <div className="hero relative  justify-center items-center flex flex-col gap-10">
        <h1 className="text-7xl font-extrabold text-center text-white">
          WE ARE A <br /> LANDING PAGE
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
        </p>
        <Button />
      </div>
    </div>
  );
}
