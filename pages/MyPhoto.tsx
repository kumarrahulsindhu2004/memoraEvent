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
          {/* <span></span> */}

          <img src="cloud.png" alt="Cloud left" />
          <p>{cloudLeft}</p>
        </div>

        <div className="cloud right">
          {/* <span></span> */}
          <img src="cloud.png" alt="Cloud right" />
          <p>{cloudRight}</p>
        </div>

        {/* MIDDLE SHAPES */}
        <div className="heart">
          <img src="heart.png" alt="Heart" />
          <p>#ForAllSummit</p>
        </div>

        <div className="circle">
          <img src="oval.png" alt="Circle" />
          <p>#GPTW</p>
        </div>

        {/* BOTTOM OVAL */}
        <div className="oval">
          {/* <img src="oval.png" alt="Oval" /> */}
          <p>{bottomText}</p>
        </div>
      </div>

      {/* CONTROLS */}


   <div className="editor-panel">

  <h3>Text Editor</h3>

  <div className="field">
    <label>Left Cloud Text</label>
    <div className="input-wrap">
      <input
        maxLength={30}
        value={cloudLeft}
        onChange={(e) => setCloudLeft(e.target.value)}
        placeholder="Thinking..."
      />
      <span>{cloudLeft.length}/30</span>
    </div>
  </div>

  <div className="field">
    <label>Right Cloud Text</label>
    <div className="input-wrap">
      <input
        maxLength={30}
        value={cloudRight}
        onChange={(e) => setCloudRight(e.target.value)}
        placeholder="Dreaming..."
      />
      <span>{cloudRight.length}/30</span>
    </div>
  </div>

  <div className="field">
    <label>Bottom Oval Text</label>
    <div className="input-wrap textarea">
      <textarea
        maxLength={80}
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
        placeholder="Memories for Life... and beyond!"
      />
      <span>{bottomText.length}/80</span>
    </div>
  </div>

  <button className="download-btn" onClick={handleDownload}>
    ⬇ Download Image
  </button>

</div>












     


      {/* PURE CORE CSS */}
      <style>{`

      .input-group {
  position: relative;
}

.input-group span {
  position: absolute;
  right: 14px;
  bottom: 10px;
  font-size: 11px;
  color: #94a3b8;
}


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



        .cloud {
  position: absolute;
  top: 8%;
  width: 200px;
  z-index: 3;
  text-align: center;
}

.cloud img {
  width: 100%;
  height: auto;
}

.cloud.left { left: 4%; }
.cloud.right { right: 4%; }




// .cloud p {
//   position: absolute;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   font-size: 13px;
//   font-weight: 700;
//   color: #171b22ff;
//   padding: 0 14px;
//   text-align: center;
// }


.cloud p {
  position: absolute;
  inset: 19%;
  display: flex;
  align-items: center;
  justify-content: center;
      
  font-size: 14px;
  font-weight: 700;
  color: #171b22ff;
  text-align: center;

  line-height: 1.2;
  word-break: break-word;
  overflow-wrap: anywhere;
  pointer-events: none;
}





.heart {
  position: absolute;
  left: 8%;
  top: 55%;
  width: 130px;
}

.heart img {
  width: 100%;
}



// .heart p {
//   position: absolute;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   font-size: 13px;
//   font-weight: 800;
//   color: white;
//   text-align: center;
//   padding: 0 10px;
// }


.heart p {
  position: absolute;
  inset: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
        top:2%;
  font-size: 13px;
  font-weight: 800;
  color: black
  text-align: center;

  line-height: 1.2;
  pointer-events: none;
}



/* ================= CIRCLE ================= */ 
/* ================= CIRCLE (OVAL IMAGE + TEXT OVERLAY) ================= */
.circle {
  position: absolute;
  right: 7%;
  top: 50%;
  width: 160px;
  z-index: 4;
  text-align: center;
}

.circle img {
  width: 100%;
  height: auto;
}

.circle p {
  position: absolute;
  inset: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
      left:10%;
      bottom:30%;
  font-size: 13px;
  font-weight: 800;
  color: #0f172a;
  text-align: center;

  line-height: 2.5;
  pointer-events: none;
}





 /* ================= OVAL ================= */ 
 .oval {
  position: absolute; 
  bottom: 6%; 
  left: 50%;
   transform: translateX(-50%);
  width: 70%; background: white; 
  padding: 24px 32px; 
  border-radius: 60px; 
  text-align: center;
  font-weight: 700;
  box-shadow: 0 20px 40px rgba(0,0,0,.25);
  
  }
        


 /* ================= EDITOR PANEL ================= */
.editor-panel {
  margin: 40px auto 0;
  max-width: 560px;
  background: #ffffff;
  padding: 28px;
  border-radius: 22px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.08);
}

.editor-panel h3 {
  margin: 0 0 22px;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  text-align: center;
}

/* ================= FIELD ================= */
.field {
  margin-bottom: 18px;
}

.field label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  margin-bottom: 6px;
}

/* ================= INPUT WRAP ================= */
.input-wrap {
  position: relative;
}

.input-wrap input,
.input-wrap textarea {
  width: 100%;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1.5px solid #e5e7eb;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s ease;
}

.input-wrap textarea {
  resize: none;
  height: 100px;
}

/* focus */
.input-wrap input:focus,
.input-wrap textarea:focus {
  border-color: #e11d48;
  box-shadow: 0 0 0 4px rgba(225, 29, 72, 0.15);
}

/* counter */
.input-wrap span {
  position: absolute;
  right: 14px;
  bottom: 10px;
  font-size: 11px;
  color: #94a3b8;
}

/* ================= DOWNLOAD BUTTON ================= */
.download-btn {
  margin-top: 26px;
  width: 100%;
  padding: 14px 0;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #e11d48, #fb7185);
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.download-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 30px rgba(225,29,72,0.35);
}

@media (max-width: 768px) {

  /* CLOUDS */
  .cloud {
    width: 22%;
    top: 0.9%;
  }

  .cloud.left { left: 3%; }
  .cloud.right { right: 3%; }

  .cloud p {
    font-size: 5px;
    inset: 24%;
  }

  /* HEART */
  .heart {
    width: 25%;
    top: 45%;
  }

  .heart p {
    font-size: 5px
  }

  /* CIRCLE (oval.png) */
  .circle {
    width: 14%;
    right: 5%;
    top: 40%;
  }

  .circle p {
    font-size: 5px;
    left:10%;
    bottom:30%;
    inset: 22%;
    line-height: 1.1;
  }

  /* BOTTOM OVAL */
  .oval {
    width: 78%;
    bottom: 4%;
    padding: 10px 14px;
  }

  .oval p {
    font-size:5px;
    line-height: 1.25;
  }
}

@media (max-width: 420px) {

  .cloud {
    width: 30%;
  }

  .heart,
  .circle {
    width: 20%;
  }


  .oval {
    width: 86%;
  }

  .oval p {
    font-size: 5px;
  }
}


      `}</style>
    </div>
  );
}
