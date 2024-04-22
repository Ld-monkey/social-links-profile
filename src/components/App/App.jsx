/* eslint-disable jsx-a11y/anchor-is-valid */
import Avatar from '../../assets/images/avatar-jessica.jpeg';

function App() {
  const socialLinks = [
    'Github',
    'Frontend Mentor',
    'Linkedin',
    'Twitter',
    'Instagram',
  ];

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-black text-white">
      <div className="bg-dark-gray container flex w-10/12 max-w-[384px] flex-col items-center rounded-xl p-6 sm:p-10">
        <div className="flex flex-col items-center gap-6">
          <img
            src={Avatar}
            alt="Avatar profile"
            className="size-[88px] rounded-full"
          />
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-semibold">Jessica Randall</h1>
            <h2 className="text-neon-green text-sm font-bold">
              London, United KIngdom
            </h2>
          </div>
          <p className="text-sm">
            &quot;Front-end developer and avid reader.&quot;
          </p>
        </div>
        <ul className="mt-6 w-full space-y-4 font-bold">
          {socialLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="bg-gray hover:bg-neon-green hover:text-gray block h-full w-full rounded-lg p-3 text-center transition-colors delay-75 duration-200 ease-out"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
