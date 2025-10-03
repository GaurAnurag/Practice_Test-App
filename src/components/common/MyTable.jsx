import React from "react";

export default function App() {
  const users = [
    { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 3, first: "Larry", last: "Bird", handle: "@twitter" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center py-10 px-2">
      <div className="w-full max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg">User Table</h2>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white/90 border border-gray-200 rounded-xl">
            <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              <tr>
                <th scope="col" className="py-3 px-4 text-left rounded-tl-xl">#</th>
                <th scope="col" className="py-3 px-4 text-left">First</th>
                <th scope="col" className="py-3 px-4 text-left">Last</th>
                <th scope="col" className="py-3 px-4 text-left rounded-tr-xl">Handle</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={user.id}
                  className={`border-t ${idx % 2 === 0 ? "bg-gray-50/80" : "bg-white/80"} hover:bg-purple-50 transition-colors`}
                >
                  <th scope="row" className="py-2 px-4 font-semibold text-indigo-700">{user.id}</th>
                  <td className="py-2 px-4">{user.first}</td>
                  <td className="py-2 px-4">{user.last}</td>
                  <td className="py-2 px-4">{user.handle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
