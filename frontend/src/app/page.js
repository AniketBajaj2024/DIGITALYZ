"use client";
import { useState } from "react";
import FileUpload from "../components/FileUpload";

export default function Home() {
  const [data, setData] = useState([]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📂 Upload Client / Task / Worker File</h1>
      <FileUpload onDataParsed={setData} />

      {data.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Parsed Data Preview:</h2>
          <pre className="bg-gray-200 p-4 rounded max-h-[400px] overflow-auto text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}
