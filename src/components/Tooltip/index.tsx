import  React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { Instance } from '@popperjs/core';

interface Props{
  title: string;
  placement: "bottom-end" | 
  "bottom-start" | 
  "bottom" | 
  "left-end" | 
  "left-start" | 
  "left" | 
  "right-end" | 
  "right-start" | 
  "right" | 
  "top-end" | 
  "top-start" | 
  "top";
  children: ReactNode;
}
export default function AnchorElTooltips({children, title, placement}: Props) {
  const positionRef = React.useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef<Instance>(null);
  const areaRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow
      PopperProps={{
        popperRef,
        anchorEl: {
          getBoundingClientRect: () => {
            return new DOMRect(
              positionRef.current.x,
              areaRef.current!.getBoundingClientRect().y,
              0,
              0,
            );
          },
        },
      }}
    >
      <Box
        ref={areaRef}
        onMouseMove={handleMouseMove}
      >
        {children}
      </Box>
    </Tooltip>
  );
}