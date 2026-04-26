import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center bg-base-100 h-screen font-bold text-5xl">
      <FadeLoader color="green"/>
    </div>
  );
};

export default loading;
