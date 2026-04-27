'use client'
import { FriendContext } from "@/context/FriendContext";
import { TimelineContext } from "@/context/TimelineContext";
import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";

const Banner = () => {

    const friendContext = useContext(FriendContext);
    const timelineContext = useContext(TimelineContext);

    if(!friendContext || !timelineContext){
        return <p>Loading...</p>
    }

    const {friends} = friendContext ;
    const {logs} = timelineContext ;

    const totalFriends = friends.length;
    const onTrack = friends.filter((friend)=> friend.status === "On-Track").length ;
    const needAttention = friends.filter((friend)=> 
        (friend.status ===  "Almost Due") || (friend.status === "Overdue")
    ).length ;

    const now = new Date() ;
    const interactionThisMonth = logs.filter((log)=> {
        const logDate = new Date(log.date) ;

        return(
            logDate.getMonth() === now.getMonth() &&
             logDate.getFullYear() === now.getFullYear() 
        );
    }).length ;

    const summaryCards = [
        {id: 1, count : totalFriends, label: 'Total Friends'},
        {id: 2, count : onTrack, label: 'On Track'},
        {id: 3, count : needAttention, label: 'Need Attention'},
        {id: 4, count : interactionThisMonth, label: 'Interactions This Month'},
    ];

    return (
        <div className='text-center px-8 lg:px-4'>
            <h2 className='text-xl md:text-4xl lg:text-6xl font-bold text-blue-950'>Friends to keep close in your life</h2>
            <p className="text-gray-700 mt-4 text-sm lg:text-lg">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                <br />relationships that matter most.</p>
            <div className="mt-6">
                <button className="btn bg-green-950 text-white"><IoMdAdd />Add a Friend</button>
            </div>

            {/* summary card */}
            <div className="mt-12 px-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 card bg-base-100 max-w-5xl mx-auto">
                    {
                        summaryCards.map((card) => 
                           <div key={card.id} 
                                className="card flex flex-col bg-base-100 shadow-lg border border-base-200 rounded-xl">
                                <div className="card-body flex flex-col items-center py-6">
                                    <h2 className="text-3xl text-green-950 font-bold">{card.count}</h2>
                                    <p>{card.label}</p>
                                </div>
                                
                            </div> 
                        )
                    }
                </div>
                {/* divider */}
                <div className="divider max-w-5xl mx-auto my-12"></div>
            </div>
        </div>
    );
};

export default Banner;