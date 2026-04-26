'use client'
import { useEffect, useState } from "react";


const TimelinePage = () => {
    const [logs, setLogs] = useState([]);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState('');

    // Data Loading
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("timeline")) || [];
        setLogs(data);

    }, []);

    const filteredLogs = logs.filter((log) => {
        //filter type
        const matchType = filter === "all" || log.type === filter

        const matchSearch = log.name.toLowerCase().includes(search.toLocaleLowerCase());

        return matchType && matchSearch
    });

    return (
        <div className="container mx-auto space-y-4 lg:px-[120px] py-20">

            <div className="flex justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-green-950 mb-6">
                        Timeline
                    </h2>
                </div>

                <div className="flex gap-4">

                     {/* sort by */}
                    <div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1">Sort By ⬇️</div>
                            <ul
                                tabIndex="-1"
                                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                                <li>
                                    <button onClick={() => setFilter("all")} className="btn btn-sm">
                                        All
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setFilter("call")} className="btn btn-sm">
                                        Call
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setFilter("text")} className="btn btn-sm">
                                        Text
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setFilter("video")} className="btn btn-sm">
                                        Video
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* search field */}
                    <div>
                        
                        <input onChange={(e) => setSearch(e.target.value)}
                            type="text" placeholder="Search" value={search}
                            className="border border-base-200 shadow-md p-4"
                        />
                    </div>
                   
                </div>
            </div>




            {/* contact History list */}
            <div className="space-y-4 max-w-7xl">
                {
                    filteredLogs.length > 0 ? (
                        filteredLogs.map((log) =>
                            <div key={log.id}
                                className="shadow-md border border-base-200 rounded-md px-6 py-4">

                                <p className="font-semibold">
                                    {log.type} with {log.name}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {new Date(log.date).toLocaleString()}
                                </p>
                            </div>
                        )
                    ) : (
                        <div className=" max-w-5xl max-auto border border-base-200 shadow-md p-8 rounded-md text-center bg-gray-50">
                            <h3 className="text-lg font-semibold text-gray-600">
                                No interactions found
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Try different filter or search
                            </p>
                        </div>
                    )
                }

            </div>

        </div>



    );
};

export default TimelinePage;