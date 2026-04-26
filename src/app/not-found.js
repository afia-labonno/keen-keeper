import Link from "next/link";

const NotFound = () => {
    return (
        <div className="container mx-auto text-center my-48 bg-gray-50 shadow-lg rounded-md w-[80%] p-6">
            <div>
                <h2 className="text-6xl font-semibold text-red-800 mb-6">404 | Not Found</h2>
                <p className="text-xl text-semibold mb-4">Could not find requested resource</p>
                <Link href="/">
                    <button className="btn btn-primary rounded-md">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;