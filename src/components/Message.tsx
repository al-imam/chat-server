import useMedia from "@app/hooks/useMedia";
import lngType from "@app/utilitys/detectLanguage";

export default function Message({ message = { photoURL: null, text: null } }) {
  const smell = useMedia("(min-width: 40rem)");
  const { photoURL, text } = message;

  const user = Math.random() > 0.5 ? false : true;
  const t =
    Math.random() > 0.5
      ? "Hello guys how are you"
      : Math.random() > 0.5
      ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis tempore unde provident eaque quibusdam. Vero."
      : "গুগল এমন একটি নতুন ফিচারে ইনস্টাগ্রামসহ অন্যান্য মাধ্যমের ছোট ছোট ভিডিও দেখা যাবে।";

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
        className={`w-[fit-content] max-w-[65%] md:max-w-[55%] min-h-[40px] flex items-center rounded-md p-2 backdrop-blur-lg ${
          user
            ? "bg-black bg-opacity-5 text-fg"
            : "bg-[#0b93f6] bg-opacity-70 text-white"
        } ${lngType(t) === "bangla" ? "font-bangla" : "font-primary"}`}
      >
        {t}
      </p>
    </div>
  );
}
