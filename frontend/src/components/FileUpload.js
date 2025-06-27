"use client";
import { useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";

export default function FileUpload({ onDataParsed }) {
  const [fileName, setFileName] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    const fileExt = file.name.split(".").pop();

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;

      if (fileExt === "csv") {
        const parsed = Papa.parse(content, { header: true });
        onDataParsed(parsed.data);
      } else if (fileExt === "xlsx") {
        const workbook = XLSX.read(content, { type: "binary" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet);
        onDataParsed(data);
      } else {
        alert("Unsupported file type. Upload CSV or XLSX only.");
      }
    };

    if (fileExt === "xlsx") reader.readAsBinaryString(file);
    else reader.readAsText(file);
  };

  return (
    <div className="p-4 border rounded bg-gray-100 w-full max-w-md mx-auto">
      <label className="block mb-2 font-bold">Upload CSV or XLSX file:</label>
      <input type="file" accept=".csv, .xlsx" onChange={handleFile} />
      {fileName && <p className="mt-2 text-sm">Uploaded: {fileName}</p>}
    </div>
  );
}
