import { IoMdAdd } from "react-icons/io";

const Banner = () => {

    const summaryCards = [
        {id: 1, count : 6, label: 'Total Friends'},
        {id: 1, count : 3, label: 'On Track'},
        {id: 1, count : 2, label: 'Need Attention'},
        {id: 1, count : 6, label: 'Interactions This Month'},
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
                                className="card flex flex-col bg-base-100 shadow-md rounded-xl">
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