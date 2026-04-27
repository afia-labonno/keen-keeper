
import ContactButtons from "@/Component/FriendsInteraction/ContactButtons";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CiEdit, CiVideoOn } from "react-icons/ci";
import { FiArchive } from "react-icons/fi";
import { IoAlarm } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";

const friendPromise = async () => {
    const res = await fetch('https://keen-keeper-one-nu.vercel.app/data.json');
    const data = await res.json();
    return data;
};

export async function generateMetadata({ params }) {
    const { id } = await params;
    const friends = await friendPromise();
    const friend = friends.find((friend) => friend.id === parseInt(id));

    if (!friend) {
        return {
            title: `Not Found - keenKeeper`
        };
    }
    return {
        title: `${friend.name} - KeenKeeper`,
        description: friend.bio,
    };
};

const contacts = [
    { id: 1, type: "call", icon: <LuPhoneCall /> },
    { id: 2, type: "text", icon: <MdOutlineTextsms /> },
    { id: 3, type: "video", icon: <CiVideoOn /> },
];

const FriendDetailsPage = async ({ params }) => {
    const friends = await friendPromise();
    const { id } = await params;
    // console.log("params :", id)
    const friend = friends.find((friend) => friend.id === parseInt(id));
    // console.log("friend:" , friend);
    if (!friend) {
        notFound();
    }

    return (
       
        // <div className="container mx-auto px-20 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-[120px] py-8 my-10
                grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left-column */}
            <div className="lg:col-span-1 space-y-4 ">

                {/* profile */}
                <div className="card bg-base-100 w-full shadow-lg border border-base-200 py-6">
                    <figure>
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </figure>

                    <div className="card-body flex flex-col items-center text-center">
                        <h2 className="card-title">{friend.name}</h2>

                        {/* Status */}
                        <div className={`badge text-white font-bold
                            ${friend.status === "On-Track" ? "badge-success"
                            : friend.status === "Almost Due" ? "badge-warning"
                            : "badge-error"}`}>
                            {friend.status}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 justify-center mt-2">
                            {friend.tags.map((tag, index) => (
                                <span key={index} className="badge badge-soft badge-success text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-500 italic text-lg mt-2 font-semibold">
                            "{friend.bio}"
                        </p>
                        <p className="text-gray-700 text-sm">
                            {friend.email}
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                    <button className="btn w-full p-6 text-gray-600 text-lg font-semibold bg-base-100 shadow-md">
                        <IoAlarm /> Snooze 2 Weeks
                    </button>
                    <button className="btn w-full p-5 text-gray-600 text-lg font-semibold bg-base-100 shadow-md">
                        <FiArchive /> Archive
                    </button>
                    <button className="btn w-full p-5 text-red-600 text-lg font-semibold bg-base-100 shadow-md">
                        <RiDeleteBin2Line /> Delete
                    </button>
                </div>

            </div>


            {/* Right-column */}
            <div className="lg:col-span-2 space-y-6">

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <div className="card shadow-lg border border-base-200 text-center py-8 px-4">
                        <h2 className="text-xl lg:text-3xl font-bold text-green-900">
                            {friend.days_since_contact}
                        </h2>
                        <p className="text-gray-600">Days Since Contact</p>
                    </div>

                    <div className="card shadow-lg border border-base-200 text-center py-8 px-4">
                        <h2 className="text-xl lg:text-3xl font-bold text-green-900">
                            {friend.goal}
                        </h2>
                        <p className="text-gray-600">Goal (Days)</p>
                    </div>

                    <div className="card shadow-lg border border-base-200 text-center py-8 px-4">
                        <h2 className="text-xl lg:text-3xl font-bold text-green-900">
                            {friend.next_due_date}
                        </h2>
                        <p className="text-gray-600">Next Due</p>
                    </div>

                </div>

                {/* Relationship */}
                <div className="card py-8 px-6 shadow-lg border border-base-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                        <h4 className="text-green-900  text-lg lg:text-xl font-semibold">Relationship Goal</h4>
                        <p className="text-gray-600 text-sm">
                            Connect every <span className="font-bold">30 days</span>
                        </p>
                    </div>

                    <button className="btn flex items-center gap-2">
                        <CiEdit /> Edit
                    </button>
                </div>

                {/* check-in */}
                <div className="card py-8 px-6 shadow-lg border border-base-200 space-y-4">
                    <h3 className="text-green-900 font-semibold text-lg lg:text-xl">
                        Quick Check-In
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {contacts.map((contact) => (
                            <div
                                key={contact.id}
                                className="card shadow-lg border border-base-200 flex flex-col items-center p-6"
                            >
                                <div className="text-3xl">
                                    {contact.icon}
                                </div>
                                {/* buttons are client component here */}
                                <ContactButtons type={contact.type} friend={friend}/>
                                {/* <button className="text-lg btn btn-ghost text-gray-700">
                                        {contact.type}
                                </button> */}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FriendDetailsPage;