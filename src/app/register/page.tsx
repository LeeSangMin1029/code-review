import Form from "@/components/client/Form";

const Register = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col justify-center items-center min-w-[450px] w-full h-full sm:w-3/5">
        <div className="w-[90%]  max-w-[450px] flex flex-col items-center h-full">
          <h3 className="w-full mt-5 text-2xl mb-4">Sign Up</h3>
          <div className="w-full h-fit rounded-xl shadow-card">
            <Form />
          </div>
        </div>
      </div>
      <div className="hidden sm:block bg-slate-400 w-2/5 h-full" />
    </div>
  );
};

export default Register;
