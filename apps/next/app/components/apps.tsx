const getApps = async () => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
  await sleep(1000)
  return apps
}

const apps = [
  {
    name: 'CMT',
    description: 'Config Management Tool',
    roles: ['IM', 'Developer', 'QA'],
  },
  {
    name: 'Matrix',
    description: 'Scriptable Test Box',
    roles: ['QA', 'Developer'],
  },
  {
    name: 'Switchboard',
    description: 'Manage Stuff',
    roles: ['Admin'],
  },
]

export default async function Index() {
  const apps = await getApps()
  return (
    <main className="flex w-full flex-col items-center p-5 justify-center animate-fadeIn">
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  ">
        {apps.map((app, appIndex) => (
          <li
            key={appIndex}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-xl shadow-slate-300 border-gray-200 border-2 hover:bg-blue-200 hover:shadow-blue-200 hover:border-blue-200 duration-500 transition-all"
          >
            <div className="flex flex-1 flex-col p-8">
              <h3 className="mt-3 text-xl font-medium text-gray-900">{app.name}</h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-md text-gray-500">{app.description}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  {app.roles.map((role, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 mx-1"
                    >
                      {role}
                    </span>
                  ))}
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
