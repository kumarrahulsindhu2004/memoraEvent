import React, { useState } from "react";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function MyPhoto() {
  const [imageName, setImageName] = useState("IMG001");
const captureRef = useRef<HTMLDivElement>(null);

  const [cloudLeft, setCloudLeft] = useState("Thinking...");
  const [cloudRight, setCloudRight] = useState("Dreaming...");
  const [bottomText, setBottomText] = useState(
    "Memories for Life... and beyond!"
  );

  const handleDownload = async () => {
  if (!captureRef.current) return;

  const canvas = await html2canvas(captureRef.current, {
    useCORS: true,
    scale: 2,
    backgroundColor: null,
  });

  const link = document.createElement("a");
  link.download = `${imageName}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
};


  return (
    <div className="page">
      <div className="search-box">
  <input
    value={imageName}
    onChange={(e) => setImageName(e.target.value)}
    placeholder="Enter image name (e.g. IMG001)"
  />
  <button>GO</button>
</div>
      {/* IMAGE PREVIEW */}
      <div className="photo-frame" ref={captureRef}>

        <img
  src={`/Image/${imageName}.jpg`}
  alt="Landscape"
  onError={(e) => {
    e.currentTarget.src = "/Image/not-found.jpg";
  }}
/>





        {/* TOP CLOUDS */}
        <div className="cloud left">
          <span></span>
          <p>{cloudLeft}</p>
        </div>

        <div className="cloud right">
          <span></span>
          <p>{cloudRight}</p>
        </div>

        {/* MIDDLE SHAPES */}
        <div className="heart">
          <p>#ForAllSummit</p>
        </div>

        <div className="circle">
          <p>#GPTW</p>
        </div>  

        {/* BOTTOM OVAL */}
        <div className="oval">
          <p>{bottomText}</p>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="controls">
        <input
          maxLength={30}
          value={cloudLeft}
          onChange={(e) => setCloudLeft(e.target.value)}
          placeholder="Left Cloud (30 chars)"
        />

        <input
          maxLength={30}
          value={cloudRight}
          onChange={(e) => setCloudRight(e.target.value)}
          placeholder="Right Cloud (30 chars)"
        />

        <textarea
          maxLength={80}
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          placeholder="Bottom text (80 chars)"
        />
      </div>
      <button className="download-btn" onClick={handleDownload}>
  Download Image
</button>


      {/* PURE CORE CSS */}
      <style>{`

      

        body {
          margin: 0;
          background: #f8fafc;
          font-family: Inter, sans-serif;
        }

        .page {
          padding: 40px;
          max-width: 1100px;
          margin: auto;
        }


        .search-box {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
}

.search-box input {
  width: 260px;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
}

.search-box button {
  padding: 12px 22px;
  border-radius: 999px;
  border: none;
  background: #e11d48;
  color: white;
  font-weight: 700;
  cursor: pointer;
}


        /* ================= PHOTO ================= */
        .photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 2;
          background: white;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,.25);
        }

        .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ================= CLOUD ================= */
    /* ================= REAL CLOUD (PURE CSS) ================= */

.cloud {
  position: absolute;
  top: 10%;

  width: 240px;
  height: 80px;

  background: #ffffff;
  border-radius: 50px;

  box-shadow: 0 12px 30px rgba(0,0,0,0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  z-index: 3;
}

/* cloud bumps */
.cloud::before,
.cloud::after {
  content: "";
  position: absolute;
  background: #ffffff;
  border-radius: 50%;
}

/* left big bump */
.cloud::before {
  width: 90px;
  height: 90px;
  top: -40px;
  left: 20px;
}

/* right big bump */
.cloud::after {
  width: 110px;
  height: 110px;
  top: -55px;
  right: 25px;
}

/* extra small bump */
.cloud span {
  position: absolute;
  width: 70px;
  height: 70px;
  background: #ffffff;
  border-radius: 50%;
  top: -25px;
  left: 90px;
}

/* positioning */
.cloud.left {
  left: 4%;
}

.cloud.right {
  right: 4%;
}

/* text inside cloud */
.cloud p {
  position: relative;
  z-index: 5;

  max-width: 70%;
  margin: 0;

  font-size: 14px;
  font-weight: 700;
  color: #0f172a;

  line-height: 1.2;

  word-break: break-word;
  overflow-wrap: anywhere;
}

        /* ================= HEART ================= */
        .heart {
          position: absolute;
           overflow: visible;
          left: 8%;
          top: 55%;
          width: 150px;
          height: 140px;
          background: #e11d48;
          transform: rotate(-45deg);
        }

        .heart::before,
        .heart::after {
          content: "";
          position: absolute;
          width: 160px;
          z-index: 1;  
          height: 140px;
          background: #e11d48;
          border-radius: 50%;
        }

        .heart::before {
          top: -70px;
          left: 0;
        }

        .heart::after {
          left: 70px;
          top: 0;
        }

       .heart p {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-weight: 800;
  font-size: 14px;              /* 👈 smaller text */
  text-align: center;

  transform: rotate(45deg);
  z-index: 2;                   /* 👈 ABOVE heart layers */

  padding: 0 14px;
  line-height: 1.1;
  pointer-events: none;

  word-break: break-word;
  overflow-wrap: anywhere;
}


        /* ================= CIRCLE ================= */
        .circle {
          position: absolute;
          right: 8%;
          top: 50%;
          width: 160px;
          height: 160px;
          background: #0f172a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
        }

        /* ================= OVAL ================= */
        .oval {
          position: absolute;
          bottom: 6%;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          background: white;
          padding: 24px 32px;
          border-radius: 60px;
          text-align: center;
          font-weight: 700;
          box-shadow: 0 20px 40px rgba(0,0,0,.25);
        }

        /* ================= CONTROLS ================= */
        .controls {
          margin-top: 30px;
          display: grid;
          gap: 14px;
        }

        .controls input,
        .controls textarea {
          padding: 14px 18px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          font-size: 14px;
        }

        .controls textarea {
          resize: none;
          height: 80px;
        }

       /* ================= MOBILE RESPONSIVE PATCH ================= */
@media (max-width: 768px) {

  .page {
    padding: 16px;
  }

  /* Keep landscape but slightly shorter */
  .photo-frame {
    aspect-ratio: 3 / 2;
    border-radius: 18px;
  }

  /* ---------- CLOUDS ---------- */
  .cloud {
    width: 170px;
    height: 58px;
    top: 8%;
  }

  .cloud.left {
    left: 3%;
  }

  .cloud.right {
    right: 3%;
  }

  .cloud::before {
    width: 55px;
    height: 55px;
    top: -26px;
    left: 18px;
  }

  .cloud::after {
    width: 65px;
    height: 65px;
    top: -36px;
    right: 20px;
  }

  .cloud span {
    width: 45px;
    height: 45px;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
  }

  .cloud p {
    font-size: 12px;
    max-width: 75%;
  }

  /* ---------- HEART ---------- */
  .heart {
    width: 120px;
    height: 110px;
    top: 48%;
    left: 6%;
  }

  .heart::before,
  .heart::after {
    width: 120px;
    height: 110px;
  }

  .heart::before {
    top: -55px;
  }

  .heart::after {
    left: 55px;
  }

  .heart p {
    font-size: 11px;
    padding: 0 10px;
  }

  /* ---------- CIRCLE ---------- */
  .circle {
    width: 120px;
    height: 120px;
    top: 48%;
    right: 6%;
    font-size: 12px;
  }

  /* ---------- OVAL ---------- */
  .oval {
    width: 82%;
    bottom: 5%;
    padding: 14px 18px;
    font-size: 12px;
    border-radius: 999px;
  }

  /* ---------- CONTROLS ---------- */
  .controls {
    margin-top: 20px;
  }

  .controls input,
  .controls textarea {
    font-size: 13px;
  }

  .download-btn {
    margin-top: 16px;
    padding: 12px 18px;
    border-radius: 999px;
    font-size: 14px;
  }
}





/* ================= EXTRA SMALL MOBILE (PHONES) ================= */

/* ================= PHONE VIEW – FINAL FIX ================= */
@media (max-width: 480px) {

  /* ---------- CLOUDS ---------- */
  .cloud {
    width: 28%;
    min-width: 100px;
    height: 40px;
    top: 6%;
  }

  .cloud.left { left: 3%; }
  .cloud.right { right: 3%; }

  .cloud::before {
    width: 30px;
    height: 30px;
    top: -14px;
    left: 10px;
  }

  .cloud::after {
    width: 36px;
    height: 36px;
    top: -20px;
    right: 12px;
  }

  .cloud span {
    width: 26px;
    height: 26px;
    top: -12px;
  }

  .cloud p {
    font-size: 9px;
    max-width: 90%;
    line-height: 1.1;
  }

  /* ---------- HEART ---------- */
  .heart {
    width: 70px;
    height: 64px;
    top: 46%;
    left: 5%;
  }

  .heart::before,
  .heart::after {
    width: 70px;
    height: 64px;
  }

  .heart::before { top: -32px; }
  .heart::after { left: 32px; }

  .heart p {
    font-size: 8px;
    padding: 0 6px;
  }

  /* ---------- CIRCLE ---------- */
  .circle {
    width: 70px;
    height: 70px;
    top: 46%;
    right: 5%;
    font-size: 9px;
  }

  /* ---------- OVAL ---------- */
  .oval {
    width: 90%;
    padding: 8px 12px;
    font-size: 9px;
    bottom: 3%;
  }
}



      `}</style>
    </div>
  );
}
 