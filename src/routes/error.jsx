import Header from "../components/Header";


export default function ErrorPage() {

     return (
          <>
               <Header />
               <div className=" dark:bg-black text-white w-screen h-screen flex
          flex-col justify-center items-center ">
                    <h1 className="text-2xl">404dd</h1>
                    <h2 className="text-lg">Page Not Found</h2>
               </div>
          </>
     );
}