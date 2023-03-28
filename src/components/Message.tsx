import useMedia from "@app/hooks/useMedia";

export default function Message({ message = { photoURL: null, text: null } }) {
  const smell = useMedia("(min-width: 600px)");
  const { photoURL, text } = message;

  const user = Math.random() > 0.5 ? false : true;

  return (
    <div
      className={`sm-width sm:max-w-3xl mx-auto relative flex gap-2 translate-x-[1px] ${
        user ? "items-start" : "flex-row-reverse items-end"
      }`}
    >
      {(user || smell) && (
        <img
          className="w-8 bg-red-200 rounded-full sm:w-10 aspect-square"
          src={
            photoURL ||
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
          }
        />
      )}
      <p
        className={`w-[fit-content] max-w-[65%] md:max-w-[55%] min-h-[40px] text-my-slate-800 flex items-center rounded-md p-2 ${
          user
            ? "bg-black bg-opacity-5 backdrop-blur-lg "
            : "bg-[#0b93f6] bg-opacity-70 text-white backdrop-blur-lg"
        }`}
      >
        {Math.random() > 0.5
          ? "Hello guys how are you"
          : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis tempore unde provident eaque quibusdam. Vero."}
      </p>
    </div>
  );
}
