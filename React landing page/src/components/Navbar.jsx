export default function Navbar() {
  return (
    <div className="flex justify-evenly h-24px py-5 bg-slate-100">
      <div className="text-center">
        <h1 className=" font-bold  text-3xl">REACT LANDING PAGE</h1>
      </div>
      <div className="flex justify-between gap-7 items-center">
        <p className="font-semibold text-lg">FEATURES </p>
        <p className="font-semibold text-lg">ABOUT</p>
        <p className="font-semibold text-lg">SERVICES </p>
        <p className="font-semibold text-lg">GALLERY </p>
        <p className="font-semibold text-lg">TESTIMONIALS </p>
        <p className="font-semibold text-lg">TEAM </p>
        <p className="font-semibold text-lg">CONTACT </p>
      </div>
    </div>
  );
}
