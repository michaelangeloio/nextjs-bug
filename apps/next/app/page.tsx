import { FadeIn } from './components/animations'
import AppLogo from '../public/activitystreaklogo.svg'
const getApps = async () => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
  await sleep(1000)
  return apps
}

const apps = [{}]

export default async function Index() {
  await getApps()
  return (
    <FadeIn>
      <main className="flex w-full flex-col items-center p-5 justify-center animate-fadeIn">
        <AppLogo width={298} height={112} className="m-1 mt-2" />
      </main>
    </FadeIn>
  )
}
