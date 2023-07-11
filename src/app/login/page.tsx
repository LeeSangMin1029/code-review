import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col justify-center items-center min-w-[420px] w-full h-full sm:w-2/5">
        <div className="w-[90%]  max-w-[420px] flex flex-col items-center h-full">
          <h3 className="w-full mt-5 text-2xl mb-4">Sign In</h3>
          <div className="w-full h-[520px] rounded-xl shadow-card ">
            <div className="flex flex-col justify-center m-6 h-fit">
              <input
                className="h-12 bg-slate-200 rounded-md placeholder:text-slate-500 px-3 mb-3"
                placeholder="아이디"
              />
              <input
                type="password"
                className="h-12 bg-slate-200 rounded-md placeholder:text-slate-500 px-3 mb-5"
                placeholder="비밀번호"
              />
              <div>
                <label id="login-check" className="select-none">
                  <input
                    id="login-check"
                    type="checkbox"
                    className="mr-2 mb-3"
                  />
                  로그인 상태 유지
                </label>
              </div>
              <button
                type="submit"
                className="rounded-lg text-white text-xl bg-blue h-14 font-semibold"
              >
                로그인
              </button>
              <div className="text-xs text-slate-500 self-center text-center my-4">
                <Link href="#">비밀번호 찾기 </Link>|
                <Link href="#"> 아이디 찾기 </Link>|
                <Link href="#"> 회원가입</Link>
              </div>
              <button className="flex items-center h-12 shadow-button mb-4 rounded-sm">
                <div className="w-[18px] h-[18px] bg-black text-center m-6" />
                <span className="text-sm">Sign in with Google</span>
              </button>
              <button className="flex items-center h-12 shadow-button rounded-sm">
                <div className="w-[18px] h-[18px] bg-black text-center m-6" />
                <span className="text-sm">Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block bg-slate-400 w-3/5 h-full" />
    </div>
  );
};

export default Login;
