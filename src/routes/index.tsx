import { createSignal } from 'solid-js'

type Tile = {
    type: string
    background: string
    icon?: HTMLOrSVGElement
}

const tiles: Tile[] = [
    { type: 'green', background: 'bg-green-300' },
    { type: 'blue', background: 'bg-blue-300' },
    { type: 'yellow', background: 'bg-yellow-300' },
    { type: 'purple', background: 'bg-purple-300' },
    { type: 'red', background: 'bg-red-300' },
]

const getRandomTile = () => tiles[Math.floor(Math.random() * tiles.length)]

export default function Home() {
    const [board, setBoard] = createSignal(
        Array.from({ length: 7 }, () =>
            Array.from({ length: 7 }, () => getRandomTile())
        )
    )

    return (
        <main class="flex min-h-screen items-center justify-center bg-gradient-to-t from-blue-400 via-cyan-200 to-cyan-400">
            <div class="flex flex-col items-center rounded-2xl bg-white p-1 shadow-xl sm:p-3">
                <div class="m-1 grid grid-cols-7 gap-1 sm:gap-3">
                    {board().map((row, i) =>
                        row.map((cell, j) => (
                            <div
                                class={`flex h-12 w-12 items-center justify-center rounded-md shadow-md sm:h-20 sm:w-20 md:h-24 md:w-24 ${cell.background}`}
                            >
                                {cell.type}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
    )
}
