"use client"

import {useState, useEffect} from "react"

export default function Home() {
  const [assassin, setAssassin] = useState({
    name:"",
    phone:"",
    address:"",
    gender:""
  })

  /* useEffect(() => {
    console.log("Opdateret Assassin-tilstand:", assassin);
  }, [assassin]) */


  async function updateAssassin(ID:number) {
    try{
      
      const response = await fetch('http://localhost:3000/api/getdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Tilføj denne linje
        },
        body: JSON.stringify({
          ID: ID,
        }),
      });

      if (!response.ok) {
        console.error("Fejl ved hentning af data:", response.statusText);
        // Implementer passende fejlhåndtering eller viser en fejlbesked til brugeren.
        return;
      }

      const result = await response.json();

      

      if (result.success) {
        // Find den korrekte person baseret på ID
        const selectedAssassin = result.data.find(
          (assassin) => assassin.ID === ID
        );
  
        if (selectedAssassin) {
          // Opdater state med dataene fra den valgte person
          setAssassin(selectedAssassin);
          console.log("Selected Assassin:", selectedAssassin);
        } else {
          console.error("Fejl: Assassin ikke fundet i dataresultatet");
        }
      } else {
        console.error("Fejl ved hentning af data:", result.error);
        // Implementer passende fejlhåndtering eller vis en fejlbesked til brugeren.
      }
    } catch (error) {
      console.error("Der opstod en uventet fejl:", error);
      // Implementer passende fejlhåndtering eller vis en fejlbesked til brugeren.
    }

    // const assassin = await response.json()
    
    // if (assassin){
    //   setAssassin(assassin.rows[0])
    //   console.log(assassin)
    // }
  } 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Information about&nbsp;
          <code className="font-mono font-bold">Assassin's</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/NinjaTeknik"
            target="_blank"
            rel="noopener noreferrer"
          >
            By NinjaTekik{' '}
          </a>
        </div>
      </div>

      {assassin !== undefined && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Assassin Information</h2>
          <p>Name: {assassin.Name || "Loading..."}</p>
          <p>Phone: {assassin.Phone || "Loading..."}</p>
          <p>Address: {assassin.Address || "Loading..."}</p>
          <p>Gender: {assassin.Gender || "Loading..."}</p>
        </div>
      )}
      {!assassin &&(
        <p>Error Assassin data not available</p>
      )}

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <button
          onClick={() => updateAssassin(1)}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            1st Assassin{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            The co-founder of the hidden ones.
          </p>
        </button>

        <button
          onClick={() => updateAssassin(2)}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            2nd Assassin{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Theif turned master Assassin at the Alamut base.
          </p>
        </button>

        <button
          onClick={() => updateAssassin(3)}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            3rd Assassin{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            The new mentor of the levantine Assassin's.
          </p>
        </button>

        <button
          onClick={() => updateAssassin(4)}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            4th Assassin{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Very feared Pirate turned master Assassin.
          </p>
        </button>
      </div>
    </main>
  )
}
