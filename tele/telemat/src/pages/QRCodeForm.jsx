import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeForm = () => {
  const [formData, setFormData] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4(); // Generate unique ID
    setUniqueId(id);
    setQrValue(`${formData}-${id}`);
  };

  const handleDownload = () => {
    const canvas = document.getElementById("qrCodeCanvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `QRCode-${uniqueId}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Code Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Data"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px", width: "200px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Generate QR Code
        </button>
      </form>
      {qrValue && (
        <div style={{ marginTop: "20px" }}>
          <QRCodeCanvas id="qrCodeCanvas" value={qrValue} size={200} />
          <br />
          <button
            onClick={handleDownload}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default QRCodeForm;
