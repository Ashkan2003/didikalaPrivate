'use client'

function PostDateSelection(){
    return(
        <div className="w-[93%] mr-6 mt-7 relative overflow-x-auto border-b-[1px] border-x-[1px] rounded-br-2xl rounded-bl-2xl">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
          <thead className="text-gray-700 bg-gray-100 font-normal">
            <tr>
              <th className="w-32 px-6 py-4 text-center border-t-4 border-[#39e0cc]">
                <div className="">
                  <h1> سه شنبه </h1>
                  <span className="text-gray-300 font-medium">
                    26 شهریور
                  </span>
                </div>
              </th>
              <th className="w-32 px-6 py-4 border-[1px] text-center ">
                <h1> سه شنبه </h1>
                <span className="text-gray-300 font-medium">
                  26 شهریور
                </span>
              </th>
              <th className="w-32 px-6 py-4 border-[1px] text-center">
                <h1> سه شنبه </h1>
                <span className="text-gray-300 font-medium">
                  26 شهریور
                </span>
              </th>
              <th className="w-32 px-6 py-4 border-[1px] text-center">
                <h1> سه شنبه </h1>
                <span className="text-gray-300 font-medium">
                  26 شهریور
                </span>
              </th>
              <th className="w-32 px-6 py-3 border-[1px] text-center">
                <h1> سه شنبه </h1>
                <span className="text-gray-300 font-medium">
                  26 شهریور
                </span>
              </th>
              <th className="w-32 px-6 py-3 border-[1px] text-center">
                <h1> سه شنبه </h1>
                <span className="text-gray-300 font-medium">
                  26 شهریور
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="w-32 pr-4 py-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <input
                      id="default-radio-1"
                      type="radio"
                      name="default-radio"
                      className="w-4 h-4 text-mainRed bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm"
                    >
                      ساعت 11 تا 13
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-radio"
                      type="radio"
                      name="default-radio"
                      className="w-4 h-4 text-mainRed bg-gray-100 border-gray-300"
                      defaultChecked
                    />
                    <label
                      htmlFor="default-radio"
                      className="ms-2 text-sm"
                    >
                      ساعت 13 تا 15
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default PostDateSelection