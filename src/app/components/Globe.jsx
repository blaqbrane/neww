"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
const Globe = () => {
  const circlePathRef = useRef(null);
  const itemsRef = useRef([]);
  const tl = gsap.timeline({ paused: true, reversed: true });
  const tracker = { item: 0 };

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
    circlePath.id = "circlePath";
    circlePathRef.current.prepend(circlePath);

    const items = gsap.utils.toArray(".item");
    itemsRef.current = items;
    const numItems = items.length;
    const itemStep = 1 / numItems;
    const wrapProgress = gsap.utils.wrap(0, 1);
    const snap = gsap.utils.snap(itemStep);
    const wrapTracker = gsap.utils.wrap(0, numItems);

    gsap.set(items, {
      motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: (i) => gsap.utils.wrap(0, 1, i / items.length + 0.25),
      },
      scale: 0.9,
    });

    tl.to(".wrapper", {
      rotation: 360,
      transformOrigin: "center",
      duration: 1,
      ease: "none",
    });

    tl.to(
      items,
      {
        rotation: "-=360",
        transformOrigin: "center center",
        duration: 1,
        ease: "none",
      },
      0
    );

    tl.to(
      tracker,
      {
        item: numItems,
        duration: 1,
        ease: "none",
        modifiers: {
          item: (value) => wrapTracker(numItems - Math.round(value)),
        },
      },
      0
    );

    // Add event listeners for item clicks
    items.forEach(function (el, i) {
      el.addEventListener("click", function () {
        var current = tracker.item,
          activeItem = i;

        if (i === current) {
          return;
        }

        // Set active item to the item that was clicked and remove active class from all items
        document.querySelector(".item.active").classList.remove("active");
        items[activeItem].classList.add("active");

        var diff = current - i;

        if (Math.abs(diff) < numItems / 2) {
          moveWheel(diff * itemStep);
        } else {
          var amt = numItems - Math.abs(diff);

          if (current > i) {
            moveWheel(amt * -itemStep);
          } else {
            moveWheel(amt * itemStep);
          }
        }
      });
    });

    // Add event listeners for "next" and "prev" buttons
    document
      .getElementById("next")
      .addEventListener("click", () => moveWheel(-itemStep));
    document
      .getElementById("prev")
      .addEventListener("click", () => moveWheel(itemStep));
  }, []);

  function moveWheel(amount) {
    let progress = tl.progress();
    tl.progress(wrapProgress(snap(tl.progress() + amount)));
    let next = tracker.item;
    tl.progress(progress);

    document.querySelector(".item.active").classList.remove("active");
    itemsRef.current[next].classList.add("active");

    gsap.to(tl, {
      progress: snap(tl.progress() + amount),
      modifiers: {
        progress: wrapProgress,
      },
    });
  }

  return (
    <div>
      <div class="container">
        <div class="wrapper">
          <div class="item 1 active">1</div>
          <div class="item 2">2</div>
          <div class="item 3">3</div>
          <div class="item 4">4</div>
          <div class="item 5">5</div>
          <div class="item 6">6</div>
          <div class="item 7">7</div>
          <div class="item 8">8</div>
          <svg viewBox="0 0 300 300">
            <circle id="holder" class="st0" cx="151" cy="151" r="150" />
          </svg>
        </div>
        <div class="start">&#8592; Active</div>
      </div>
      <div class="container" style="text-align: center;">
        <button id="prev">Prev</button>
        <button id="next">Next</button>
      </div>
    </div>
  );
};

export default Globe;
