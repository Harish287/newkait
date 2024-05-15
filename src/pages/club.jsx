import React, { useState, useEffect } from "react";
import Banner from "../Assets/Screenshot 2024-04-04 101700.jpg";
import {
  // ClubComponent,
  Clubbronze,
  Clubgold,
  Clubsilver,
  Clubplatinum,
  Clubdiamond,

} from "../data/club/Clubbronze";
import axios from "axios";

export default function Club () {
  const [tab, setTab] = useState("bronze");

  const updateTab = (e) => {
    setTab(e);
    // console.log(e);
  };

  const [filterlist, setFilterlist] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/kait/admin/club/api.php"
        );
        setData(response.data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const Links = {
  //   data: [
  //     {
  //       club: "bronze",
  //       id: "1",
  //       members: [
  //         { name: "bronze raj", amount: "100", user_id: "KEX567" },
  //         { name: "bronze akash", amount: "100", user_id: "KEX673" },
  //         { name: "bronze kavi", amount: "100", user_id: "KEX74" },
  //         { name: "bronze harish", amount: "100", user_id: "KEX567" },
  //         { name: "bronze karthik", amount: "100", user_id: "KEX567" },
  //         { name: "bronze raj", amount: "100", user_id: "KEX567" },
  //         { name: "bronze akash", amount: "100", user_id: "KEX567" },
  //         { name: "bronze kavi", amount: "100", user_id: "KEX567" },
  //         { name: "bronze harish", amount: "100", user_id: "KEX567" },
  //         { name: "bronze karthik", amount: "100", user_id: "KEX567" },
  //       ],
  //     },

  //     {
  //       club: "silver",
  //       id: "4",
  //       members: [
  //         { name: "silver raj", amount: "100", user_id: "KEX567" },
  //         { name: "silver akash", amount: "100", user_id: "KEX567" },
  //         { name: "silver kavi", amount: "100", user_id: "KEX567" },
  //         { name: "silver harish", amount: "100", user_id: "KEX567" },
  //         { name: "silver karthik", amount: "100", user_id: "KEX567" },
  //       ],
  //     },

  //     {
  //       club: "gold",
  //       id: "3",
  //       members: [
  //         { name: "gold raj", amount: "100", user_id: "KEX567" },
  //         { name: "gold akash", amount: "100", user_id: "KEX567" },
  //         { name: "gold kavi", amount: "100", user_id: "KEX567" },
  //         { name: "gold harish", amount: "100", user_id: "KEX567" },
  //         { name: "gold karthik", amount: "100", user_id: "KEX567" },
  //       ],
  //     },
  //     {
  //       club: "platinum",
  //       id: "2",
  //       members: [
  //         { name: "platinum raj", amount: "100", user_id: "KEP567" },
  //         { name: "platinum akash", amount: "100", user_id: "KEP568" },
  //         // { name: "platinum kavi", amount: "100", user_id: "KEX567" },
  //         // { name: "platinum harish", amount: "100", user_id: "KEX567" },
  //         // { name: "platinum karthik", amount: "100", user_id: "KEX567" },
  //       ],
  //     },
  //     {
  //       club: "diamond",
  //       id: "1",
  //       members: [
  //         // { name: "diamond raj", amount: "100", user_id: "KEX567"  },
  //         { notes: "We are Egerly Waiting for your new achivement" },
  //         // { name: "diamond akash", amount: "100", user_id: "KEX567" },
  //         // { name: "diamond kavi", amount: "100", user_id: "KEX567" },
  //         // { name: "diamond harish", amount: "100", user_id: "KEX567" },
  //         // { name: "diamond karthik", amount: "100", user_id: "KEX567" },
  //       ],
  //     },
  //   ],
  // };

  // const handleFilter =(e) =>{
  //   const value = e.target.value;
  //   const filtered = members.filter(members=> members.user_id.includes(value));
  //   setFilterlist(filtered)
  // }
  const handleFilter = (e) => {
    const value = (e.target.value || "").toLowerCase();
    
    console.log(value);
    const filteredMembers = data.data.map((link) => {
      const filtered = link.members.filter((member) =>
        (member.user_name || "").toLowerCase().includes(value)
      
      );
      console.log(filtered);
      return { ...link, members: filtered };
    });
    setFilterlist(filteredMembers);
  };

  return (
    <div>
      <img className="w-[100%]" src={Banner} alt="" />
      <h1 className="flex justify-center text-xl font-bold mt-9 mb-9">Club</h1>
      <div className=" md:flex">
        {" "}
        <div className="md:flex px-0 md:px-28 gap-6 justify-center text-center">
          {data.data.map((link, index) => (
            <>
              <div>
                <div
                  key={link.id}
                  onClick={() => updateTab(link.club)}
                  className={`md:my-0 my-7 flex flex-col  hover:text-blue-500  ${
                    tab === link.club ? " text-blue-500" : " text-black"
                  } font-semibold hover:cursor-pointer  active:text-gray-400`}
                >
                  {link.club}
                  <div
                    className={`h-1 w-28 mx-auto bg-black hover:bg-blue-500 ${
                      tab === link.club ? " bg-blue-500" : " bg-black"
                    }`}
                  ></div>
                  {/* {tab === link.club && <Clubbronze e={link} />} */}
                </div>
                {/* <div className="w-[100%]"> {tab === link.club && <ClubComponent e={link} />}</div> */}
              </div>
            </>
          ))}
        </div>
        <form class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleFilter}
              placeholder="Search user ID"
              required
            />
            {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
          </div>
        </form>
      </div>

      {/* <div className="  w-[100%]">
        {Links.data.map((link, index) => (
          <>
            <div className="" key={link.id}>
              {tab === "bronze" && link.club === "bronze" && (
                <Clubbronze e={link} />
              )}
              {tab === "gold" && link.club === "gold" && <Clubgold e={link} />}
              {tab === "silver" && link.club === "silver" && (
                <Clubsilver e={link} />
              )}
              {tab === "platinum" && link.club === "platinum" && (
                <Clubplatinum e={link} />
              )}
              {tab === "diamond" && link.club === "diamond" && (
                <Clubdiamond e={link} />
              )}
            </div>
          </>
        ))}
      </div> */}

      <div className="  w-[100%]">
        {(filterlist.length > 0 ? filterlist : data.data).map((link, index) => (
          <div className="" key={link.id}>
            {tab === "bronze" && link.club === "bronze" && (
              <Clubbronze e={link} />
            )}

            {tab === "silver" && link.club === "silver" && (
              <Clubsilver e={link} />
            )}

            {tab === "gold" && link.club === "gold" && <Clubgold e={link} />}

            {tab === "platinum" && link.club === "platinum" && (
              <Clubplatinum e={link} />
            )}
            {tab === "diamond" && link.club === "diamond" && (
              <Clubdiamond e={link} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
