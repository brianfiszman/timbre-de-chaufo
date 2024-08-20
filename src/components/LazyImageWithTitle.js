import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";
import { Picture } from "./Picture";
import { Subtitle } from "./Subtitle";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export function LazyImageWithTitle({ src, alt, size, children, theme }) {
  return (
    <Suspense fallback={<BarLoader color={theme.colors.primary} />}>
      <Subtitle theme={theme}>{children}</Subtitle>
      <Zoom>
        <Picture src={src} alt={alt} size={size} loading="lazy" />
      </Zoom>
    </Suspense>
  );
}
