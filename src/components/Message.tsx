export default function Message({ message = { photoURL: null, text: null } }) {
  const { photoURL, text } = message;

  const rand = Math.random();

  return (
    <div
      className={`flex gap-2 ${
        rand > 0.5 ? "items-start" : "flex-row-reverse items-end"
      }`}
    >
      <img
        className="w-10 bg-red-200 rounded-full aspect-square"
        src={
          photoURL ||
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
        }
      />
      <p
        className={`w-[fit-content] max-w-[55%] min-h-[40px] text-my-slate-800 flex items-center rounded-md p-2 ${
          rand > 0.5
            ? "bg-black bg-opacity-5 backdrop-blur-lg "
            : "bg-[#0b93f6] bg-opacity-70 text-white backdrop-blur-lg"
        }`}
      >
        Hello guys how are you
      </p>
    </div>
  );
}
