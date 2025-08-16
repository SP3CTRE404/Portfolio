"use client";

import { useEffect } from 'react';
import TagCloud from 'TagCloud';

const texts = [
  'Next.js', 'React', 'TypeScript',
  'TailwindCSS', 'Python', 'Git',
  'Machine Learning', 'Java', 'SAP', '.NET',
  'Android', 'C#', 'C++', 'Vercel', 'PyTorch'
];

export function SkillSphere() {
  useEffect(() => {
    const container = '.tagcloud';
    const options = {
      radius: 230,
      maxSpeed: 'normal' as const,
      initSpeed: 'normal' as const,
      keep: true,
    };

    const tagCloudInstance = TagCloud(container, texts, options);

    return () => {
      tagCloudInstance.destroy();
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="tagcloud"></div>
    </div>
  );
}