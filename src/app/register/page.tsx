import Dropdown from "@/components/Dropdown";
import { languageList } from "./data";

const Register = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col justify-center items-center min-w-[450px] w-full h-full sm:w-3/5">
        <div className="w-[90%]  max-w-[450px] flex flex-col items-center h-full">
          <h3 className="w-full mt-5 text-2xl mb-4">Sign Up</h3>
          <div className="w-full h-fit rounded-xl shadow-card">
            <div className="flex flex-col m-6  select-none">
              <div className="flex flex-row mb-3">
                <div className="w-full">
                  <label htmlFor="id" className="text-sm block">
                    ID
                  </label>
                  <input
                    id="id"
                    className="w-[70%] inline-block h-12 bg-slate-200 rounded-md placeholder:text-slate-500 px-3"
                    placeholder="아이디"
                  />
                  {/* 자동으로 확인하도록 기능 업데이트 예정 */}
                  <input
                    id="duplicated-check"
                    className="inline-block mx-2"
                    type="checkbox"
                  />
                  <label htmlFor="duplicated-check">중복 확인</label>
                </div>
              </div>
              <div className="flex flex-row mb-3">
                <div className="w-full">
                  <label htmlFor="pw1" className="text-sm">
                    Password
                  </label>
                  <input
                    id="pw1"
                    className="w-[70%] block h-12 bg-slate-200 rounded-md placeholder:text-slate-500 px-3"
                    placeholder="비밀번호"
                    type="password"
                  />
                  <span className="text-xs text-slate-400">
                    영문, 숫자, 특수문자 조합으로 8~15자를 입력해주세요.
                  </span>
                </div>
              </div>
              <div className="flex flex-row mb-3">
                <div className="w-full">
                  <label htmlFor="pw2" className="text-sm">
                    Password
                  </label>
                  <input
                    id="pw2"
                    className="w-[70%] block h-12 bg-slate-200 rounded-md placeholder:text-slate-500 px-3"
                    placeholder="비밀번호"
                    type="password"
                  />
                  <span className="text-xs text-slate-400">
                    다시 한 번 더 입력해주세요.
                  </span>
                </div>
              </div>
              <div className="flex flex-row mb-3 items-center">
                <label htmlFor="mento" className="text-sm">
                  Mento
                </label>
                <input id="mento" type="checkbox" className="mx-2 mr-10" />
                <Dropdown data={languageList} />
              </div>
              <button
                type="submit"
                className="rounded-lg text-white text-xl bg-blue h-14 font-semibold w-full"
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block bg-slate-400 w-2/5 h-full" />
    </div>
  );
};

export default Register;
