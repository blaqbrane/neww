// "use client";
// import { useEffect, useRef } from "react";
// import React from "react";
// import gsap from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import iss from "../assets/globe2.jpeg";
// import Image from "next/image";

// const Carousel = () => {
//   const imageRef = useRef(null);
//   useEffect(() => {
//     // Register GSAP plugin
//     gsap.registerPlugin(MotionPathPlugin);

//     // Convert the path to a MotionPath
//     const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
//     circlePath.id = "circlePath";

//     // Append the path to the SVG
//     const svgElement = document.querySelector("svg");
//     svgElement.prepend(circlePath);

//     // Select the items and set initial values
//     const items = gsap.utils.toArray(".item");
//     const numItems = items.length;
//     const itemStep = 1 / numItems;
//     const wrapProgress = gsap.utils.wrap(0, 1);
//     const snap = gsap.utils.snap(itemStep);
//     const wrapTracker = gsap.utils.wrap(0, numItems);
//     const tracker = { item: 0 };

//     gsap.set(items, {
//       motionPath: {
//         path: circlePath,
//         align: circlePath,
//         alignOrigin: [0.5, 0.5],
//         end: (i) => i / items.length,
//       },
//       scale: 0.9,
//     });

//     const tl = gsap.timeline({ paused: true, reversed: true });

//     tl.to(".wrapper", {
//       rotation: 360,
//       transformOrigin: "center",
//       duration: 1,
//       ease: "none",
//     });

//     tl.to(
//       items,
//       {
//         rotation: "-=360",
//         transformOrigin: "center",
//         duration: 1,
//         ease: "none",
//       },
//       0
//     );

//     tl.to(
//       tracker,
//       {
//         item: numItems,
//         duration: 1,
//         ease: "none",
//         modifiers: {
//           item(value) {
//             return wrapTracker(numItems - Math.round(value));
//           },
//         },
//       },
//       0
//     );

//     items.forEach(function (el, i) {
//       el.addEventListener("click", function () {
//         var current = tracker.item,
//           activeItem = i;

//         if (i === current) {
//           return;
//         }

//         // Set active item to the item that was clicked and remove active class from all items
//         document.querySelector(".item.active").classList.remove("active");
//         items[activeItem].classList.add("active");

//         var diff = current - i;

//         if (Math.abs(diff) < numItems / 2) {
//           moveWheel(diff * itemStep);
//         } else {
//           var amt = numItems - Math.abs(diff);

//           if (current > i) {
//             moveWheel(amt * -itemStep);
//           } else {
//             moveWheel(amt * itemStep);
//           }
//         }
//       });
//     });

//     document.getElementById("next").addEventListener("click", function () {
//       return moveWheel(-itemStep);
//     });

//     document.getElementById("prev").addEventListener("click", function () {
//       return moveWheel(itemStep);
//     });

//     function moveWheel(amount, i, index) {
//       let progress = tl.progress();
//       tl.progress(wrapProgress(snap(tl.progress() + amount)));
//       let next = tracker.item;
//       tl.progress(progress);

//       document.querySelector(".item.active").classList.remove("active");
//       items[next].classList.add("active");

//       gsap.to(tl, {
//         progress: snap(tl.progress() + amount),
//         modifiers: {
//           progress: wrapProgress,
//         },
//       });
//     }
//     // Set the rotation of the image to 0 degrees
//     gsap.set(imageRef, { rotation: 0 });
//   }, []);

//   return (
//     <div>
//       <div class="container">
//         <div class="wrapper">
//           <div class="item 1 active">1</div>
//           <div class="item 2">2</div>
//           <div class="item 3">3</div>
//           <div class="item 4">4</div>
//           <div class="item 5">5</div>
//           <div class="item 6">6</div>
//           <div class="item 7">7</div>
//           <div class="item 8">8</div>
//           <svg viewBox="0 0 300 300">
//             <circle id="holder" className="st0" cx="151" cy="151" r="150" />
//           </svg>
//           <div className="center-image">
//             <Image
//               src={iss}
//               alt="Image"
//               className="rounded-full w-[600px] h-[600px]"
//               ref={imageRef}
//             />
//           </div>
//         </div>
//         <div class="start">&#8592; Active</div>
//       </div>
//       <div class="container">
//         <button id="prev">Prev</button>
//         <button id="next">Next</button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
