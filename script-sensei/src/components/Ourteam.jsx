const people = [
  {
    name: "Suraj Mahto",
    role: "Web Developer",
    imageUrl: "https://th.bing.com/th/id/OIG.dr5Z.epXE06TLL_V.7Y2?pid=ImgGn",
    linkedin: "#",
    twitter: "#",
  },

  {
    name: "Suraj Rajbhar",
    role: "Web Developer",
    imageUrl: "https://th.bing.com/th/id/OIG.dr5Z.epXE06TLL_V.7Y2?pid=ImgGn",
    linkedin: "#",
    twitter: "#",
  },

  {
    name: "Aditya Rajauria",
    role: "Web Developer",
    imageUrl: "https://th.bing.com/th/id/OIG.dr5Z.epXE06TLL_V.7Y2?pid=ImgGn",
    linkedin: "#",
    twitter: "#",
  },

  {
    name: "Sushan Uchil",
    role: "Web Developer",
    imageUrl: "https://th.bing.com/th/id/OIG.dr5Z.epXE06TLL_V.7Y2?pid=ImgGn",
    linkedin: "#",
    twitter: "#",
  },

  // More people...
];

export default function Ourteam() {
  return (
    <div className="flex justify-evenly bg-grey-900 py-24 sm:py-32  ">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-4xl ">
          <h2 className="text-3xl font-bold tracking-tight  text-white sm:text-4xl italic">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400 italic">
            At ScriptSensei, our team is composed of passionate scriptwriters,
            experienced software developers, and creative designers who
            collaborate to create an exceptional script generation experience.
            Collaboratively, our team at ScriptSensei aims to provide a
            comprehensive script generation solution that empowers users,
            whether they are seasoned professionals or aspiring storytellers, to
            bring their creative visions to life.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-400">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
                <div className="flex items-center gap-x-6">
                  {/* <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.linkedin}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.twitter}
                  </p> */}
                  <a href={person.linkedin}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a href={person.twitter}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
