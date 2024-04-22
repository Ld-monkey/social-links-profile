/* eslint-disable jsx-a11y/anchor-is-valid */
import Avatar from '../../assets/images/avatar-jessica.jpeg';

function App() {
  const socialNetworks = [
    'Github',
    'Frontend Mentor',
    'Linkedin',
    'Twitter',
    'Instagram',
  ];

  return (
    <main className="flex h-screen items-center justify-center bg-black text-white">
      <div className="bg-dark-gray flex min-w-[327px] flex-col items-center rounded-xl p-8">
        <img
          src={Avatar}
          alt="Avatar profile"
          className="h-[88px] w-[88px] rounded-full"
        />
        <h1 className="mt-4 text-2xl">Jessica Randall</h1>
        <h2 className="text-neon-green mt-1 text-sm font-bold">
          London, United KIngdom
        </h2>
        <div className="mt-8">
          <p className="text-sm">
            &quot;Front-end developer and avid reader.&quot;
          </p>
        </div>
        <ul className="mt-6 w-full space-y-4 font-bold">
          {socialNetworks.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="bg-gray hover:bg-neon-green hover:text-gray block h-full w-full rounded-lg p-3 text-center transition-colors delay-75 duration-200 ease-out"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
