"use client";

const skills = [
  'Next.js', 'TypeScript', 'React',
  'TailwindCSS', 'Python', 'Machine Learning',
  'Java', 'SAP ABAP', 'Android Dev',
  'Git', 'C#', 'C++',
];

export function HeroTerminal() {
  // Group skills into chunks of 3 for display
  const skillChunks = [];
  for (let i = 0; i < skills.length; i += 3) {
    skillChunks.push(skills.slice(i, i + 3));
  }

  return (
    <div className="w-full max-w-lg mx-auto rounded-xl shadow-2xl bg-zinc-900 neonborder backdrop-blur-sm border border-zinc-700">
      {/* Code Editor Header */}
      <div className="flex items-center p-3 border-b border-gray-700">
        <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-4 px-3 py-1 text-xs font-mono text-gray-300 bg-gray-800 rounded-md">
          developer.cpp
        </div>
      </div>

      {/* C++ Code Snippet Body */}
      <div className="p-4 font-mono text-sm text-gray-300 min-h-[300px] overflow-x-auto">
        <pre>
          <code>
            <div><span className="text-gray-500">#include</span> <span className="text-orange-400">{'<vector>'}</span></div>
            <div><span className="text-gray-500">#include</span> <span className="text-orange-400">{'<string>'}</span></div>
            <div><span className="text-gray-500">using namespace</span> <span className="text-orange-400">{'std;'}</span></div>
            <br />
            <div><span className="text-purple-400">class</span> Profile {'{\n'}</div>
            <div><span className="text-purple-400"> public:</span> </div>
            <div className="pl-4"><span className="text-teal-400">string</span> <span className="text-cyan-400">name</span> = <span className="text-orange-400">"Udit Aggarwal"</span>;</div>
            <div className="pl-4"><span className="text-teal-400">string</span> <span className="text-cyan-400">title</span> = <span className="text-orange-400">"Software Developer & Engineer"</span>;</div>
            <div className="pl-4"><span className="text-teal-400">vector{'<string>'}</span> <span className="text-cyan-400">skills</span> = {'{\n'}</div>

            {skillChunks.map((chunk, chunkIndex) => (
              <span key={chunkIndex}>
                {'      '}
                {chunk.map((skill, skillIndex) => (
                  <span key={skill}>
                    <span className="text-orange-400">"{skill}"</span>
                    {skillIndex < chunk.length - 1 ? ', ' : ''}
                  </span>
                ))}
                {chunkIndex < skillChunks.length - 1 ? ',' : ''}
                {'\n'}
              </span>
            ))}

            <div className="pl-4">{'}'}{'\n'}
            
            {/* 👇 NEW BOOLEAN MEMBERS ADDED HERE 👇 */}
            <div className="pl-4"><span className="text-purple-400">bool</span> <span className="text-cyan-400">isHardWorker</span> = <span className="text-purple-400">true</span>;</div>
            <div className="pl-4"><span className="text-purple-400">bool</span> <span className="text-cyan-400">isQuickLearner</span> = <span className="text-purple-400">true</span>;</div>
            <div className="pl-4"><span className="text-purple-400">bool</span> <span className="text-cyan-400">isProblemSolver</span> = <span className="text-purple-400">true</span>;</div>
          
            <div className="pl-4"><span className="text-purple-400">bool</span> <span className="text-cyan-400">isHireable</span>() {'{\n'}</div>
            <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-cyan-400">true</span></div>
            <div className="pl-4">{'}'}</div>
            <div>{'};'}</div>
            </div>
          </code>
        </pre>
      </div>
    </div>
  );
}