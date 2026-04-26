import Image from "next/image";
import Link from "next/link";


const FriendCard = ({ friend }) => {
    return (

        <Link href={`/${friend.id}`}>


            <div className=" space-y-4">
                <div className="card bg-base-100 w-full max-w-xs shadow-lg border border-base-200 py-6">
                    <figure>
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </figure>
                    <div className="card-body flex flex-col items-center justify-center">
                        <h2 className="card-title">
                            {friend.name}
                        </h2>
                        <p>{friend.days_since_contact}d ago</p>

                        <div className="justify-center items-center space-y-2">
                            {/* tags */}
                            <div className="flex gap-2">
                                {
                                    friend.tags.map((tag, index) => (
                                        <div key={index} className=" badge badge-soft badge-success p-2 text-xs font-semibold">{tag}</div>
                                    ))}
                            </div>

                            <div className="flex flex-col items-center">
                                <div className={`badge text-white font-bold
                                        ${friend.status === "On-Track" ? "badge-success"
                                        : friend.status === "Almost Due" ? "badge-warning"
                                            : "badge-error"
                                    }`}
                                >
                                    {friend.status}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Link>

    );
};

export default FriendCard;