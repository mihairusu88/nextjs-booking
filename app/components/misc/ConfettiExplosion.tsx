import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiExplosion = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [confettiSize, setConfettiSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  }, [showConfetti]);

  useEffect(() => {
    setConfettiSize({ width: document.body.clientWidth, height: document.body.clientHeight });
  }, []);

  return <Confetti width={confettiSize.width} height={confettiSize.height} recycle={showConfetti} />;
};

export default ConfettiExplosion;
