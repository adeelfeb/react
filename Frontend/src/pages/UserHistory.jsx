import React from "react";
import { useSelector } from "react-redux";

const UserHistory = () => {
  // Get the user's history from the Redux store
  const userHistory = useSelector((state) => state.auth.userHistory);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4 text-gray-700">Your History</h1>
      {userHistory.length > 0 ? (
        <ul className="space-y-2">
          {userHistory.map((item, index) => (
            <li
              key={index}
              className="p-3 bg-white shadow-md rounded-md border border-gray-200 flex items-start justify-between"
            >
              <div>
                <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
                {item.thumbnailUrl && (
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-16 h-16 rounded-md mt-2"
                  />
                )}
                <p className="text-sm text-gray-600">
                  Watched on: {item.date ? new Date(item.date).toLocaleString() : "N/A"}
                </p>
                <p className="text-sm text-gray-500">{item.description || "No description"}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">
          No history found. Start exploring to see your watch history here.
        </p>
      )}
    </div>
  );
};

export default UserHistory;
