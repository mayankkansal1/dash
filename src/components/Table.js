import React from 'react'

export default function Table() {
    return (
        <div>
            <section className="relative py-16 bg-blueGray-50">
                <div className="w-full mb-12 px-4">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
                    >

                        <div className="block w-full overflow-x-auto ">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                            Product Name
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                            Stock
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                            Price
                                        </th>

                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                                            Total Sales
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img
                                                src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
                                                className="h-12 w-12 bg-white rounded-full border"
                                                alt="..."
                                            />
                                            Abstract 3d
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            32 in stock
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            $45.99
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            20 in sales
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            <a
                                                href="#pablo"
                                                className="text-blueGray-500 block py-1 px-3"
                                                onclick="openDropdown(event,'table-dark-1-dropdown')"
                                            >
                                                <i className="fas fa-ellipsis-v" />
                                            </a>
                                            <div
                                                className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                                id="table-dark-1-dropdown"
                                            >
                                                <a
                                                    href="#pablo"
                                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                >
                                                    Action
                                                </a>
                                                <a
                                                    href="#pablo"
                                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                >
                                                    Another action
                                                </a>
                                                <a
                                                    href="#pablo"
                                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                >
                                                    Something else here
                                                </a>
                                                <div className="h-0 my-2 border border-solid border-blueGray-100" />
                                                <a
                                                    href="#pablo"
                                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                                >
                                                    Seprated link
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img
                                                src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
                                                className="h-12 w-12 bg-white rounded-full border"
                                                alt="..."
                                            />
                                            Sarphens
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            32 in stock
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            $45.99
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            15 in sales
                                        </td>

                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img
                                                src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
                                                className="h-12 w-12 bg-white rounded-full border"
                                                alt="..."
                                            />
                                            bootstrap 3d
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            32 in stock
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            $50.99
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            18 in sales
                                        </td>

                                    </tr>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img
                                                src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
                                                className="h-12 w-12 bg-white rounded-full border"
                                                alt="..."
                                            />
                                            taolwind 3d
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            32 in stock
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            $55.99
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            19 in sales
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

