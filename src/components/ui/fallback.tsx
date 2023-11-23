'use client'

import React from 'react';

const Avatar = ({ name }) => {
  const colours = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];

  const nameSplit = name.split(" ");
  const initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();

  const charIndex = initials.charCodeAt(0) - 65;
  const colourIndex = charIndex % 19;

  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = colours[colourIndex];
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "16px Arial";
    context.textAlign = "center";
    context.fillStyle = "#FFF";
    context.fillText(initials, 16, 22);
  }, [colours, colourIndex, initials]);

  return <img src={canvasRef.current.toDataURL()} alt="Avatar" />;
};

export default Avatar;
