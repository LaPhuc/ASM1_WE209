interface IButtonAdmin {
  title: string;
  text?: string;
  add?: boolean;
  edit?: boolean;
  remove?: boolean;
}

const ButtonAdmin = ({ title, text, add, edit, remove }: IButtonAdmin) => {
  return (
    <>
      {add && (
        <button className="font-sans border border-[#00c6ab] text-sm text-white bg-[#00c6ab] px-5 py-1 rounded-3xl hover:bg-white hover:text-[#00c6ab] ml-2">
          {title}
        </button>
      )}
      {edit && (
        <button
          onClick={() => console.log(text)}
          className="font-sans border border-[#FDC85E] text-sm text-white bg-[#FDC85E] px-5 py-1 rounded-3xl hover:bg-white hover:text-[#FDC85E] ml-2"
        >
          {title}
        </button>
      )}
      {remove && (
        <button
          onClick={() => console.log(text)}
          className="font-sans border border-alizarin-crimson text-sm text-white bg-alizarin-crimson px-5 py-1 rounded-3xl hover:bg-white hover:text-alizarin-crimson ml-2"
        >
          {title}
        </button>
      )}
    </>
  );
};

export default ButtonAdmin;
