# iOS Safari `position: fixed` Sticky Bar Drift - Root Cause & Fix

> Discovered and resolved on the Waypoint Franchise Advisors site (March 2025).
> Applies to ANY Next.js / React project with a mobile sticky bottom bar.

## The Symptom

A `position: fixed; bottom: 0` sticky bar drifts to the middle of the viewport
when scrolling down on iOS Safari, and snaps back to the bottom when scrolling up.
Works fine on desktop and Chrome - iOS Safari specific.

## Root Cause #1: `overflow-x` on `<body>` (affects Chrome + Safari)

**CSS Spec trap + Safari Bug #745729 (unresolved through Safari 18.3):**

Setting `overflow-x: clip` (or `hidden`) on `<body>` causes Safari to treat the
body as a scroll container. When body is the scroll container, `position: fixed`
resolves relative to the body, not the viewport - causing drift.

This is NOT obvious because `overflow-x: clip` was introduced specifically to avoid
this vs `overflow-x: hidden`. But:
1. CSS spec Level 3 Overflow: if `clip` is set on one axis without explicitly setting the
   other to `clip` or `visible`, the value computes to `hidden`.
   2. Safari Bug #745729: Safari also incorrectly applies `clip` to the Y-axis.

   **Fix:** Move `overflow-x: clip` off `<body>` onto an inner wrapper div.

   ```css
   /* globals.css - WRONG */
   body {
     overflow-x: clip; /* [X] breaks position:fixed in Safari */
     }

     /* globals.css - CORRECT */
     body {
       /* No overflow property on body */
       }

       /* In your layout wrapper component */
       <div style={{ overflowX: "clip" }}>  {/* [OK] safe on inner div */}
         {children}
         </div>
         ```

         ## Root Cause #2: WebKit Bug #297779 (Safari only, even after Root Cause #1 is fixed)

         After fixing Root Cause #1, Chrome was fixed but Safari still drifted.

         **WebKit Bug #297779** (Apple internal: `rdar://problem/159439271`): The compositor
         GPU layer for `position: fixed` elements drifts during scroll direction changes
         on iOS Safari. This is a system-level rendering engine bug - it happens even
         with correct CSS containing blocks and is unrelated to JavaScript.

         Characteristics:
         - Drift occurs specifically when scroll direction changes (down -> middle, up -> bottom)
         - Browser DevTools reports the element at the CORRECT position - only the GPU layer is wrong
         - Partially patched in iOS 16.1 but still widespread across device/iOS versions

         **Fix:** Lock `html` and `body` to stable viewport dimensions on iOS only using a
         feature-detection query. This stabilizes the compositor's reference frame.

         ```css
         /* globals.css */
         @supports (-webkit-touch-callout: none) {
           /* iOS Safari only */
             html {
                 height: 100%;
                     overflow: hidden; /* pins layout viewport */
                       }
                         body {
                             height: 100%;
                                 overflow-y: auto; /* body becomes the scroll container */
                                     -webkit-overflow-scrolling: touch; /* restores momentum scrolling */
                                       }
                                       }
                                       ```

                                       > **Important side effect:** When body is the scroll container, `window.scrollY = 0`
                                       > and `window.scroll` events don't fire. Use `document.body.scrollTop` instead.

                                       .scrollTop` instead.

                                       ## Root Cause #3: `visualViewport` API is the wrong tool (all attempts failed)

                                       Multiple attempts were made using `window.visualViewport` to correct the bar position
                                       with `translateY` or dynamic `bottom` values. **All failed.** Why:

                                       - `vv.resize` fires only AFTER the URL bar animation completes - too late
                                       - `vv.scroll` fires on every pan gesture (pinch-zoom panning, not URL bar)
                                         and corrupts the `bottom` calculation during normal scroll
                                         - The API was designed for keyboard and pinch-zoom scenarios, not URL bar transitions

                                         **Do not use `visualViewport` for sticky bottom bars on iOS.**

                                         ## Complete Implementation (Next.js / React)

                                         ### 1. `globals.css`

                                         ```css
                                         body {
                                           /* No overflow property - any overflow can create scroll container in Safari */
                                             background: ...;
                                               font-family: ...;
                                               }

                                               @supports (-webkit-touch-callout: none) {
                                                 html { height: 100%; overflow: hidden; }
                                                   body { height: 100%; overflow-y: auto; -webkit-overflow-scrolling: touch; }
                                                   }
                                                   ```

                                                   ### 2. Marketing/Root Layout wrapper

                                                   ```tsx
                                                   /* Move overflow-x clipping here, NOT on body */
                                                   <div style={{ overflowX: "clip", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                                                     {children}
                                                     </div>
                                                     ```

                                                     ### 3. Sticky Bar Component (React + portal)

                                                     ```tsx
                                                     "use client";
                                                     import { useEffect, useRef, useState } from "react";
                                                     import { createPortal } from "react-dom";

                                                     export default function MobileStickyBar() {
                                                       const [visible, setVisible] = useState(false);
                                                         const [mounted, setMounted] = useState(false);
                                                           const barRef = useRef<HTMLDivElement>(null);

                                                             useEffect(() => {
                                                                 setMounted(true);

                                                                     // When @supports iOS fix is active, body is the scroll container.
                                                                         // window.scrollY = 0 always. Must read document.body.scrollTop.
                                                                             const getScrollY = () => document.body.scrollTop || window.scrollY || 0;

                                                                                 const handleScroll = () => {
                                                                                       setVisible(getScrollY() > window.innerHeight * 0.8);
                                                                                           };

                                                                                               // Desktop/Chrome: window scroll
                                                                                                   window.addEventListener("scroll", handleScroll, { passive: true });
                                                                                                       // iOS Safari: body is scroll container, events fire on body
                                                                                                           document.body.addEventListener("scroll", handleScroll, { passive: true });
                                                                                                               handleScroll();
                                                                                                               
                                                                                                                   return () => {
                                                                                                                         window.removeEventListener("scroll", handleScroll);
                                                                                                                               document.body.removeEventListener("scroll", handleScroll);
                                                                                                                                   };
                                                                                                                                     }, []);
                                                                                                                                     
                                                                                                                                       if (!mounted) return null;
                                                                                                                                       
                                                                                                                                         return createPortal(
                                                                                                                                             <div
                                                                                                                                                   ref={barRef}
                                                                                                                                                         style={{
                                                                                                                                                                 position: "fixed",
                                                                                                                                                                         bottom: 0,
                                                                                                                                                                                 left: 0,
                                                                                                                                                                                         right: 0,
                                                                                                                                                                                                 zIndex: 9999,
                                                                                                                                                                                                         opacity: visible ? 1 : 0,
                                                                                                                                                                                                                 pointerEvents: visible ? "auto" : "none",
                                                                                                                                                                                                                         transition: "opacity 250ms ease",
                                                                                                                                                                                                                                 // safe-area-inset-bottom requires viewport-fit=cover in metadata
                                                                                                                                                                                                                                         paddingBottom: "env(safe-area-inset-bottom, 0px)",
                                                                                                                                                                                                                                               }}
                                                                                                                                                                                                                                                   >
                                                                                                                                                                                                                                                         {/* CTA buttons */}
                                                                                                                                                                                                                                                             </div>,
                                                                                                                                                                                                                                                                 document.body
                                                                                                                                                                                                                                                                   );
                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                   ```
                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                   ### 4. Add `viewport-fit=cover` (Next.js App Router)
                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                   ```tsx
                                                                                                                                                                                                                                                                   // In your marketing layout or root layout
                                                                                                                                                                                                                                                                   import type { Viewport } from "next";
                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                   export const viewport: Viewport = {
                                                                                                                                                                                                                                                                     width: "device-width",
                                                                                                                                                                                                                                                                       initialScale: 1,
                                                                                                                                                                                                                                                                         viewportFit: "cover", // required for env(safe-area-inset-bottom) to work
                                                                                                                                                                                                                                                                         };
                                                                                                                                                                                                                                                                         ```
                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                         ## What NOT to Do (Failed Approaches - Don't Repeat)
                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                         | Approach | Why It Failed |
                                                                                                                                                                                                                                                                         |----------|--------------|
                                                                                                                                                                                                                                                                         | `translateZ(0)` / GPU hints | Doesn't fix viewport math |
                                                                                                                                                                                                                                                                         | Remove `backdrop-filter` | Unrelated |
                                                                                                                                                                                                                                                                         | `overflow-x: clip` on body | Creates scroll container in Safari (the bug itself) |
                                                                                                                                                                                                                                                                         | `visualViewport` + `vv.resize` + `translateY` | Fires after animation ends, wrong direction |
                                                                                                                                                                                                                                                                         | `visualViewport` + `vv.scroll` + `bar.style.bottom` | Fires on every pan gesture, corrupts value |
                                                                                                                                                                                                                                                                         | `vv.resize` only + `bar.style.bottom` | Fires too late, intermediate frames missed |
                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                         ## References
                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                         - **CSS Spec:** <https://www.w3.org/TR/css-overflow-3/>
                                                                                                                                                                                                                                                                         - **Safari Bug #745729:** `overflow-x: clip` clips Y-axis (Apple Developer Forums, 2024)
                                                                                                                                                                                                                                                                         - **WebKit Bug #297779:** Fixed elements drift on scroll direction change (iOS 16, rdar://159439271)
                                                                                                                                                                                                                                                                         - **Research credit:** Perplexity, ChatGPT, Claude, Gemini - March 2025 discovery session
                                                                                                                                                                                                                                                                         - **Live fix:** [waypoint-core-system commit 46de068](https://github.com/Franscale1922/waypoint-core-system/commit/46de068)
                                                                                                                                                                                                                                                                         
