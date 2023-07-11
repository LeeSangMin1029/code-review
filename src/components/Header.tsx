const Header = () => {
  return (
    <header className="fixed w-full h-14 bg-slate-100">
      <div className="flex w-auto justify-between h-full flex-row px-4 items-center">
        <div className="relative h-8 w-32 bg-slate-200">logo</div>
        <div className="relative h-8 w-96 bg-slate-200 hidden sm:block">
          search
        </div>
        <div className="relative h-8 w-36 bg-slate-200">profile</div>
      </div>
    </header>
  );
};

export default Header;
