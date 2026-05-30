"use client";

import { useEffect } from 'react';
import TagCloud from 'TagCloud';

const texts = [
  'Spring Boot', 'ASP.NET Core', 'Flutter',
  'Java', 'C#', 'Dart', 'PostgreSQL', 'Docker',
  'Git', 'Linux', 'RESTful APIs', 'JWT Security',
  'EF Core', 'JPA/Hibernate', 'Next.js', 'TailwindCSS'
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