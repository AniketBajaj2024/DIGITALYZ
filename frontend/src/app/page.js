"use client";
import { useState } from "react";
import FileUpload from "../components/FileUpload";
import DataGrid from "../components/DataGrid";

export default function Home() {
  const [data, setData] = useState([]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📂 Upload Client / Task / Worker File</h1>
      <FileUpload onDataParsed={setData} />

      {data.length > 0 && (
        <>
          <h2 className="text-lg font-semibold mt-6">Parsed Table:</h2>
          <DataGrid data={data} onDataChange={setData} />
        </>
      )}
    </main>
  );
}
