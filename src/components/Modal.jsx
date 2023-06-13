import React from "react";
import { GrClose } from "react-icons/gr";

const Modal = () => {
  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col items-center">
          <p className="text-lg font-bold">So how does it work?</p>
          <p className="py-4">
            Toon shading, also known as cel shading, is a technique used in
            computer graphics to create a stylized or cartoon-like appearance
            for 3D models or animations. It aims to mimic the flat shading and
            bold outlines typically seen in traditional 2D cartoons.
          </p>
          <p className="py-4">
            Toon shading works by modifying the rendering process to produce a
            simplified and non-photorealistic look. Here's a general overview of
            how it typically works:
          </p>
          <ol>
            <li>
              <strong>Lighting Calculation</strong>: Toon shading starts with
              the calculation of lighting. However, instead of using complex
              lighting models that produce smooth gradients and realistic
              shadows, simplified lighting models are employed. Commonly used
              models include a simple Lambertian model (based on diffuse
              reflection) or a stepped lighting model (based on discrete
              lighting levels).
            </li>
            <li>
              <strong>Color Quantization</strong>: The next step involves
              quantizing the colors of the scene. This means reducing the range
              of colors to create a more graphic and stylized appearance.
              Typically, a limited color palette is used to achieve the desired
              effect.
            </li>
            <li>
              <strong>Edge Detection</strong>: To create the characteristic bold
              outlines of cartoon-style art, an edge detection algorithm is
              applied. This algorithm identifies the boundaries between
              different regions or objects in the scene. Common edge detection
              techniques include the Sobel operator, Canny edge detector, or
              simple thresholding.
            </li>
            <li>
              <strong>Outline Rendering</strong>: Once the edges are detected,
              the outline is rendered around the edges using a thick line or a
              series of polygons. The outline can be a single color or have a
              gradient or texture for more artistic variation.
            </li>
            <li>
              <strong>Color Rendering</strong>: After the outline is rendered,
              the interior of the objects or characters is filled with flat
              colors. The color can be solid or have a shaded appearance based
              on the simplified lighting model used in step 1. This step adds to
              the overall stylized look of the scene.
            </li>
            <p className="py-4">
              By combining these steps, the toon shader creates a simplified and
              artistic rendering of 3D models, reminiscent of traditional
              hand-drawn cartoons.
            </p>
            <p className="py-4">
              It's important to note that there are different variations and
              techniques within toon shading, and artists or developers can
              customize the process to achieve specific visual styles and
              effects. The exact implementation may vary depending on the
              software or rendering engine being used.
            </p>
          </ol>
          <label
            className="btn-sm btn fixed right-2 top-2 cursor-pointer bg-red-500 text-white hover:bg-red-300"
            htmlFor="my_modal_7"
          >
            <GrClose />
          </label>
          <label
            className="btn-info btn mb-2 mt-4 w-36 border-none bg-teal-700 text-white"
            htmlFor="my_modal_7"
          >
            DONE READING
          </label>
        </div>
        <label className="modal-backdrop cursor-pointer" htmlFor="my_modal_7" />
      </div>
    </>
  );
};

export default Modal;
