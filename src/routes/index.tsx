import { createSignal } from 'solid-js'

export default function Home() {
    const [board, setBoard] = createSignal(
        Array.from({ length: 7 }, () =>
            Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
        )
    )

    return (
        <main class="flex min-h-screen items-center justify-center bg-gradient-to-t from-blue-400 via-cyan-200 to-cyan-400">
            <div class="flex flex-col items-center rounded-2xl bg-white p-1 shadow-xl sm:p-3">
                <div class="m-1 grid grid-cols-7 gap-1 sm:gap-3">
                    {board().map((row, i) =>
                        row.map((cell, j) => (
                            <div class="flex h-12 w-12 items-center justify-center rounded-md bg-blue-300 shadow-md sm:h-20 sm:w-20 md:h-24 md:w-24">
                                {cell}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
    )
}
