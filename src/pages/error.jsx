import Header from "../components/Header";


export default function ErrorPage() {

     return (
          <>
               <Header />
               <div className=" dark:bg-black  flex
          flex-col justify-center items-center  text-secondary font-bold">
                    <div className="absolute top-[50vh]">
                         <h1 className="text-5xl text-center">404</h1>
                         <h2 className="text-2xl">Page Not Found</h2>
                    </div>
               </div>
          </>
     );
}