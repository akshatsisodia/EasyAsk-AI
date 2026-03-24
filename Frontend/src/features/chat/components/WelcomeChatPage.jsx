import InputBox from "./InputBox";

const WelcomeChatPage = () => {

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-5">
      
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-2">
          Where should we begin Today?
        </h1>
      </div>
        <InputBox/>
    </div>
  );
};

export default WelcomeChatPage;