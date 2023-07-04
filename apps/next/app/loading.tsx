import { FadeOut } from './components/animations'
export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <FadeOut>
      <main className="flex w-full flex-col items-center p-10 justify-center">
        <div className="bg-gray-200 w-full h min-h-screen animate-pulse rounded-md"></div>
      </main>
    </FadeOut>
  )
}
