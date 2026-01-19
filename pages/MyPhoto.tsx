// import React, { useState } from "react";
// import html2canvas from "html2canvas";
// import { useRef } from "react";

// export default function MyPhoto() {
//   const [imageName, setImageName] = useState("IMG001");
//   const captureRef = useRef<HTMLDivElement>(null);

//   const [cloudLeft, setCloudLeft] = useState("Thinking...");
//   const [cloudRight, setCloudRight] = useState("Dreaming...");
//   const [bottomText, setBottomText] = useState(
//     "Memories for Life... and beyond!"
//   );

//   // const handleDownload = async () => {
//   //   if (!captureRef.current) return;

//   //   const canvas = await html2canvas(captureRef.current, {
//   //     useCORS: true,
//   //     scale: 2,
//   //     backgroundColor: null,
//   //   });

//   //   const link = document.createElement("a");
//   //   link.download = `${imageName}.png`;
//   //   link.href = canvas.toDataURL("image/png");
//   //   link.click();
//   // };


// const handleDownload = async () => {
//   if (!captureRef.current) return;

//   // wait for fonts
//   if (document.fonts?.ready) {
//     await document.fonts.ready;
//   }

//   // wait for layout
//   await new Promise((res) => setTimeout(res, 200));

//   const scale = Math.max(2, window.devicePixelRatio || 2);

//   const canvas = await html2canvas(captureRef.current, {
//     useCORS: true,
//     scale,
//     backgroundColor: null,
//   });

//   const link = document.createElement("a");
//   link.download = `${imageName}.png`;
//   link.href = canvas.toDataURL("image/png", 1.0);
//   link.click();
// };


//   return (
//     <div className="page">
//       <div className="search-box">
//         <input
//           value={imageName}
//           onChange={(e) => setImageName(e.target.value)}
//           placeholder="Enter image name (e.g. IMG001)"
//         />
//         <button>GO</button>
//       </div>
//       {/* IMAGE PREVIEW */}
//       <div className="photo-frame" ref={captureRef}>

//         <img
//           src={`/Image/${imageName}.jpg`}
//           alt="Landscape"
//           onError={(e) => {
//             e.currentTarget.src = "/Image/not-found.jpg";
//           }}
//         />





//         {/* TOP CLOUDS */}
//         <div className="cloud left">
//           {/* <span></span> */}

//           <img src="cloud.png" alt="Cloud left" />
//           <p>{cloudLeft}</p>
//         </div>

//         <div className="cloud right">
//           {/* <span></span> */}
//           <img src="cloud.png" alt="Cloud right" />
//           <p>{cloudRight}</p>
//         </div>

//         {/* MIDDLE SHAPES */}
//         <div className="heart">
//           <img src="heart.png" alt="Heart" />
//           <p>#ForAllSummit</p>
//         </div>

//         <div className="circle">
//           <img src="oval.png" alt="Circle" />
//           <p>#GPTW</p>
//         </div>

//         {/* BOTTOM OVAL */}
//         <div className="oval">
//           {/* <img src="oval.png" alt="Oval" /> */}
//           <p>{bottomText}</p>
//         </div>
//       </div>

//       {/* CONTROLS */}


//    <div className="editor-panel">

//   <h3>Text Editor</h3>

//   <div className="field">
//     <label>Left Cloud Text</label>
//     <div className="input-wrap">
//       <input
//         maxLength={30}
//         value={cloudLeft}
//         onChange={(e) => setCloudLeft(e.target.value)}
//         placeholder="Thinking..."
//       />
//       <span>{cloudLeft.length}/30</span>
//     </div>
//   </div>

//   <div className="field">
//     <label>Right Cloud Text</label>
//     <div className="input-wrap">
//       <input
//         maxLength={30}
//         value={cloudRight}
//         onChange={(e) => setCloudRight(e.target.value)}
//         placeholder="Dreaming..."
//       />
//       <span>{cloudRight.length}/30</span>
//     </div>
//   </div>

//   <div className="field">
//     <label>Bottom Oval Text</label>
//     <div className="input-wrap textarea">
//       <textarea
//         maxLength={80}
//         value={bottomText}
//         onChange={(e) => setBottomText(e.target.value)}
//         placeholder="Memories for Life... and beyond!"
//       />
//       <span>{bottomText.length}/80</span>
//     </div>
//   </div>

//   <button className="download-btn" onClick={handleDownload}>
//     ⬇ Download Image
//   </button>

// </div>












     


//       {/* PURE CORE CSS */}
//       <style>{`

//       .input-group {
//   position: relative;
// }

// .input-group span {
//   position: absolute;
//   right: 14px;
//   bottom: 10px;
//   font-size: 11px;
//   color: #94a3b8;
// }


//         body {
//           margin: 0;
//           background: #f8fafc;
//           font-family: Inter, sans-serif;
//         }

//         .page {
//           padding: 40px;
//           max-width: 1100px;
//           margin: auto;
//         }


//         .search-box {
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   margin-bottom: 24px;
// }

// .search-box input {
//   width: 260px;
//   padding: 12px 16px;
//   border-radius: 999px;
//   border: 1px solid #e5e7eb;
//   font-size: 14px;
// }

// .search-box button {
//   padding: 12px 22px;
//   border-radius: 999px;
//   border: none;
//   background: #e11d48;
//   color: white;
//   font-weight: 700;
//   cursor: pointer;
// }


//         /* ================= PHOTO ================= */
//         .photo-frame {
//           position: relative;
//           width: 100%;
//           aspect-ratio: 3 / 2;
//           background: white;
//           border-radius: 28px;
//           overflow: hidden;
//           box-shadow: 0 30px 60px rgba(0,0,0,.25);
//         }

//         .photo-frame img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }



//         .cloud {
//   position: absolute;
//   top: 8%;
//   width: 200px;
//   z-index: 3;
//   text-align: center;
// }

// .cloud img {
//   width: 100%;
//   height: auto;
// }

// .cloud.left { left: 4%; }
// .cloud.right { right: 4%; }




// // .cloud p {
// //   position: absolute;
// //   inset: 0;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;

// //   font-size: 13px;
// //   font-weight: 700;
// //   color: #171b22ff;
// //   padding: 0 14px;
// //   text-align: center;
// // }


// .cloud p {
//   position: absolute;
//   inset: 19%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
      
//   font-size: 14px;
//   font-weight: 700;
//   color: #171b22ff;
//   text-align: center;

//   line-height: 1.2;
//   word-break: break-word;
//   overflow-wrap: anywhere;
//   pointer-events: none;
// }





// .heart {
//   position: absolute;
//   left: 8%;
//   top: 55%;
//   width: 130px;
// }

// .heart img {
//   width: 100%;
// }



// // .heart p {
// //   position: absolute;
// //   inset: 0;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;

// //   font-size: 13px;
// //   font-weight: 800;
// //   color: white;
// //   text-align: center;
// //   padding: 0 10px;
// // }


// .heart p {
//   position: absolute;
//   inset: 18%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//         top:2%;
//   font-size: 13px;
//   font-weight: 800;
//   color: black
//   text-align: center;

//   line-height: 1.2;
//   pointer-events: none;
// }



// /* ================= CIRCLE ================= */ 
// /* ================= CIRCLE (OVAL IMAGE + TEXT OVERLAY) ================= */
// .circle {
//   position: absolute;
//   right: 7%;
//   top: 50%;
//   width: 160px;
//   z-index: 4;
//   text-align: center;
// }

// .circle img {
//   width: 100%;
//   height: auto;
// }

// .circle p {
//   position: absolute;
//   inset: 18%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//       left:10%;
//       bottom:30%;
//   font-size: 13px;
//   font-weight: 800;
//   color: #0f172a;
//   text-align: center;

//   line-height: 2.5;
//   pointer-events: none;
// }





//  /* ================= OVAL ================= */ 
//  .oval {
//   position: absolute; 
//   bottom: 6%; 
//   left: 50%;
//    transform: translateX(-50%);
//   width: 70%; background: white; 
//   padding: 24px 32px; 
//   border-radius: 60px; 
//   text-align: center;
//   font-weight: 700;
//   box-shadow: 0 20px 40px rgba(0,0,0,.25);
  
//   }
        


//  /* ================= EDITOR PANEL ================= */
// .editor-panel {
//   margin: 40px auto 0;
//   max-width: 560px;
//   background: #ffffff;
//   padding: 28px;
//   border-radius: 22px;
//   box-shadow: 0 20px 50px rgba(0,0,0,0.08);
// }

// .editor-panel h3 {
//   margin: 0 0 22px;
//   font-size: 18px;
//   font-weight: 700;
//   color: #0f172a;
//   text-align: center;
// }

// /* ================= FIELD ================= */
// .field {
//   margin-bottom: 18px;
// }

// .field label {
//   display: block;
//   font-size: 13px;
//   font-weight: 600;
//   color: #475569;
//   margin-bottom: 6px;
// }

// /* ================= INPUT WRAP ================= */
// .input-wrap {
//   position: relative;
// }

// .input-wrap input,
// .input-wrap textarea {
//   width: 100%;
//   padding: 14px 18px;
//   border-radius: 14px;
//   border: 1.5px solid #e5e7eb;
//   font-size: 14px;
//   font-weight: 500;
//   outline: none;
//   transition: all 0.2s ease;
// }

// .input-wrap textarea {
//   resize: none;
//   height: 100px;
// }

// /* focus */
// .input-wrap input:focus,
// .input-wrap textarea:focus {
//   border-color: #e11d48;
//   box-shadow: 0 0 0 4px rgba(225, 29, 72, 0.15);
// }

// /* counter */
// .input-wrap span {
//   position: absolute;
//   right: 14px;
//   bottom: 10px;
//   font-size: 11px;
//   color: #94a3b8;
// }

// /* ================= DOWNLOAD BUTTON ================= */
// .download-btn {
//   margin-top: 26px;
//   width: 100%;
//   padding: 14px 0;
//   border-radius: 999px;
//   border: none;
//   background: linear-gradient(135deg, #e11d48, #fb7185);
//   color: white;
//   font-size: 15px;
//   font-weight: 700;
//   cursor: pointer;
//   transition: transform 0.2s ease, box-shadow 0.2s ease;
// }

// .download-btn:hover {
//   transform: translateY(-1px);
//   box-shadow: 0 12px 30px rgba(225,29,72,0.35);
// }

// @media (max-width: 768px) {

//   /* CLOUDS */
//   .cloud {
//     width: 22%;
//     top: 0.9%;
//   }

//   .cloud.left { left: 3%; }
//   .cloud.right { right: 3%; }

//   .cloud p {
//     font-size: 5px;
//     inset: 24%;
//   }

//   /* HEART */
//   .heart {
//     width: 25%;
//     top: 45%;
//   }

//   .heart p {
//     font-size: 5px
//   }

//   /* CIRCLE (oval.png) */
//   .circle {
//     width: 14%;
//     right: 5%;
//     top: 40%;
//   }

//   .circle p {
//     font-size: 5px;
//     left:10%;
//     bottom:30%;
//     inset: 22%;
//     line-height: 1.1;
//   }

//   /* BOTTOM OVAL */
//   .oval {
//     width: 78%;
//     bottom: 4%;
//     padding: 10px 14px;
//   }

//   .oval p {
//     font-size:5px;
//     line-height: 1.25;
//   }
// }

// @media (max-width: 420px) {

//   .cloud {
//     width: 30%;
//   }

//   .heart,
//   .circle {
//     width: 20%;
//   }


//   .oval {
//     width: 86%;
//   }

//   .oval p {
//     font-size: 5px;
//   }
// }


//       `}</style>
//     </div>
//   );
// }


















// main ruuing code 

'use client';

import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

export default function MyPhoto() {
  const [imageName, setImageName] = useState("IMG001");
  const captureRef = useRef(null);

  const [cloudLeft, setCloudLeft] = useState(
    "Thinking about ideas, growth, and new possibilities"
  );
  const [cloudRight, setCloudRight] = useState(
    "Dreaming big while learning, building, and improving"
  );
  const [bottomText, setBottomText] = useState(
    "Memories for life are built from small moments, shared smiles, big dreams, and experiences that stay with us forever and inspire the journey ahead"
  );

  /* ================= DOWNLOAD ================= */
  // const handleDownload = async () => {
  //   if (!captureRef.current) return;

  //   // clone for export (prevents mobile layout issues)
  //   const clone = captureRef.current.cloneNode(true);
  //   clone.style.position = "fixed";
  //   clone.style.left = "-9999px";
  //   clone.style.top = "0";
  //   clone.style.width = "1200px";
  //   clone.style.height = "800px";
  //   document.body.appendChild(clone);

  //   if (document.fonts?.ready) await document.fonts.ready;
  //   await new Promise(r => setTimeout(r, 300));

  //   const canvas = await html2canvas(clone, {
  //     useCORS: true,
  //     scale: 2,
  //     backgroundColor: "#ffffff",
  //     windowWidth: 1200,
  //     windowHeight: 800,
  //   });

  //   document.body.removeChild(clone);

  //   const link = document.createElement("a");
  //   link.download = `${imageName}.png`;
  //   link.href = canvas.toDataURL("image/png", 1);
  //   link.click();
  // };


const handleDownload = async () => {
  if (!captureRef.current) return;

  const element = captureRef.current;

  // ✅ Get EXACT preview size
  const rect = element.getBoundingClientRect();
  const width = Math.round(rect.width);
  const height = Math.round(rect.height);

  const canvas = await html2canvas(element, {
    scale: 3,                 // high quality
    backgroundColor: "#ffffff",
    useCORS: true,
    width,
    height,
    windowWidth: document.documentElement.clientWidth,
    windowHeight: document.documentElement.clientHeight,
  });

  const link = document.createElement("a");
  link.download = `${imageName}.png`;
  link.href = canvas.toDataURL("image/png", 1);
  link.click();
};


  return (
    <div className="page">

      {/* SEARCH */}
      <div className="search-box">
        <input
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          placeholder="Enter image name"
        />
        <button>GO</button>
      </div>

      {/* PREVIEW */}
      <div className="photo-frame" ref={captureRef}>
        <img
          src={`/Image/${imageName}.jpg`}
          alt=""
          onError={(e) => (e.currentTarget.src = "/Image/not-found.jpg")}
        />

        {/* LEFT CLOUD (IMAGE FLIPPED ONLY) */}
        <div className="cloud left flip-img">
          <img src="/cloud.png" alt="" />
          <p>{cloudLeft}</p>
        </div>

        {/* RIGHT CLOUD */}
        <div className="cloud right">
          <img src="/cloud.png" alt="" />
          <p>{cloudRight}</p>
        </div>

        {/* LEFT GPTW */}
        <div className="circle left">
          <img src="/oval.png" alt="" />
          <p>#GPTW</p>
        </div>

        {/* RIGHT HEART */}
        <div className="heart right">
          <img src="/heart.png" alt="" />
          <p>#ForAllSummit</p>
        </div>

        {/* BOTTOM TEXT */}
        <div className="oval">
          <p>{bottomText}</p>
        </div>
      </div>

      {/* EDITOR */}
      <div className="editor-panel">
        <h3>Text Editor</h3>

        <div className="field">
          <label>Left Cloud</label>
          <div className="input-wrap">
            <input maxLength={50} value={cloudLeft} onChange={e => setCloudLeft(e.target.value)} />
            <span>{cloudLeft.length}/50</span>
          </div>
        </div>

        <div className="field">
          <label>Right Cloud</label>
          <div className="input-wrap">
            <input maxLength={50} value={cloudRight} onChange={e => setCloudRight(e.target.value)} />
            <span>{cloudRight.length}/50</span>
          </div>
        </div>

        <div className="field">
          <label>Bottom Text</label>
          <div className="input-wrap">
            <textarea maxLength={150} value={bottomText} onChange={e => setBottomText(e.target.value)} />
            <span>{bottomText.length}/150</span>
          </div>
        </div>

        <button className="download-btn" onClick={handleDownload}>
          ⬇ Download Image
        </button>
      </div>

      {/* ================= CSS ================= */}
      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: system-ui, sans-serif;
          background: #f8fafc;
        }

        .page {
          max-width: 1100px;
          margin: auto;
          padding: 16px;
        }

        /* SEARCH */
        .search-box {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-bottom: 16px;
        }

        .search-box input {
          padding: 12px 16px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          flex: 1;
          max-width: 260px;
        }

        .search-box button {
          padding: 12px 24px;
          border-radius: 999px;
          border: none;
          background: #e11d48;
          color: white;
          font-weight: 700;
        }

        /* PHOTO */
        .photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 2;
          overflow: hidden;
          border-radius: 24px;
          background: white;
          box-shadow: 0 30px 60px rgba(0,0,0,.25);
        }

        .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* COMMON TEXT CENTER */
        .cloud p,
        .circle p,
        .heart p,
        .oval p {
          position: absolute;
          inset: 16%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 8px 10px 10px 10px;
          line-height: 1.35;
          word-break: break-word;
          margin: 0;
        }

        /* CLOUDS */
        .cloud {
          position: absolute;
          top: 4%;
          width: 220px;
        }

      
        .cloud img { width: 100%; }

        .cloud.left { left: 3%; }
        .cloud.right { right: 3%; }

        /* 🔥 flip IMAGE ONLY */
        .flip-img img { transform: scaleX(-1); }
        .flip-img p { transform: none; }

        /* GPTW */
        .circle.left {
          position: absolute;
          left: 4%;
          bottom: 30%;
          width: 140px;
        }

    
        .circle img { width: 100%; }

        /* HEART */
        .heart.right {
          position: absolute;
          right: 4%;
          bottom: 30%;
          width: 200px;
        }
          

        .heart img { width: 100%; }

        /* BOTTOM */
        .oval {
          position: absolute;
          bottom: 4%;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          background: white;
          // padding: 0px;
          border-radius: 999px;
          box-shadow: 0 20px 40px rgba(0,0,0,.25);
        }

        .oval p {
          position: static;
          font-size: 15px;
          
        }

        /* EDITOR */
        .editor-panel {
          margin-top: 24px;
          background: white;
          padding: 20px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,.08);
        }

        .field { margin-bottom: 14px; }

        .input-wrap {
          position: relative;
        }

        .input-wrap input,
        .input-wrap textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1.5px solid #e5e7eb;
        }

        .input-wrap span {
          position: absolute;
          right: 10px;
          bottom: 8px;
          font-size: 11px;
          color: #94a3b8;
        }

        .download-btn {
          width: 100%;
          margin-top: 16px;
          padding: 14px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, #e11d48, #fb7185);
          color: white;
          font-weight: 700;
        }


        /* ================= MOBILE RESPONSIVE ================= */
@media (max-width: 768px) {

  /* PHOTO FRAME */
  .photo-frame {
    border-radius: 16px;
  }

  /* CLOUDS */
  .cloud {
    width: 130px;
    top: 3%;
  }

  .cloud.left { left: 2%; }
  .cloud.right { right: 2%; }

  .cloud p {
    inset: 18%;
    font-size: 10px;
    line-height: 1.2;
  }

  /* GPTW */
  .circle.left {
    width: 90px;
    left: 3%;
    bottom: 28%;
  }

  .circle p {
    inset: 20%;
    font-size: 9px;
    line-height: 1.2;
  }

  /* HEART */
  .heart.right {
    width: 70px;
    right: 3%;
    bottom: 28%;
  }

  .heart p {
    inset: 18%;
    font-size: 9px;
    line-height: 1.2;
  }

  /* BOTTOM OVAL */
  .oval {
    width: 92%;
    padding: 12px 16px;
    bottom: 3%;
  }

  .oval p {
    font-size: 11px;
    line-height: 1.35;
    text-align: center;
  }
}

/* ================= SMALL PHONES ================= */
@media (max-width: 420px) {

  .cloud {
    width: 110px;
  }

  .cloud p {
    font-size: 9px;
  }

  .circle.left {
    width: 75px;
  }

  .heart.right {
    width: 80px;
  }

  .circle p,
  .heart p {
    font-size: 8px;
  }

  .oval {
    width: 94%;
    padding: 10px 14px;
  }

  .oval p {
    font-size: 10px;
    line-height: 1.3;
  }
}

/* ================= MOBILE PREVIEW FIX (NO OVERLAP) ================= */
@media (max-width: 600px) {

  /* Clouds smaller + higher */
  .cloud {
    width: 90px;
    top: -2%;
  }

  .cloud.left { left: 2%; }
  .cloud.right { right: 2%; }

  .cloud p {
    inset: 10%;
    font-size: 6px;
    line-height: 1.15;
  }

  /* GPTW – move DOWN & shrink */
  .circle.left {
    width: 70px;
    left: 3%;
    bottom: 30%;
  }

  .circle p {
    inset: 10%;
    font-size: 5px;
  }

  /* HEART – move DOWN & shrink */
  .heart.right {
    width: 50px;
    right: 3%;
    bottom: 30%;
  }

  .heart p {
    inset: 10%;
    font-size: 5px;
  }

  /* Bottom oval pushed lower */
  .oval {
    width: 94%;
    bottom: 1.5%;
    padding: 0px 5px;
  }

  .oval p {
    font-size: 10px;
    line-height: 1.25;
    text-align: center;
  }
}


/* EXTRA SMALL PHONES */
@media (max-width: 380px) {

  .cloud {
    width: 95px;
  }

  .cloud p{
      font-size:7px;
    transform: translateY(-2px);

  }

  .circle.left {
    width: 65px;
  }
    .circle p{
        font-size:6px;
    transform: translateY(-5px);

    }

  .heart.right {
    width: 60px;
  }

    .heart P{
    inset: 1%;
    font-size: 5.5px;
    bottom :20%;
    }

  

  .oval p {
    font-size: 9px;
    transform: translateY(-5px);
  }
}




        
      `}</style>
    </div>
  );
}








