import { Link } from 'react-router-dom';

const teamMembers = [
  { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', link: '/team/alice' },
  { id: 2, name: 'Bob Smith', role: 'Backend Developer', link: '/team/bob' },
  { id: 3, name: 'Carol Lee', role: 'UI/UX Designer', link: '/team/carol' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold my-8 text-gray-800">Our Team</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700">{member.name}</h2>
            <p className="text-gray-500">{member.role}</p>
            <Link
              to={member.link}
              className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
