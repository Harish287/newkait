import React from "react";
// import Page from "./clubsilver";
// import PaginationNav from "./pagination";

const ClubComponent = ({ e }) => {
  //https://kaitworld.comv1/api/club/1
  console.log(e.id);

  return (
    <>
      <div
        className={` grid grid-cols-${e.id}  bg-slate-600  items-center gap-6  h-[100vh]  p-6`}
      >
        {e.members.map((e) => (
          <div className=" bg-cyan-500 h-[30vh] gap-6 p-8 ">{e.name}</div>
        ))}

        {/* <div className=" bg-cyan-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-red-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-cyan-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-red-500 h-[30vh] w-[20vw]"></div>
        <div className=" bg-red-500 h-[30vh] w-[20vw]"></div> */}
      </div>
    </>
  );
};

const Clubbronze = ({ e }) => {
  return (
    <div>
      <div
        key={e.id}
        className={`grid grid-cols-${e.id}  bg-slate-600  items-center gap-6    p-6 `}
      >
        {e.members.map((e) => (
          <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% gap-6 p-8 flex justify-between text-white">
            <div>{e.user_name}</div>
            <div>{e.amount}</div>
            <div>{e.user_id}</div>
          </div>
        ))}
      </div>
      {/* <PaginationNav /> */}
    </div>
  );
};

const Clubsilver = ({ e }) => {
  return (
    <div>
      <div
        key={e.id}
        className={`grid md:grid-cols-4 bg-slate-600  items-center gap-6    p-6 `}
      >
        {e.members.map((e) => (
          
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gap-6 p-8 h-[auto] ">
            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: e.user_name }}
            ></div>

            <div className="text-center">{e.user_id}</div>
            <img
              className=" h-[150px] w-[150px] m-auto object-cover"
              src={e.user_image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>

/* <div>
<Card color="transparent" shadow={false} className="text-center">  <div
 key={e.id}
 className={`grid md:grid-cols-4 bg-slate-600  items-center gap-6    p-6 `}
>
 {e.members.map((e) => (
    
   <div className=" gap-6 p-8 h-[auto] ">
   <Typography className="font-bold text-blue-gray-500"
       dangerouslySetInnerHTML={{ __html: e.user_name }}
     ></Typography>

<Typography variant="h5" color="blue-gray" className="mt-6 mb-1">{e.user_id}</Typography>
     <Avatar
       className=" h-[150px] w-[150px] m-auto object-cover"
       src={e.user_image}
       alt={{__html: e.user_name}}
     />
   </div>
 ))}
</div></Card>
</div> */
  );
};

const Clubgold = ({ e }) => {
  return (
    <div>
      <div
        key={e.id}
        className={`grid md:grid-cols-2 bg-slate-600  items-center gap-6   p-6 `}
      >
        {e.members.map((e) => (
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gap-6 p-8 h-[250px] md:flex justify-between items-center ">
            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: e.user_name }}
            ></div>
            {/* <div >{e.user_name}</div> */}
            {/* <div>{e.amount}</div> */}
            <div className="text-center">{e.user_id}</div>
            <div>
              <img
                className="h-[150px] w-[150px] m-auto object-cover"
                src={e.user_image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Clubplatinum = ({ e }) => {
  return (
    <div>
      <div
        key={e.id}
        className={`grid md:grid-cols-2 bg-slate-600  items-center gap-6   p-6 `}
      >
        {e.members.map((e) => (
          <div className=" flex justify-center gap-6 flex-col p-8 md:flex md:justify-center md:flex-col md:gap-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  md:p-8  md:h-[400px]    ">
            {/* <div className="flex justify-evenly "> */}
            <div className="text-center">{e.user_id}</div>
            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: e.user_name }}
            ></div>{" "}
            {/* </div> */}
            {/* <div className="flex justify-center "> */}
            <img
              className=" text-center m-auto md:h-[300px]  md:w-[300px] h-[100px]w-[100px] object-cover"
              src={e.user_image}
              alt=""
            />
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
const Clubdiamond = ({ e }) => {
  return (
    <div>
      <div
        key={e.id}
        className=" grid grid-cols-1 bg-slate-600  items-center  md:overflow-x-scroll h-[500px] gap-6 p-6"
      >
        {e.members.map((e) => (
          <div className="bg-cyan-500 gap-6 p-8  h-[400px] flex justify-center items-center">
            {/* <div>{e.name}</div> */}
            <div className="font-extrabold">{e.notes}</div>
            {/* <div>{e.amount}</div>
            <div>{e.user_id}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export {
  ClubComponent,
  Clubbronze,
  Clubdiamond,
  Clubsilver,
  Clubplatinum,
  Clubgold,
};
