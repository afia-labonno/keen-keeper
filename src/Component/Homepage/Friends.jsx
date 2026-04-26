import React from 'react';
import FriendCard from './FriendCard';

const Friends = async () => {
    const data = await fetch("http://localhost:3000/data.json");
    const friends = await data.json();
    // console.log('friends : ', friends)

    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-[120px] py-12'>
            <div className='max-w-5xl mx-auto'>
                <h2 className='text-left text-xl md:text-3xl text-blue-950 font-bold mb-8'>Your Friends</h2>
            </div>
            

            <div className='max-w-5xl mx-auto '>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                    {
                        friends.map((friend) =>
                            <FriendCard key={friend.id} friend={friend} />
                        )
                    }
                </div>
            </div>

        </div>

    );
};

export default Friends;