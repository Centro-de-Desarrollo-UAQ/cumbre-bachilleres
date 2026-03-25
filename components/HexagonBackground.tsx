"use client";

import { useEffect, useRef } from "react";

class Hexagon {
  radius: number;
  x: number;
  y: number;
  height: number;

  constructor(height: number, x: number, y: number) {
    this.radius = 0;
    this.x = x;
    this.y = y;
    this.height = height;
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath();
    ctx.moveTo(
      this.x + this.radius * Math.sin(0),
      this.y + this.radius * Math.cos(0),
    );
    for (let side = 0; side < 7; side++) {
      ctx.lineTo(
        this.x + this.radius * Math.sin((side * 2 * Math.PI) / 6),
        this.y + this.radius * Math.cos((side * 2 * Math.PI) / 6),
      );
    }
    ctx.strokeStyle = color;
    ctx.globalAlpha = 0.5;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.2;
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  update(
    ctx: CanvasRenderingContext2D,
    pointerX: number,
    pointerY: number,
    spotlightRadius: number,
    color: string,
  ) {
    const a = pointerX - this.x;
    const b = pointerY - this.y;
    const dist = Math.sqrt(a * a + b * b);

    const maxHexRadius = this.height;
    if (dist <= spotlightRadius) {
      this.radius = maxHexRadius - (dist / spotlightRadius) * maxHexRadius;
    } else {
      this.radius = 0;
    }

    this.draw(ctx, color);
  }
}

class Pointer {
  x: number;
  y: number;
  delayed: { x: number; y: number };

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.delayed = { x, y };
  }

  update(mouseX: number, mouseY: number) {
    this.delayed.x += (mouseX - this.delayed.x) * 0.025;
    this.delayed.y += (mouseY - this.delayed.y) * 0.025;
  }
}

export default function HexagonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hexHeight = 160;
    const hexWidth = (hexHeight * Math.sqrt(3)) / 2;

    const hexArr: { hex: Hexagon; color: string }[] = [];
    const gridCellWidth = hexWidth;
    const gridCellHeight = hexHeight * 0.75;
    const cols = Math.ceil(canvas.width / gridCellWidth) + 1;
    const rows = Math.ceil(canvas.height / gridCellHeight) + 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const xOffset = row % 2 === 0 ? 0 : hexWidth / 2;
        const x = col * gridCellWidth + xOffset;
        const y = row * gridCellHeight;
        const color = "#099bbf";
        hexArr.push({ hex: new Hexagon(hexHeight, x, y), color });
      }
    }

    mouseRef.current = { x: canvas.width / 2, y: canvas.height / 2 };

    const pointer = new Pointer(mouseRef.current.x, mouseRef.current.y);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spotlightRadius = canvas.width * 0.9;

      for (let i = 0; i < hexArr.length; i++) {
        hexArr[i].hex.update(
          ctx,
          pointer.delayed.x,
          pointer.delayed.y,
          spotlightRadius,
          hexArr[i].color,
        );
      }

      pointer.update(mouseRef.current.x, mouseRef.current.y);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none  z-5 mix-blend-multiply"
    />
  );
}
